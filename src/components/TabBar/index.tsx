import React, {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import IconUser from 'react-native-vector-icons/FontAwesome5';
import {Container, TabItem} from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const navigationScreen = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <Container>
      <TabItem onPress={() => navigationScreen('Home')}>
        <Icon
          name="home"
          size={30}
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Favourites')}>
        <Icon
          name="hearto"
          size={30}
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Profile')}>
        <IconUser
          name="user"
          size={30}
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
    </Container>
  );
};

export default TabBar;
