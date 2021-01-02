import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function App() {
  const columnButtons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [',', '0', '=']
  ]
  const columnMath = ['C', '+', 'x', '-', '/']
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Display</Text>
      <Text style={styles.result}>Result</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {
            columnButtons.map((line, index) => (
              <View key={index} style={styles.line}>
                { 
                  line.map(op => (
                    <View key={op} style={styles.btn}>
                      <Text style={styles.btnText}>{op}</Text>
                    </View>)) 
                }
              </View>
            ))
          }
        </View>
        <View style={styles.col2}>
          { 
            columnMath.map(op => (
              <View key={op} style={styles.btn}>
                <Text style={styles.btnText}>{op}</Text>
              </View>)) 
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
    backgroundColor: 'grey',
  },
  col2: {
    flex: 1,
    backgroundColor: 'red',
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
  }
})