import React, { useState, useEffect } from 'react';

import Sino from '../../assets/notification.png';

import Bag from '../../assets/bag.png';

import Qr from '../../assets/qr-scan.png';

import Exclamation from '../../assets/exclamation.png';

import Calendar from '../../assets/calendar.png';

import Identidade from '../../assets/identidade.png';

import Anuncio from '../../assets/anuncio.png';

import Dev from '../../assets/dev.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  TypeProject,
  Title,
  ProjectContent,
  Link,
  Icon,
  UrgencyAndTime,
  WrapperFormUrgency,
  ContentUrgency,
  ContentTime,
  Necessity,
  NecessitySelect,
  SelectNecessity,
  SelectNecessityImage,
  TextSelect,
  Notification,
  NotificationContentInput,
  ContentInputButton,
  TextInfo
} from './styles';

export function Details() {
  const [ formInfo, setFormInfo ] = useState([]);

  useEffect(() => {
    getData();
  },[formInfo])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('infos');

      setFormInfo(JSON.parse(jsonValue) || []);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log('Error no retorno das informações: ' + e.message)
    }
  };

  return (
    <Container>
      <TypeProject>
        <Title>Tipo de projeto</Title>

        <ProjectContent>
          <Icon source={Bag} />

          <TextInfo>{formInfo.nameproject}</TextInfo>

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

            <TextInfo>{formInfo.urgencyproject}</TextInfo>
          </ContentUrgency>

          <ContentTime>
            <Icon source={Calendar} />

            <TextInfo>{formInfo.daysproject}</TextInfo>
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

            <TextInfo>{formInfo.notificationproject}</TextInfo>
          </NotificationContentInput>
        </ContentInputButton>
      </Notification>
    </Container>
  );
}
