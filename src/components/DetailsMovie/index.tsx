import React, {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getMovie} from '../../api';
import {Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  BackgroundImage,
  Content,
  Title,
  Vote,
  VoteNumber,
  HeaderContent,
  OverviewContent,
  Overview,
  OverviewTitle,
  Date,
  DateText,
  GenresContent,
  Genres,
  GenresText,
  Favorite,
  BackButton,
} from './styles';

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

import {useFavorite} from '../../hooks/context';

const DetailsMovie = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const [item, setItem] = useState<PropsItem>({} as PropsItem);

  const scrollY = useRef(new Animated.Value(0)).current;

  const {addFavourites, favourites} = useFavorite();

  const HEADER_HEIGHT = 500;

  const Height = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 60],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const response = getMovie(route.params.id);
    response.then(data => setItem(data));
  }, [route.params.id]);

  return (
    <Container>
      <Animated.View style={{height: Height, position: 'relative'}}>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon
            name="long-arrow-left"
            size={40}
            color=" rgba(251, 248, 238, 0.8)"
          />
        </BackButton>
        <BackgroundImage
          source={{
            uri: `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${item.backdrop_path}`,
          }}
          resizeMode="cover"
        />
        <Favorite onPress={() => addFavourites(item)}>
          <Icon
            name={
              favourites.find(favourite => favourite.id === item.id)
                ? 'heart'
                : 'heart-o'
            }
            size={30}
            color="#d70f34"
            style={{marginTop: 5}}
          />
        </Favorite>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: false},
        )}>
        <Content>
          <HeaderContent>
            <Title>{item.title}</Title>
            <Vote>
              <Icon name="star" size={20} color="#594d08" />
              <VoteNumber>{item.vote_average}</VoteNumber>
            </Vote>
          </HeaderContent>
          <OverviewContent>
            <OverviewTitle>Overview</OverviewTitle>
            <Overview>{item.overview}</Overview>
          </OverviewContent>
          <Date>
            <Icon name="calendar" size={18} color="#c8c6d4" />
            <DateText>{item.release_date}</DateText>
          </Date>
          <GenresContent>
            {item.genres && (
              <>
                {item.genres.map(item => (
                  <Genres key={item.id}>
                    <GenresText>{item.name}</GenresText>
                  </Genres>
                ))}
              </>
            )}
          </GenresContent>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default DetailsMovie;
