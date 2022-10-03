import { useRef, useState } from 'react'

enum Operators {
  addition, subtraction, multiplication, division
}

export const useCalculator = () => {
  const [result, setResult] = useState('0')
  const [resultPrev, setResultPrev] = useState('0')

  const lastOperation = useRef<Operators>()

  const clean = () => {
    setResult('0')
    setResultPrev('0')
  }

  const pressDigit = (digit: string) => {
    // no aceptar doble punto
    if (result.includes('.') && digit === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      // punto decimal
      if (digit === '.') {
        setResult(result + digit)
      } else if (digit === '0' && result.includes('.')) { // evaluar si hay ceros despues del punto decimal
        setResult(result + digit)
      } else if (digit !== '0' && !result.includes('.')) { // evaluar si existe cero sin punto y reemplazar
        setResult(digit)
      } else if (digit === '0' && !result.includes('.')) {
        setResult(result)
      } else {
        setResult(result + digit)
      }
    } else {
      setResult(result + digit)
    }
  }

  const positiveOrNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''))
    } else {
      setResult('-' + result)
    }
  }

  const deleteDigit = () => {
    if (result.length === 1) {
      setResult('0')
    } else if (result.length === 2 && result.includes('-')) {
      setResult('0')
    } else {
      setResult(result.slice(0, -1))
    }
  }

  const switchResult  = () => {
    if (result.endsWith('.')) {
      setResultPrev(result.slice(0, -1))
    } else {
      setResultPrev(result)
    }
    setResult('0')
  }

  const btnDivision = () => {
    switchResult()
    lastOperation.current = Operators.division
  }

  const btnMultiplication = () => {
    switchResult()
    lastOperation.current = Operators.multiplication
  }

  const btnSubtraction = () => {
    switchResult()
    lastOperation.current = Operators.subtraction
  }

  const btnAddition = () => {
    switchResult()
    lastOperation.current = Operators.addition
  }

  const calculate = () => {
    const num1 = Number(result)
    const num2 = Number(resultPrev)
  
    switch (lastOperation.current) {
      case Operators.addition:
        setResult(`${num1 + num2}`)
        break;
      case Operators.subtraction:
        setResult(`${num2 - num1}`)
        break;
      case Operators.multiplication:
        setResult(`${num1 * num2}`)
        break;
      case Operators.division:
        setResult(`${num2 / num1}`)
        break;
      default:
        break;
    }
    setResultPrev('0')
  }

  return {
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
  }
}