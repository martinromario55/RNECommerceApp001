import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RoundButtom from '../../components/RoundButtom';
import SocialButton from '../../components/SocialButton';

const SignInScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#27dec0'} barStyle={'dark-content'} />
      <View style={{flex: 0.5}}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../../assets/images/login.jpg')}
        />
      </View>
      <View style={styles.HeaderStyles}>
        <Text style={styles.textHeader}>Hello</Text>
        <Text style={styles.textSubHeader}>Welcome to our E-Commerce App</Text>
        <View style={styles.ButtonStyle}>
          <RoundButtom
            text={'Login '}
            BGcolor="#36474f"
            textColor="white"
            outline="white"
            onPress={() => {}}
          />
          <RoundButtom
            text={'Sign Up'}
            BGcolor="#fff"
            textColor="#27dec0"
            outline="#36474f"
            onPress={() => navigation.push('SignUp')}
          />
        </View>
        <View style={styles.Social}>
          <Text style={styles.socialText}>Or via Social Media</Text>
          <View>
            <SocialButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  HeaderStyles: {
    flex: 0.5,
    backgroundColor: '#27dec0',
  },
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  ButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    gap: 20,
  },
  Social: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  socialText: {
    fontSize: 20,
    color: '#36474f',
    textAlign: 'center',
  },
});
