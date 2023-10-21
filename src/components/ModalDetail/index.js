import React, { useRef } from 'react';

import {TouchableOpacity, Text} from 'react-native';

import { Modalize } from 'react-native-modalize';

export function ModalDetail() {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open</Text>
      </TouchableOpacity>

      <Modalize 
        ref={modalizeRef}
        snapPoint={600}
      >
        <Text>...your content</Text>
      </Modalize>
    </>
  );
}