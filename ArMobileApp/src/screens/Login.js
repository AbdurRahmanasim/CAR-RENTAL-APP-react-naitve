import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [checked, setChecked] = useState(true);

  const userObj = {
    email,
    password,
  };

  const userLogin = () => {
    if (!email || !password) {
      return setError('Required fields are missing');
    } else {
      setLoading(true);

      axios
        .post('http://10.0.2.2:5000/userlogin', userObj)
      
        .then(res => {
          console.log(res.data.message);

          if (res.data.message === 'user successfully loggedin') {
            AsyncStorage.setItem('key', JSON.stringify(res.data.data));
            alert(` Welcome To Car Club...!!`);
            setLoading(false);
            navigation.navigate('UserProfile');
          } else {
            setError('Invalid Credentials');
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }

    // ToastAndroid.showWithGravityAndOffset("Signup Successfully",
    // ToastAndroid.SHORT,
    // ToastAndroid.CENTER
    // )
  };
  // // get item
  // const getData = () => {
  //   try {
  //     AsyncStorage.getItem('key').then(val => {
  //       console.log(val);
  //     });
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const onPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView  style={{
     
      flex: 1,
      backgroundColor: "white" ,
      
    
    }}>
      <View
        style={{
          alignItems: 'center',
         
        
        }}>
        <View
          style={{
            alignItems: 'center',
         
              
           
          }}>
          <Image
            source={require('../assets/logoar2.jpg')}
            style={{
              height: 230,
              width: 230,
           
            }}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: 10,
            color: 'red',
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: -40,
            marginBottom: 15,
            paddingVertical: 7,
            fontFamily: 'serif',
          }}>
          {error}
        </Text>

        <View
          style={{
            width: 290,
            marginBottom: 10,
            marginTop: -15,
            justifyContent : "center" ,
            alignItems : "center" ,
          }}>
          <Text
            style={{
              fontSize: 38,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#65C7F7',
            }}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 20,


              color: '#EC6EAD',
            }}>
            IF Signed Up Then Login Here
          </Text>
        </View>

        <View
          style={{
            width: 290,
          }}>
          <TextInput
            style={{
              borderWidth: 3,
              // borderColor: 'gray',
              // borderBottomWidth:1,
              // borderBottomColor:'silver',
              borderColor : "#65C7F7" ,
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Email Address"
            keyboardType="email-address"
          />

          <TextInput
            style={{
              borderWidth: 3,
              // borderBottomWidth: 3 ,
              // borderBottomColor:'silver',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
              borderColor : "#65C7F7" ,
            }}
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
            secureTextEntry={true}
          />

          {/* <View style={{flexDirection: 'row'}}>
               <CheckBox status={checked ?  'checked': 'unchecked'}
                onClick={() => {setChecked(!checked)}}/>
              <Text style={{marginTop: 5}}>SHOW</Text>
              </View> */}

          {isLoading ? (
            <ActivityIndicator
              style={{
                marginVertical: 8,
              }}
              size="large"
              color="#f37335"
            />
          ) : (
            <View style={{
          
              alignItems: 'center',  
              

              justifyContent: 'center',
              
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#65C7F7',
                width: 180,
                height: 47,
                marginBottom: 6,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius : 40,
                
              }}
              onPress={userLogin}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                Login
              </Text>
            </TouchableOpacity>
      </View>

          )}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'gray',
              fontSize:16,
              color:"#65C7F7"
            }}>
            If not Signup Up Please Login First
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#EC6EAD',
                fontSize: 16,
                fontFamily: 'serif',
                // fontStyle:'italic'
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
