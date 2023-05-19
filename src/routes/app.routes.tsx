import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
