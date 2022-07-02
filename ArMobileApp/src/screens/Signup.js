import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

const Signup = ( {navigation} ) => {

  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [checked, setChecked] = useState(true);

  const userObj = {
    fname,
    lname,
    contact,
    address,
    username,
    email,
    password,
  };

  const userSignup = () => {

    if (
      !fname ||
      !lname ||
      !contact ||
      
      !address ||
      !username ||

      !email ||
      !password
    ) {
      return setError('Required fields are missing');
      // Alert.alert(`Required fields are missing...`);
    }

    //  else if (fname.length < 3) {
    //     return Alert.alert(`Firstname must be 3 letters long..`);
    //   } else if (lname.length < 3) {
    //     return Alert.alert(`Lastname must be 3 letters long..`);
    //   }
    //   else if (username.length < 3) {
    //     return Alert.alert(`username must be 3 letters long..`);
    //   }
    //   else if ((contact.length <= 10 ) || (contact.length > 11)) {
    //     return Alert.alert(`Contact must be 11 digits long`);
    //   }
    //   else if (password.length < 6) {
    //   return Alert.alert(`Password must be 6 characters long..`);
    // }

    else {


      setLoading(true);




      axios



        .post('http://10.0.2.2:5000/createuser', userObj)
        
        .then(res => {



          if (res.data.message === 'Email address already exists.') {
          
            setError('Email Address already exists');
          } else {
            Alert.alert('Registered Successfully');

          }

          setLoading(false);

          setFirstName('');

          setLastName('');

          setContact('');


          setAddress('');

          setUsername('');

          setEmail('');

          setPassword('');
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });

      // ToastAndroid.showWithGravityAndOffset("Signup Successfully",
      // ToastAndroid.SHORT,
      // ToastAndroid.CENTER
      // )
    }
  };

  const onPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{
     
      flex: 1,
      backgroundColor: "white" ,
    
    }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent:'center'
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop:-7
          }}>
          <Image
            source={require('../assets/logoar2.jpg')}
            style={{
              height: 150,
              width: 170,
            }}
          />
        </View>

        <Text
          style={{
            paddingHorizontal: 10,
            color: 'red',
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: -20,
            // marginBottom: 10,
            paddingVertical: 7,
            fontFamily: 'serif',
          }}>
          {error}
        </Text>

        <View
          style={{
            width: 290,
            marginBottom: 10,
            marginTop: -10,
            justifyContent:'center' ,
            alignItems : "center" ,
          }}>
          <Text
            style={{
              fontSize: 37,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#65C7F7',
              
             
            }}>
            SignUp
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#EC6EAD',
            }}>
            Please create your account.
          </Text>
        </View>

        <View
          style={{
            width: 290,
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor : "#65C7F7",
              // borderColor: 'gray',
              // borderBottomColor:'silver',
              // borderBottomWidth:1,
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',



              fontWeight: 'bold',
              width: 280,

              marginBottom: 5,
            }}
            value={fname}
            onChangeText={e => setFirstName(e)}
            placeholder="First Name"
          />
          <TextInput
            style={{
              // borderWidth: 1,
              // borderColor: 'gray',
              // borderBottomColor:'silver',
              // borderBottomWidth:1,
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={lname}
            onChangeText={e => setLastName(e)}
            placeholder="Last Name"
          />
          <TextInput
            style={{
              // borderBottomColor:'silver',
              // borderBottomWidth:1,
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={contact}
            onChangeText={e => setContact(e)}
            placeholder="Contact"
            keyboardType="number-pad"
          />
          <TextInput
            style={{
              // borderBottomColor:'silver',
              // borderBottomWidth:1,
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',

              fontSize: 17,

              fontFamily: 'serif',

              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={address}
            onChangeText={e => setAddress(e)}
            placeholder="Address"
          />
          <TextInput
            style={{
             
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={username}
            onChangeText={e => setUsername(e)}
            placeholder="Username"
          />
          <TextInput
            style={{
               
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={email}
            onChangeText={e => setEmail(e)}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <TextInput
            style={{
           
              borderWidth: 1,
              borderColor : "#65C7F7",
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 5,
            }}
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="Password"
            secureTextEntry={true}
          />

       

          {isLoading ? (
            <ActivityIndicator
              style={{
                marginTop: 10,
              }}
              size="large"
              color="#f37335"
            />
          ) : (
            <View 
            style={{
             
              alignItems: 'center',  
              

              justifyContent: 'center',
              
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#65C7F7',
                width: 180,

                height: 47,
                borderRadius : 40 ,

                alignItems: 'center',  

                justifyContent: 'center',
                marginTop:10
              }}
              onPress={userSignup}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: '#65C7F7',
                fontSize:17,
                fontWeight: 'bold',

              }}>
              Lgoin Here
            </Text>
            <TouchableOpacity onPress={onPress}>
              <Text
                style={{
                  marginLeft: 7,
                  fontWeight: 'bold',
                  fontStyle:'italic',
                  color: '#EC6EAD',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: 'blue',
                  fontFamily: 'monspace',
                fontSize:16

                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
