import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import welcome_image from '../assets/welcome-image.png';


export default function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Use an online image URL */}
        <Image
          source={welcome_image}
          style={styles.image}
        />
      </View>




      <Text style={styles.title}>Discover Your Dream Job here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>




      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>




        <TouchableOpacity style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F7FE',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F41BB',
    textAlign: 'center',
    letterSpacing: 3.5,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  loginButton: {
    backgroundColor: '#1F41BB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: '#F4F7FE',
    borderColor: '#F4F7FE',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
