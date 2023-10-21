import React from 'react';

import { Text } from 'react-native';

import Bag from '../../assets/bag.png';

import Qr from '../../assets/qr-scan.png';

import Exclamation from '../../assets/exclamation.png';

import Calendar from '../../assets/calendar.png';

import Identidade from '../../assets/identidade.png';

import Anuncio from '../../assets/anuncio.png';

import Dev from '../../assets/dev.png';

import Sino from '../../assets/notification.png';

import Plus from '../../assets/add-line.png';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup'

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  ButtonPlus,
  ContentInputButton,
  ButtonSend,
  TextSend
} from './styles.js';

import { useNavigation } from '@react-navigation/native';

const schema = yup.object({
  nameproject: yup.string().required('Informe o nome do projeto'),
  urgencyproject: yup.string().required('Informe o prazo'),
  daysproject: yup.string().required('Informe os dias'),
  notificationproject: yup.string().required('Informe o horário da notificação')
});

export function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  async function handleSubmitProjectForm(data) {
    console.log(data)

    try {
      console.log('Minhas Informações', data)

      const jsonValue = JSON.stringify(data)

      await AsyncStorage.setItem('infos', jsonValue);

      navigation.navigate('Home')

    } catch (e) {
      // saving error
      console.log('Ocorreu um error: ' + e.message)
    }
  };

  return (
    <Container>
      <TypeProject>
        <Title>Tipo de projeto</Title>

        <ProjectContent>
          <Icon source={Bag} />

          <Controller 
            control={control}
            name='nameproject'
            render={({ field: { onChange, onBlur, value} }) => (
              <InputProject 
                placeholder='Nome do projeto' 
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />

          <Link>
            <Icon source={Qr} />
          </Link>
        </ProjectContent>
      </TypeProject>
      {errors.nameproject && <Text style={{ color: 'red', position: 'relative', top: -20 }}>{errors.nameproject?.message}</Text>}

      <UrgencyAndTime>
        <Title>Urgência & Tempo esperado</Title>

        <WrapperFormUrgency>
          <ContentUrgency>
            <Icon source={Exclamation} />

            <Controller 
              control={control}
              name='urgencyproject'
              render={({ field: { onChange, onBlur, value} }) => (
                <InputUrgency 
                  placeholder='Urgência' 
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}

              />
            )}
          />

          {errors.urgencyproject && <Text style={{ color: 'red', position: 'absolute', bottom: -15  }}>{errors.urgencyproject?.message}</Text>}
          </ContentUrgency>

          <ContentTime>
            <Icon source={Calendar} />

            <Controller 
              control={control}
              name='daysproject'
              render={({ field: { onChange, onBlur, value} }) => (
                <InputUrgency 
                  placeholder='30 Dias' 
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}

                />
              )}
            />
            {errors.daysproject && <Text style={{ color: 'red', position: 'absolute', bottom: -15  }}>{errors.daysproject?.message}</Text>}
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

            <Controller 
              control={control}
              name='notificationproject'
              render={({ field: { onChange, onBlur, value} }) => (
                <InputUrgency 
                  placeholder='10:00 AM' 
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}

                />
              )}
            />
            {errors.notificationproject && <Text style={{ color: 'red', position: 'absolute', bottom: -20  }}>{errors.notificationproject?.message}</Text>}
          </NotificationContentInput>

          <ButtonPlus>
            <Icon source={Plus} />
          </ButtonPlus>
        </ContentInputButton>
      </Notification>

      <ButtonSend onPress={handleSubmit(handleSubmitProjectForm)}>
        <TextSend>Enviar</TextSend>
      </ButtonSend>

    </Container>
  );
}