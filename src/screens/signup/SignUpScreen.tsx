import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RoundButtom from '../../components/RoundButtom';
import SocialButton from '../../components/SocialButton';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require('../../assets/images/register.jpg')}
        />
      </View>
      <View style={styles.SignUpContainer}>
        <Text style={styles.textHeader}>Register</Text>
        <Text style={styles.textSubHeader}>Create an account with us!</Text>
        <View style={styles.FormStyle}>
          <View>
            <Text>Username</Text>
            <TextInput placeholder="johndoe" style={styles.textInput} />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput style={styles.passwordInput} />
          </View>
        </View>
        <View style={styles.ButtonStyle}>
          <RoundButtom
            text="Register"
            BGcolor="#27dec0"
            outline="white"
            onPress={() => {}}
          />
        </View>
        <View style={styles.Social}>
          <Text style={styles.socialText}>Or via Social Media</Text>
          <View>
            <SocialButton />
          </View>
        </View>
        <View style={styles.signIn}>
          <Text style={styles.signinText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signinLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ImageContainer: {
    marginTop: 40,
  },
  Image: {
    width: 300,
    height: 200,
    borderRadius: 50,
  },
  SignUpContainer: {},
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#27dec0',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#36474f',
    textAlign: 'center',
  },
  FormStyle: {
    marginVertical: 30,
    gap: 20,
  },
  textInput: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#36474f',
    padding: 10,
  },
  passwordInput: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#36474f',
    padding: 10,
  },
  ButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Social: {
    alignItems: 'center',
    marginTop: 10,
  },
  socialText: {
    fontSize: 20,
    color: '#36474f',
    textAlign: 'center',
  },
  signIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signinText: {
    fontSize: 20,
    color: '#36474f',
    textAlign: 'center',
  },
  signinLink: {
    fontSize: 20,
    color: '#27dec0',
    textAlign: 'center',
  },
});
