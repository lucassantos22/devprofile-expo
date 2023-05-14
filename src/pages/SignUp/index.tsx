import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
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
import { InputControl } from '../../components/Form/InputControl';

interface IFormInput {
  [name: string]: any;
}

export const SignUp: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  const { handleSubmit, control } = useForm<FieldValues>();

  function handleSignUp({ name, email, password }: IFormInput) {
    console.log({ name, email, password });
  }

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
            <InputControl
              control={control}
              autoCorrect={false}
              name="name"
              placeholder="Name"
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
            />

            <Button title="Create" onPress={handleSubmit(handleSignUp)} />
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
