import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState();
  const [name, setName] = useState();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    axios
      .post('https://9316-183-83-146-135.ngrok-free.app/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration succesfull',
          'You have been register succesfully',
        );
        setName('');
        setEmail('');
        setPassword('');
        setImage('');
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          'An error ocurred while registration!',
        );
      });
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 5, alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Set up your Account
            </Text>

            <Text
              style={{
                marginTop: 8,
                color: 'gray',
                textAlign: 'center',
                marginHorizontal: 10,
              }}>
              Profile are visible to your friends and connections and groups
            </Text>

            <Pressable style={{marginTop: 18}}>
              <Image
                source={{
                  uri: image
                    ? image
                    : 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
                }}
                style={{width: 50, height: 50, borderRadius: 20}}
              />

              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 3,
                  color: 'black',
                  fontSize: 10,
                }}>
                Add
              </Text>
            </Pressable>
          </View>

          <View style={{marginTop: 20}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
                Name
              </Text>
              <View>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                  placeholder="Enter your name"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 25,
                }}>
                Email
              </Text>
              <View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                  placeholder="Enter your email"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 25,
                }}>
                Password
              </Text>
              <View>
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                  placeholder="Enter your password"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 25,
                }}>
                Image
              </Text>
              <View>
                <TextInput
                  value={image}
                  onChangeText={setImage}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                  placeholder="Enter your image url"
                />
              </View>
            </View>
            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: '#4A55A2',
                padding: 15,
                marginTop: 35,
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
                Register
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 15,
                  margin: 15,
                }}>
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
