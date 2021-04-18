import React from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import {useFavorite} from '../../hooks/context';

import {
  Container,
  Title,
  FavouritesConteiner,
  FavouritesContent,
  Poster,
  TitleMovie,
  FavouritesContentDetails,
  Vote,
  VoteText,
  OverviewContainer,
  OverviewText,
  RemoveFavourite,
  NoMovie,
  NoMovieText,
} from './styles';

const Favourites = () => {
  const {favourites, removeFavourites} = useFavorite();

  return (
    <Container>
      <Title>My Favourites Movies</Title>
      {favourites.length === 0 && (
        <NoMovie>
          <IconMCI name="movie" size={90} color="#c8c6d4" />
          <NoMovieText>No favourite movies</NoMovieText>
        </NoMovie>
      )}
      <FlatList
        data={favourites}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FavouritesConteiner>
            <FavouritesContent>
              <Poster
                source={{
                  uri: `https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}`,
                }}
              />
            </FavouritesContent>
            <FavouritesContentDetails>
              <TitleMovie>{item.title}</TitleMovie>
              <RemoveFavourite onPress={() => removeFavourites(item)}>
                <IconF5 name="heart-broken" size={30} color="#d70f34" />
              </RemoveFavourite>
              <OverviewContainer>
                <OverviewText numberOfLines={4}>{item.overview}</OverviewText>
              </OverviewContainer>
              <Vote>
                <Icon name="star" size={20} color="#e8bd00" />
                <VoteText>{item.vote_average}</VoteText>
              </Vote>
            </FavouritesContentDetails>
          </FavouritesConteiner>
        )}
      />
    </Container>
  );
};

export default Favourites;
