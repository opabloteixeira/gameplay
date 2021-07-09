import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { View, ScrollView } from 'react-native';

export function CategorySelect({...rest}: RectButtonProps) {
  return (
    <View>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {
            // colocar categorias
        }

      </ScrollView>
    </View>
  )
};