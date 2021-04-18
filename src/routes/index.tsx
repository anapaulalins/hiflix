import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import DetailsMovie from '../components/DetailsMovie';

const Route = createStackNavigator();

const Routes = () => (
  <Route.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Route.Screen name="TabRoutes" component={TabRoutes} />
    <Route.Screen name="DetailsMovie" component={DetailsMovie} />
  </Route.Navigator>
);

export default Routes;
