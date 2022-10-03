import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCustom } from '../components/ButtonCustom'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/AppTheme'

export const CalculatorScreen = () => {
  const {
    result,
    resultPrev,
    clean,
    calculate,
    pressDigit,
    deleteDigit,
    positiveOrNegative,
    btnAddition,
    btnSubtraction,
    btnDivision,
    btnMultiplication
  } = useCalculator()
  
  return (
    <View>
      {
        (resultPrev !== '0') && (
          <Text style={styles.smallResult}>{resultPrev}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{result}</Text>

      <View style={styles.buttonRow}>
        <ButtonCustom text="C" color="#9b9b9b" action={clean} />
        <ButtonCustom text="+/-" color="#9b9b9b" action={positiveOrNegative} />
        <ButtonCustom text="del" color="#9b9b9b" action={deleteDigit} />
        <ButtonCustom text="/" color="#ff9427" action={btnDivision} />
      </View>

      <View style={styles.buttonRow}>
        <ButtonCustom text="7" action={pressDigit} />
        <ButtonCustom text="8" action={pressDigit} />
        <ButtonCustom text="9" action={pressDigit} />
        <ButtonCustom text="X" color="#ff9427" action={btnMultiplication} />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCustom text="4" action={pressDigit} />
        <ButtonCustom text="5" action={pressDigit} />
        <ButtonCustom text="6" action={pressDigit} />
        <ButtonCustom text="-" color="#ff9427" action={btnSubtraction} />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCustom text="1" action={pressDigit} />
        <ButtonCustom text="2" action={pressDigit} />
        <ButtonCustom text="3" action={pressDigit} />
        <ButtonCustom text="+" color="#ff9427" action={btnAddition} />
      </View>
      <View style={styles.buttonRow}>
        <ButtonCustom text="0" wider action={pressDigit} />
        <ButtonCustom text="." action={pressDigit} />
        <ButtonCustom text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  )
}
