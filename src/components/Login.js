import React, {useEffect, useState} from 'react';
// import MaterialIcon from 'material-icons-react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  useToast,
} from 'native-base';
import {Image, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1099311539417-78vkcbg64kssqhfr0iv9vtfd23magbi8.apps.googleusercontent.com',
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };
  const handleSubmit = async () => {
    const data = {username, password};
    if (username == '' || password == '') {
      setError('Please enter username and password');
    } else {
      console.log('success');
    }
  };
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto" justifyContent="center">
        <Heading size="lg" color="primary.500">
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to continue!
        </Heading>
        <Text alignSelf="center" color="red.500">
          {error}
        </Text>
        <VStack space={2} mt={5}>
          <FormControl>
            <Input
              placeholder="Enter username"
              onChangeText={e => setUsername(e)}
              value={username}
            />
          </FormControl>
          <FormControl mb={5}>
            <Input
              placeholder="Enter password"
              type="password"
              onChangeText={e => setPassword(e)}
              value={password}
            />
            <Link
              _text={{fontSize: 'xs', fontWeight: '700', color: 'cyan.500'}}
              alignSelf="flex-end"
              mt={1}>
              Forget Password?
            </Link>
          </FormControl>
          <VStack space={2}>
            <Button
              colorScheme="cyan"
              _text={{color: 'white'}}
              onPress={() => handleSubmit()}>
              Login
            </Button>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              I'm a new user.{' '}
            </Text>
            <Link
              onPress={() => navigation.navigate('Signup')}
              _text={{color: 'cyan.500', bold: true, fontSize: 'sm'}}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
        <HStack alignItems="center" alignSelf="center" mt={10}>
          <GoogleSigninButton
            style={{width: 240, height: 56}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
