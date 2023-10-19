import React from 'react';

import Icon from '@expo/vector-icons/Feather';

import Profile from '../../assets/profile.png';

import {
  Container,
  ContentSearch,
  Input,
  ContentGrettings,
  Grettings,
  Name,
  ContainerCardProjects,
  ContentCardProjectsTexts,
  ContentCardProjectsProfileImg,
  Title,
  SubTitle,
  LinkViewMore,
  LinkViewMoreText,
  Image
} from './styles';
import { ListProjects } from '../../components/ListProjects';

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

      <ContainerCardProjects>
        <ContentCardProjectsTexts>
          <Title>Seus projetos</Title>
          <SubTitle>2 de 4 Completos</SubTitle>

          <LinkViewMore>
            <LinkViewMoreText>
              Ver mais
            </LinkViewMoreText>
          </LinkViewMore>
        </ContentCardProjectsTexts>

        <ContentCardProjectsProfileImg>
          <Image source={Profile} />
        </ContentCardProjectsProfileImg>
      </ContainerCardProjects>

      <ListProjects />

    </Container>
  );
}
