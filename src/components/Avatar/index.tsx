import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type AvatarProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary40, secondary100 } = theme.colors;

  return (
    <LinearGradient
    style={styles.container}
    colors={[secondary40, secondary100]}
  >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
  </LinearGradient>
  )
}