import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
  text: string,
  color?: string,
  wider?: boolean,
  action: (digit: string) => void
}

export const ButtonCustom = ({ text, color = '#2d2d2d', wider = false, action }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => action(text)}>
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: wider ? 176 : 80
      }}>
        <Text style={{
          ...styles.buttonText,
          color: color === '#9b9b9b' ? 'black' : 'white'
        }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}