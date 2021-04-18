import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #12131e;
`;

export const Header = styled.View`
  margin-top: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const HeaderContent = styled.View``;

export const Title = styled.Text`
  color: #fbf8ee;
  font-size: 18px;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  color: #b7b7bc;
  font-size: 15px;
  margin-top: 3px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const SearchContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

export const SearchContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2b2738;
  padding: 2px 13px;
  border-radius: 20px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #e3e2e5;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const ListContent = styled.View``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
