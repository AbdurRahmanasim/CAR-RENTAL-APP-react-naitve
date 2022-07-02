import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const signupHandler = () => {
    navigation.navigate('Signup');
  };

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View  style={{
      flex : 1,
      backgroundColor: "white"
    }}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          source={require('../assets/logoar2.jpg')}
          style={{
            height: 310,
            width: 300,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 200,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#65c7f7',
            width: 120,
            height: 47,
            borderRadius: 13,
            marginRight: 6,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 2,
          }}
          onPress={signupHandler}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#ffffff',
              fontFamily: 'serif',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            borderWidth: 5,
            borderColor: '#7F8C8D',
            width: 120,
            height: 47,
            borderRadius: 13,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={loginHandler}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'gray',
              fontFamily: 'serif',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
          alignItems: 'center',
          marginTop : 40
          
          }} >
        <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: '#65C7F7',
            fontFamily: 'serif',
          }}
        >WELCOME TO A PROJECT</Text>
        <Text
             style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: '#65C7F7',
              fontFamily: 'serif',
              
                marginTop : 10
            }}>OF ABDUR RAHMAN ASIM</Text> 
      </View>
    </View>
  );
};

export default WelcomeScreen;
