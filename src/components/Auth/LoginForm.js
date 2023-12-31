import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  Button, 
  Keyboard } from 'react-native'
  import {useFormik} from 'formik'
  import * as Yup from 'yup'

export default function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues()
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder='Nombre de Usuario'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput 
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button 
        title='Iniciar Sesión'
        onPress={() =>  console.log('Ingresando....')}
      />
    </View>
  )
}

function initialValues(){
  return{
    username: "",
    password: ""  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    borderRadius:10,
  }
})