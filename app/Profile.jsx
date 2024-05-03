import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import PerfilImage from '../assets/pngegg.png';
import { useFocusEffect } from "@react-navigation/native"; 

const Profile = ({ navigation, route }) => {
  const userEmail = route.params.userEmail;

  const handleChangePassword = () => {

    navigation.navigate('ChangePassword');
  };

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Profile", 
        headerStyle: {
          backgroundColor: "#007bff", 
        },
        headerTintColor: "#fff", 
      });
    }, [])
  );

  return (
    <View style={styles.container}>
        <Image source={PerfilImage} style={styles.logo} resizeMode="contain"/>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.userInfo}>{userEmail}</Text>
      </View>
      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
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
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    fontSize: 16,
  },
  changePasswordButton: {
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Profile;
