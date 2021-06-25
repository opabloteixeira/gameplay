import React from 'react';

import {
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import { styles } from './styles'

import { ButtonIcon } from '../../components/ButtonIcon';

import IlustrationImg from '../../assets/illustration.png';
export function Signin() {
  return (
    <View style={styles.container} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View
        style={styles.content}
      >
        <Text
          style={styles.title}
        >
          Organize {`\n`}
          suas Jogatinas {`\n`}
          facilmente
        </Text>

        <Text
          style={styles.subtitle}
        >
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entre com o Discord"
          activeOpacity={0.7}
        />
        
      </View>



    </View>
  )
} 