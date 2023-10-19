import React from 'react';

import { Text } from 'react-native';

import { FontAwesome, Feather } from '@expo/vector-icons';

import {
  Container,
  ScrollViewProjects,
  DailyReviewText,
  ContainerProject,
  ContentProjectAndHour,
  NameProject,
  ContentHourAndStatus,
  Hour,
  Status
} from './styles';

export function ListProjects() {
  const projects = [
    { id: Math.random(), name: 'Projeto 1', hour: '05:00 PM •', status: 'Finalizado' },
    { id: Math.random(), name: 'Projeto 2', hour: '10:00 AM •', status: 'Finalizado' },
    { id: Math.random(), name: 'Projeto 3', hour: '15:00 PM •', status: 'Finalizado' },
    { id: Math.random(), name: 'Projeto 4', hour: '18:00 AM •', status: 'Finalizado' },
    { id: Math.random(), name: 'Projeto 5', hour: '15:00 PM •', status: 'Finalizado' }
  ];

  return (
    <Container>
      <DailyReviewText>Daily Review</DailyReviewText>

      <ScrollViewProjects 
        showsVerticalScrollIndicator={false}
      >
        {projects.map(item => {
          return (
            <ContainerProject key={item.id}>
              <FontAwesome name='briefcase' size={20} color='#9B9B9B' />

              <ContentProjectAndHour>
                <NameProject>{item.name}</NameProject>

                <ContentHourAndStatus>
                  <Hour>{item.hour}</Hour>
                  <Status>{item.status}</Status>
                </ContentHourAndStatus>
              </ContentProjectAndHour>

              <Feather name='chevron-right' size={20} color='#9B9B9B' />
            </ContainerProject>
          )
        })}
      </ScrollViewProjects>
    </Container>
  );
}