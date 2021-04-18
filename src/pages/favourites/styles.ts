import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #12131e;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #fbf8ee;
  margin-top: 30px;
  letter-spacing: 1px;
`;

export const FavouritesConteiner = styled.View`
  background-color: #2b2738;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
`;

export const FavouritesContent = styled.View`
  padding: 10px;
`;

export const FavouritesContentDetails = styled.View`
  flex: 1;
  padding: 15px 5px;
`;

export const Poster = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 8px;
`;

export const TitleMovie = styled.Text`
  color: #fbf8ee;
  font-size: 20px;
  letter-spacing: 1px;
`;

export const Vote = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  margin-top: 8px;
`;

export const VoteText = styled.Text`
  color: #e8bd00;
  font-weight: 700;
  font-size: 15px;
`;

export const OverviewContainer = styled.View`
  margin-top: 5px;
`;

export const OverviewText = styled.Text`
  color: #fbf8ee;
  font-size: 13.5px;
  letter-spacing: 1px;
`;

export const RemoveFavourite = styled.TouchableOpacity`
  position: absolute;
  bottom: 9px;
  right: 15px;
`;

export const NoMovie = styled.View`
  position: absolute;
  top: 50%;
  width: ${width};
  align-items: center;
`;

export const NoMovieText = styled.Text`
  color: #c8c6d4;
  font-size: 20px;
  letter-spacing: 1px;
`;
