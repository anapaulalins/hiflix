import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Item, TitleMovie, Image} from './styles';

interface PropsMovieList {
  item: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
  };
}

const Movie = ({item}: PropsMovieList) => {
  const navigation = useNavigation();

  return (
    <Item
      key={item.id}
      onPress={() => navigation.navigate('DetailsMovie', {id: item.id})}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`,
        }}
        resizeMode="contain"
      />
      <TitleMovie numberOfLines={1}>{item.title}</TitleMovie>
    </Item>
  );
};

export default Movie;
