import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import LogoImage from '../assets/pngwing.com (2).png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userCreated, setUserCreated] = useState(false); 

  const navigation = useNavigation();


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!isValidEmail(email.trim())) {
      Alert.alert('Error', 'Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setUserCreated(true);

    setTimeout(() => {
      setUserCreated(false);
    }, 5000);
  };

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Register", 
        headerStyle: {
          backgroundColor: "#007bff", 
        },
        headerTintColor: "#fff", 
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />

      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button}>Registrarse</Text>
      </TouchableOpacity>

      {/* Mostrar mensaje de usuario creado si es true */}
      {userCreated && (
        <Text style={styles.successMessage}>Usuario creado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});
