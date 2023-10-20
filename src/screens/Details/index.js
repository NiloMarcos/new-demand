import React from 'react';

import Arrow from '../../assets/left-arrow.png';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackButton,
  Image,
  Title


} from './styles';

export function Details() {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={Arrow} />
      </BackButton>
      
      <Title>Nova demanda</Title>

    </Container>
  );
}