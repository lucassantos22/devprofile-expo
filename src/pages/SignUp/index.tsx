import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { api } from '../../services/api';
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
import axios from 'axios';

interface IFormInput {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Name cannot be empty.'),
  email: yup
    .string()
    .email('Invalid e-mail.')
    .required('E-mail cannot be empty.'),
  password: yup.string().required('Password cannot be empty.'),
});

export const SignUp: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

  async function handleSignUp({ name, email, password }: IFormInput) {
    const data = {
      name,
      email,
      password,
    };
    try {
      await api.post('users', data);
      Alert.alert(`Hello ${name}!`, 'You can login now');
    } catch (error) {
      Alert.alert('Sign up error', 'Try again later');
    }
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
              error={errors.name && errors.name.message}
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              error={errors.password && errors.password.message}
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
