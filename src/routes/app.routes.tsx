import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { UserDetails } from '../pages/UserDetails';
import { UserProfile } from '../pages/UserProfile';
import { UserProfileEdit } from '../pages/UserProfileEdit';
import { UserProfilePassword } from '../pages/UserProfilePassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="UserDetails" component={UserDetails} />
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="UserProfileEdit" component={UserProfileEdit} />
      <Screen name="UserProfilePassword" component={UserProfilePassword} />
    </Navigator>
  );
};
