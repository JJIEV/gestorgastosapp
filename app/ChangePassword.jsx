import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ChangePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [userEmail, setUserEmail] = useState("ejemplo@correo.com");
  const [passwordChanged, setPasswordChanged] = useState(false);

  useEffect(() => {
    let timer;
    if (passwordChanged) {
      timer = setTimeout(() => {
        navigation.navigate('Profile', { userEmail: userEmail });
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [passwordChanged, navigation, userEmail]);

  const handleChangePassword = () => {
    setPasswordChanged(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña Actual"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Nueva Contraseña"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>

      {passwordChanged && (
        <Text style={styles.successMessage}>Contraseña cambiada</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
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
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ChangePassword;
