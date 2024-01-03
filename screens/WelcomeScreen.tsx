import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}: any) {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Ir al Carrito' onPress={()=> navigation.navigate('Tabs')}/>
    </View>
  )
}

const styles = StyleSheet.create({})