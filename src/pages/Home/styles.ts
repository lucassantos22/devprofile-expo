import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;

const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  font-size: 24px;
  background-color: ${props => props.theme.colors.secondary};
`;

export { Container, Header };
