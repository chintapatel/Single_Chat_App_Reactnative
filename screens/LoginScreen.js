import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {token, setToken} = useContext(AuthContext);
  const navigation = useNavigation();
  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {screen: 'Main'});
    }
  }, [token, navigation]);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post('https://9316-183-83-146-135.ngrok-free.app/login', user)
      .then(response => {
        const token = response.data.token;
        AsyncStorage.setItem('authToken', token);
        setToken(token);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 5, alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Login your Account
            </Text>
          </View>

          <View style={{marginTop: 80}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
                Email
              </Text>
              <View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 320,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'sans-serif-thin',
                    fontSize: email ? 15 : 15,
                  }}
                  placeholder="Enter Your Email"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: 'gray',
                  marginTop: 25,
                }}>
                Password
              </Text>
              <View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 320,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'sans-serif-thin',
                    fontSize: password ? 15 : 15,
                  }}
                  placeholder="Enter Your Password"
                />
              </View>
            </View>

            <Pressable
              onPress={handleLogin}
              style={{
                width: 200,
                backgroundColor: '#4A55A2',
                padding: 15,
                marginTop: 50,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 15,
                  margin: 15,
                }}>
                Don't have an account? Sign Up
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 140, height: 170}}
              source={{
                uri: 'https://signal.org/assets/images/features/Media.png',
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
