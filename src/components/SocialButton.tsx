import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SocialButton = () => {
  return (
    <View style={styles.socialIcons}>
      <TouchableOpacity>
        <Image
          style={styles.IconImage}
          source={require('../assets/images/facebook.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
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
