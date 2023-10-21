import React from 'react';

import Arrow from '../../assets/left-arrow.png';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackButton,
  Image
} from './styles';
import { Text } from 'react-native';

export function Details() {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={Arrow} />
      </BackButton>

      <Text>Página de detalhes</Text>
    </Container>
  );
}
