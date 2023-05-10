import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { Icon } from '../SignIn/styles';

export const SignUp: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Create your account</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />

            <Button title="Create" />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Log in</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
