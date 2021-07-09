import React from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';



export function Signin() {

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container} >

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
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text
          style={styles.subtitle}
        >
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          title="Entre com o Discord"
          onPress={ handleSignIn }
        />
        
      </View>



    </View>
  )
} 