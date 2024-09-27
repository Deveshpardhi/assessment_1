import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Apple from '../assets/apple.png';
import Meta from '../assets/facebook.png';
import Google from '../assets/google.png';


export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account so you can explore all the existing jobs
      </Text>


      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />


      <TextInput placeholder="Password" style={styles.input} secureTextEntry />


      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
      />


      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={styles.haveAccount}
          >
          Already have an account
        </Text>
      </TouchableOpacity>


      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity>
          <Image source={Google} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Meta} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Apple} style={styles.socialIcon} />
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
  signUpButton: {
    backgroundColor: '#1F41BB',
    paddingVertical: 15,
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signUpText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  haveAccount: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  orContinue: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1F41BB',
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




