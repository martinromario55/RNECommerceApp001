import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        '869705190036-jnfelmd7ftf43mm5qu5bct9vs0pos8ut.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GithubAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredentials);

    return userInfo;
  } catch (error) {
    console.log('=> Google Sign In', error);
    return null;
  }
};
