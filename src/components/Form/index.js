import React, { useState } from 'react';

import Bag from '../../assets/bag.png';

import Qr from '../../assets/qr-scan.png';

import Exclamation from '../../assets/exclamation.png';

import Calendar from '../../assets/calendar.png';

import Identidade from '../../assets/identidade.png';

import Anuncio from '../../assets/anuncio.png';

import Dev from '../../assets/dev.png';

import Sino from '../../assets/notification.png';

import Plus from '../../assets/add-line.png';

import {
  Container,
  TypeProject,
  Title,
  ProjectContent,
  Link,
  Icon,
  InputProject,
  UrgencyAndTime,
  WrapperFormUrgency,
  ContentUrgency,
  ContentTime,
  InputUrgency,
  Necessity,
  NecessitySelect,
  SelectNecessity,
  SelectNecessityImage,
  TextSelect,
  Notification,
  NotificationContentInput,
  InputNotification,
  ButtonPlus,
  ContentInputButton,
  ButtonSend,
  TextSend
} from './styles.js';

export function Form() {
  return (
    <Container>
      <TypeProject>
        <Title>Tipo de projeto</Title>

        <ProjectContent>
          <Icon source={Bag} />

          <InputProject placeholder="Nome do projeto" />

          <Link>
            <Icon source={Qr} />
          </Link>
        </ProjectContent>
      </TypeProject>

      <UrgencyAndTime>
        <Title>Urgência & Tempo esperado</Title>

        <WrapperFormUrgency>
          <ContentUrgency>
            <Icon source={Exclamation} />

            <InputUrgency placeholder='Urgência' />
          </ContentUrgency>

          <ContentTime>
            <Icon source={Calendar} />

            <InputUrgency placeholder='30 dias' />
          </ContentTime>
        </WrapperFormUrgency>
      </UrgencyAndTime>

      <Necessity>
        <Title>Necessidades </Title>

        <NecessitySelect>
          <SelectNecessity>
            <SelectNecessityImage source={Identidade} />

            <TextSelect>Identidade</TextSelect>
          </SelectNecessity>
          
          <SelectNecessity>
            <SelectNecessityImage source={Anuncio} />

            <TextSelect>Anúncios</TextSelect>
          </SelectNecessity>
          
          <SelectNecessity style={{ backgroundColor: '#1BD15D' }}>
            <SelectNecessityImage source={Dev} />

            <TextSelect style={{ color: '#fff' }}>Desenvolvimento</TextSelect>
          </SelectNecessity>


        </NecessitySelect>
      </Necessity>

      <Notification>
        <Title>Notificações</Title>

        <ContentInputButton>
          <NotificationContentInput>
            <Icon source={Sino} />

            <InputNotification placeholder='10:00 AM' />
          </NotificationContentInput>

          <ButtonPlus>
            <Icon source={Plus} />
          </ButtonPlus>
        </ContentInputButton>
      </Notification>

      <ButtonSend>
        <TextSend>Enviar</TextSend>
      </ButtonSend>

    </Container>
  );
}