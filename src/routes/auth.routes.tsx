import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
