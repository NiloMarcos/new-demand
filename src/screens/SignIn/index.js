import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { Container, Input, Title, Button, TextButton, Text } from './styles';

const schema = yup.object({
  name: yup.string().required('Preencha com seu nome para avançar')
});

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  async function handleSubmitName(data) {
    console.log(data)

    try {
      console.log('Meu usúario', data)

      const jsonValue = JSON.stringify(data)

      await AsyncStorage.setItem('login', jsonValue);

      navigation.navigate('Tab')

    } catch (e) {
      // saving error
      console.log('Ocorreu um error: ' + e.message)
    }
  };

  return (
    <Container>
      <Title>Insira seu nome</Title>



      <Controller 
        control={control}
        name='name'
        render={({ field: { onChange, onBlur, value} }) => (
          <Input 
            placeholder='Insira seu nome' 
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}

          />
        )}
      />
      {errors.name && <Text style={{ color: 'red', marginTop: 10 }}>{errors.name?.message}</Text>}

      <Button onPress={handleSubmit(handleSubmitName)}>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}