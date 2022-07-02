import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';

const Feedback = () => {

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [feedback, setfeedback] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const userObj = {
    username,
    email,
    feedback,
  };

  const SendFeedback = () => {
    if (!username || !email || !feedback) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/sendfeedback', userObj)

        .then(res => {
          console.log(res);
          Alert.alert(`Thank You....!!!`);
          
          setusername("")
          setemail("")
          setfeedback("")

          setLoading(false);
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };
 

  const shareSocial = async () => {
    const shareMsg = {
      message: 'CarClub services are customer satisfied....',
    };
    try {
      const shareRes = await Share.open(shareMsg);
    } catch (err) {
      console.log(err);
    }
  };

  const tracklocation = () => {
    navigation.navigate('location');
  };
  return (
    <View>
      <Navbar />

      <View>
        <Text
          style={{
            textAlign: 'center',
            color: '#f37335',
            fontSize:35,
            fontFamily: 'serif',
            fontWeight: 'bold',
            marginVertical: 25,
            marginTop:80
          }}>
          FEEDBACK
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            // borderWidth: 1,
            // borderColor: 'gray',
            borderBottomWidth:1,
            borderBottomColor:'silver',
            paddingLeft: 13,
            color: 'gray',
            fontSize: 17,
            fontFamily: 'serif',
            fontWeight: 'bold',
            width: 280,
            marginBottom: 10,
          }}
          value={username}
          onChangeText={e => setusername(e)}
          placeholder="Username"
        />
        <TextInput
          style={{
            borderBottomWidth:1,
            borderBottomColor:'silver',
            paddingLeft: 13,
            color: 'gray',
            fontSize: 17,
            fontFamily: 'serif',
            fontWeight: 'bold',
            width: 280,
            marginBottom: 10,
          }}
          value={email}
          onChangeText={e => setemail(e)}
          placeholder="Email Address"
        />
        <TextInput
          style={{
            borderBottomWidth:1,
            borderBottomColor:'silver',
            paddingLeft: 13,
            color: 'gray',
            fontSize: 17,
            fontFamily: 'serif',
            fontWeight: 'bold',
            width: 280,
            marginBottom: 10,
          }}
          value={feedback}
          onChangeText={e => setfeedback(e)}
          placeholder="Your Feddback..."
        />
        {isLoading ? (
          <ActivityIndicator
            style={{
              marginVertical: 8,
            }}
            size="large"
            color="#fc4a1a"
          />
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#f37335',
              width: 280,
              height: 47,
              marginBottom: 6,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:10
            }}
            onPress={SendFeedback}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: '#ffffff',
                fontFamily: 'serif',
              }}>
              SEND
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View
              style={{
                borderWidth: 1,
                borderColor: 'silver',
                width: 340,
                marginTop:40,
                // marginBottom: 18,
              marginLeft:25
              }}></View>

      <View
        style={{
          marginLeft: 30,
          marginTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={shareSocial}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                fontFamily: 'serif',
                marginBottom: 10,
              }}>
              <Icon name="share" size={32} color="green" />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              marginTop: 3,
              color: 'gray',
              fontWeight:'bold'
            }}>
            Tell your friends
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={tracklocation}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
                fontFamily: 'serif',
              }}>
              <Icon name="location-on" size={32} color="#021b79" />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              marginTop: 3,
              color: 'gray',
              fontWeight:'bold'

            }}>
            Find your location
          </Text>
        </View>
      </View>



      


 
    </View>
  );
};

export default Feedback;
