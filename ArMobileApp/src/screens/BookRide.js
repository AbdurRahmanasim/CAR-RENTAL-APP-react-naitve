import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const BookRide = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  // const [ride, setRide] = useState('');
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [ride, setRide] = useState('');
  const [items, setItems] = useState([
    {label: 'One Hour', value: '1'},
    {label: 'Two Hours', value: '2'},
    {label: 'Three Hours', value: '3'},
    {label: 'Four Hours', value: '4'},
    {label: 'Five Hours', value: '5'},
    {label: 'Six Hours', value: '6'},
    {label: 'Seven Hours', value: '7'},
    {label: 'Eight Hours', value: '8'},

  ]);

  const userObj = {
    username,
    email,
    contact,
    nic,
    address,
    ride,
    // value
  };

  console.log(userObj);

  const sendpayment = () => {
    // if (!username || !email || !contact || !nic || !address) {
    //   return Alert.alert(`Required fields are missing...`);
    // }
    if (!username) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);

      axios
        .post('http://10.0.2.2:5000/confirmbooking', userObj)

        .then(res => {
          Alert.alert(`Confirm Ride...`);
          navigation.navigate('Payment');
          setLoading(false);
        })

        .catch(err => {
          console.log(err);
          setLoading(false);

          setUsername("")
          setEmail("")
          setContact("")
          setNic("")
          setAddress("")
          setRide("")
        });
    }
  };



  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 190,
              width: 170,
            }}
          />
        </View>

        <View
          style={{
            width: 290,
            marginTop:-15
          }}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'silver',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={username}
            onChangeText={e => setUsername(e)}
            placeholder="Username"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'silver',
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
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'silver',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={contact}
            onChangeText={e => setContact(e)}
            placeholder="Contact"
            keyboardType="number-pad"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'silver',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={nic}
            onChangeText={e => setNic(e)}
            placeholder="NIC"
            keyboardType="number-pad"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'silver',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={address}
            onChangeText={e => setAddress(e)}
            placeholder="Address"
          />
          {/* <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 13,
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
              width: 280,
              marginBottom: 10,
            }}
            value={ride}
            onChangeText={e => setRide(e)}
            placeholder="Car Rent hours"
          /> */}
          <DropDownPicker
                style={{
                  borderWidth: 0,
                  // borderColor: 'gray',
                  paddingLeft: 13,
                  color: 'gray',
                  fontSize: 17,
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  // width: 280,
                  // marginBottom: 10,
                  backgroundColor: '#f6f6f6',
                }}
                containerStyle={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'silver',
                  width: 280,
                  height: 50,
                  color: 'gray',
                  fontSize: 17,
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                  marginBottom: 10,
                  backgroundColor: '#f6f6f6',
                  zIndex: 1,
                }}
            open={open}
            value={ride}
            items={items}
            setOpen={setOpen}
            setValue={setRide}
            setItems={setItems}
            placeholder="Rent Hours"
            placeholderStyle={{
              color: 'gray',
              fontSize: 17,
              fontFamily: 'serif',
              fontWeight: 'bold',
            }}
          />
          {isLoading ? (
            <ActivityIndicator
              style={{
                marginVertical: 8,
              }}
              size="large"
              color="#f37335"
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
              }}
              onPress={sendpayment}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                BOOK
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/*
 SUV
Sedan
Sports Car 
*/}
        {/*      
Four Wheeler.
Heavy Vehicles.
Second sales.
Three Wheeler.
Two Wheeler. 
*/}
      </View>
    </ScrollView>
  );
};

export default BookRide;
