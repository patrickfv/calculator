import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function App() {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState('')

  const columnButtons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [',', '0', '=']
  ]
  const columnMath = ['C', '+', 'x', '-', '÷']
  const handleOp = op => {
    if(op === 'C') {
    
      setDisplay('')
      setResult('')
    
    } else if(op === '=') {
      
      setDisplay(result)
      setResult('')
    
    } else {
      
      const dis = display + op
      let resul = result
      
      try {
      
        let fixedOperation = dis.split('x').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')
        resul = new String(eval(fixedOperation))
      
      } catch(err) {}

      setDisplay(dis)
      setResult(resul)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{ display }</Text>
      <Text style={styles.result}>{ result }</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {
            columnButtons.map((line, index) => (
              <View key={index} style={styles.line}>
                { 
                  line.map(op => (
                    <TouchableOpacity 
                      key={op} 
                      style={styles.btn}
                      onPress={() => handleOp(op)}>
                      <Text style={styles.btnText}>{op}</Text>
                    </TouchableOpacity>)) 
                }
              </View>
            ))
          }
        </View>
        <View style={styles.col2}>
          { 
            columnMath.map(op => (
              <TouchableOpacity 
                key={op} 
                style={styles.btn}
                onPress={() => handleOp(op)}>
                <Text style={styles.btnText}>{op}</Text>
              </TouchableOpacity>)) 
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  display: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10,
  },
  result: {
    flex: .4,
    backgroundColor: '#EFEFEF',
    fontSize: 40,
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  col1: {
    flex: 3,
    backgroundColor: '#000',
  },
  col2: {
    flex: 1,
    backgroundColor: '#000',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  }
})