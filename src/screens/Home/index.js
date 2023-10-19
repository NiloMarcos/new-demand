import React from 'react';

import {
  Text
} from 'react-native';

import Icon from '@expo/vector-icons/Feather';

import {
  Container,
  ContentSearch,
  Input,
  ContentGrettings,
  Grettings,
  Name
} from './styles';

export function Home() {
  return (
    <Container>
      <ContentSearch>
        <Icon name='search' color='#9B9B9B' size={20} />
        <Input placeholder='Buscar projeto' />
      </ContentSearch>

      <ContentGrettings>
        <Grettings>Olá</Grettings>
        <Name>Kathryn</Name>
      </ContentGrettings>
    </Container>
  );
}
