import React from 'react';

import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Arrow from '../../assets/left-arrow.png';

import { Form } from '../../components/Form';

import {
  Container,
  Title,
  BackButton,
  Image,
} from './styles';

export function Register() {
  const navigation = useNavigation();


  return (
    <Container
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={Arrow} />
      </BackButton>

      <Title style={{ marginTop: Platform === 'ios' ? 50 : 30 }}>Nova demanda</Title>

      <Form />
    </Container>
  );
}