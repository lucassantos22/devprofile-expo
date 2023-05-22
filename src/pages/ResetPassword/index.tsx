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
  token: yup.string().uuid('Invalid token.').required('Token cannot be empty.'),
  password: yup.string().required('New password cannot be empty.'),
  password_confirmation: yup
    .string()
    .required('New password cannot be empty.')
    .oneOf([yup.ref('password')], 'Both passwords must be equal.'),
});

export const ResetPassword: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

  async function handleResetPassword({
    token,
    password,
    password_confirmation,
  }: IFormInput) {
    const data = {
      token,
      password,
      password_confirmation,
    };
    try {
      await api.post('password/reset', data);
      Alert.alert(`Password redefined!`, 'You can login now');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error redefining your password', 'Review your token');
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
              autoCorrect={false}
              name="token"
              placeholder="Token"
              error={errors.token && errors.token.message}
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="New password"
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <InputControl
              control={control}
              autoCapitalize="none"
              autoCorrect={false}
              name="password_confirmation"
              placeholder="Confirm your new password"
              secureTextEntry
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
            />

            <Button
              title="Change password"
              onPress={handleSubmit(handleResetPassword)}
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
