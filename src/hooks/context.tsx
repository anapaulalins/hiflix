import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface PropsContext {
  favourites: Array<PropsItem>;
  addFavourites: (item: PropsItem) => Promise<void>;
  removeFavourites: (item: PropsItem) => Promise<void>;
}

interface PropsItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genres: Array<PropsGenres>;
}

interface PropsGenres {
  id: number;
  name: string;
}

const Context = createContext<PropsContext>({} as PropsContext);

export const Provider = ({children}) => {
  const [favourites, setFavourites] = useState<PropsItem[]>([]);

  useEffect(() => {
    async function dataStorage() {
      const res = await AsyncStorage.getItem('@Hiflix:Favourites');

      if (res) {
        setFavourites(JSON.parse(res));
      }
    }
    dataStorage();
  }, []);

  const addFavourites = async (item: PropsItem) => {
    if (favourites.find(favourite => favourite.id === item.id)) {
      return;
    }

    const newFavourite = [...favourites, item];
    setFavourites(newFavourite);
    await AsyncStorage.setItem(
      '@Hiflix:Favourites',
      JSON.stringify(newFavourite),
    );
  };

  const removeFavourites = async (item: PropsItem) => {
    const newFavourite = favourites.filter(
      favourite => favourite.id !== item.id,
    );
    setFavourites(newFavourite);
    await AsyncStorage.setItem(
      '@Hiflix:Favourites',
      JSON.stringify(newFavourite),
    );
  };

  return (
    <Context.Provider value={{favourites, addFavourites, removeFavourites}}>
      {children}
    </Context.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(Context);

  return context;
};
