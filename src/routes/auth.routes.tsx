import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="ResetPassword" component={ResetPassword} />
    </Navigator>
  );
};
