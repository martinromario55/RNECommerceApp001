import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {_signInWithGoogle} from '../config/firebase/GoogleSignIn';

const SocialButton = () => {
  const googleSignIn = async () => {
    _signInWithGoogle().then((data: any) => {
      if (!data) {
        console.log('=>Error:, No DATA ');
        return;
      }
      console.log('>Success', data);
    });
  };

  return (
    <View style={styles.socialIcons}>
      <TouchableOpacity>
        <Image
          style={styles.IconImage}
          source={require('../assets/images/facebook.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => googleSignIn()}>
        <Image
          style={styles.IconImage}
          source={require('../assets/images/google.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.IconImage}
          source={require('../assets/images/linkedin.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.IconImage}
          source={require('../assets/images/twitter.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  IconImage: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});
