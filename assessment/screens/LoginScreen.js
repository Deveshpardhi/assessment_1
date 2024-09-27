import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

   
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

   
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

    
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>

      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity>
          <Image
            source={google}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={facebook}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={apple}
            style={styles.socialIcon}
          />
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F41BB',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1F41BB',
    borderRadius: 10,
    backgroundColor: '#F1F4FF',
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    width: '100%', 
  },
  forgotPassword: {
    color: '#1F41BB',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right', 
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: '#1F41BB',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signInText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccount: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  orContinue: {
    color: '#1F41BB',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: 'bold',
    marginTop: 80,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 500,
  },
});
