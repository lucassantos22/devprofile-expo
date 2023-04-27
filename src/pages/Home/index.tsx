import React from 'react';
import { Container, Header } from './styles';

import avatarDefault from '../../assets/avatar01.jpeg';

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton>
              <UserAvatar source={avatarDefault}></UserAvatar>
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Lucas</UserName>
            </UserInfoDetail>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
};
