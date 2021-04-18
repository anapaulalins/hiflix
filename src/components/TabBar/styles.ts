import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  background-color: #12131e;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10px;
`;

export const TabItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 15px;
`;

export const AvatarUser = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
