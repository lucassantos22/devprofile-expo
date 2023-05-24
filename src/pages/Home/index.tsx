import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

import avatarDefault from '../../assets/avatar01.jpeg';
import { useAuth } from '../../context/AuthContext';
import { IUser } from '../../model/User';
import { api } from '../../services/api';

export const Home: React.FunctionComponent = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { user, signOut } = useAuth();

  useEffect(() => {
    async function fetch() {
      const res = await api.get('users');
      setUsers(res.data);
    }

    fetch();
  }, []);

  console.log(users);

  function handleSignOut() {
    Alert.alert(`Hi ${user.name}!`, 'Do you really want to sign out?', [
      {
        text: 'No',
        onPress: () => {},
      },
      { text: 'Yes', onPress: signOut },
    ]);
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              ></UserAvatar>
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Hello, </UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name="power" onPress={handleSignOut} />
        </UserWrapper>
      </Header>
    </Container>
  );
};
