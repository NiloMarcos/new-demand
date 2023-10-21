import React from 'react';

import { Platform } from 'react-native';

import { Form } from '../../components/Form';

import {
  Container,
  Title
} from './styles';

export function Register() {
  return (
    <Container>
      <Title style={{ marginTop: Platform === 'ios' ? 50 : 30 }}>Nova demanda</Title>

      <Form />
    </Container>
  );
}