import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Container } from './styles';
import { IUser } from '../../model/User';
import { api } from '../../services/api';

interface RouteParams {
  userId: string;
}

export const UserDetails: React.FunctionComponent = () => {
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser);
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    };
    loadUser();
  }, [userId]);

  return <Container />;
};
