import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #12131e;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 50px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fbf8ee;
  flex: 1;
  margin-right: 5px;
`;

export const Vote = styled.View`
  background-color: #ddb300;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
`;

export const VoteNumber = styled.Text`
  color: #594d08;
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
`;

export const OverviewContent = styled.View`
  margin-top: 10px;
`;

export const OverviewTitle = styled.Text`
  color: #c8c6d4;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Overview = styled.Text`
  color: #c8c6d4;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const Date = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
`;

export const DateText = styled.Text`
  color: #c8c6d4;
  font-size: 14px;
  margin-left: 10px;
`;

export const GenresContent = styled.View`
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Genres = styled.View`
  background-color: #2b5784;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const GenresText = styled.Text`
  color: #fbf8ee;
  letter-spacing: 0.5px;
`;

export const Favorite = styled.TouchableOpacity`
  background-color: rgba(251, 248, 238, 0.8);
  position: absolute;
  bottom: -20px;
  left: 35px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  z-index: 1;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 2;
`;
