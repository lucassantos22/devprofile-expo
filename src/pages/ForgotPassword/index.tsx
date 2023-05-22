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

interface IFormInput {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup
    .string()
    .email('Invalid e-mail.')
    .required('E-mail cannot be empty.'),
});

export const ForgotPassword: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

  async function handleForgotPassword({ email }: IFormInput) {
    const data = {
      email,
    };
    try {
      await api.post('password/forgot', data);
      Alert.alert('E-mail sent!');
      navigation.navigate('ResetPassword');
    } catch (error) {
      Alert.alert(
        'Error trying to send the password redefinition e-mail',
        'Try again later',
      );
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
            <Title>Redefine your password</Title>
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <Button
              title="Redefine"
              onPress={handleSubmit(handleForgotPassword)}
            />
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
