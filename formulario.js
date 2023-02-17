import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Formulario() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = () => {
      console.log(`Nome: ${nome}, Email: ${email}, idade: ${idade}`);
    };

    const handleNavigation = () => {
        if(email === "fernandes4626@gmail.com"  && password === "1234"){
            navigation.navigate('HomePage')
        }else{
            alert("E-mail ou password incorreto")
        }
    }
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="login" onPress={handleNavigation} />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
  });
  
  
  
  
  
  