import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = ({ navigation, userEmail }) => {
    const handleHome = () => {
      navigation.navigate('Home');
    };
  
    const handleProfile = () => {
      navigation.navigate('Profile', { userEmail: userEmail });
    };
  
    const handleLogout = () => {
      navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.option} onPress={handleHome}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.optionText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleProfile}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.optionText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Ionicons name="log-out" size={24} color="white" />
          <Text style={styles.optionText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#001f3f", 
    paddingVertical: 10,
    borderTopWidth: 1, 
    borderTopColor: "#fff", 
    width: "100%", 
    position: "absolute", 
    top: 0, 
  },
  option: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  optionText: {
    color: "#fff", 
    marginLeft: 5, 
  },
});

export default NavigationBar;
