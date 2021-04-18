import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import Home from '../pages/home';
import Favourites from '../pages/favourites';
import Profile from '../pages/profile';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourites" component={Favourites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabRoutes;
