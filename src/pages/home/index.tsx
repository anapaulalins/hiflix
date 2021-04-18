/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {getMovies, searchMovie} from '../../api';
import avatar from '../../images/avatar.jpg';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Avatar,
  HeaderContent,
  SearchContainer,
  SearchContent,
  InputSearch,
  ListContainer,
  ListContent,
  LoadingIcon,
} from './styles';
import {FlatList} from 'react-native';
import Movie from '../../components/Movie';

interface PropsMovieList {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const Home = () => {
  const [listMovies, setListMovies] = useState<PropsMovieList[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const movieList = await getMovies();
    setListMovies(movieList);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const searchFilter = async (text: string) => {
    setSearch(text);
    if (text) {
      const results = searchMovie(text);
      results.then(data => setListMovies(data));
    } else {
      getData();
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Hello, Ana!</Title>
          <SubTitle>Find the best movies here</SubTitle>
        </HeaderContent>
        <HeaderContent>
          <Avatar source={avatar} resizeMode="cover" />
        </HeaderContent>
      </Header>
      <SearchContainer>
        <SearchContent>
          <Icon name="search" size={25} color="#fbf8ee" />
          <InputSearch
            placeholder="Search"
            placeholderTextColor="#b7b7bc"
            underlineColorAndroid="transparent"
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        </SearchContent>
      </SearchContainer>
      <ListContainer>
        <ListContent>
          {loading && <LoadingIcon size="large" color="#fbf8ee" />}

          <FlatList
            data={listMovies}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingRight: 30,
              paddingLeft: 30,
              paddingBottom: 10,
              paddingTop: 10,
            }}
            renderItem={({item}) => <Movie item={item} />}
          />
        </ListContent>
      </ListContainer>
    </Container>
  );
};

export default Home;
