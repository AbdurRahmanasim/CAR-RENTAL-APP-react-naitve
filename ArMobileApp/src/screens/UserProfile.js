import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfile = ({navigation}) => {
  const [userData, setuserData] = useState([]);

  const getData = async () => {
    try {
      let userDatas = await AsyncStorage.getItem('key');
      let datas = JSON.parse(userDatas);
      setuserData(datas);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Navbar />
 
      <View>

        
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 5,
          }}>
          <View
            style={{
              marginVertical: 10,
            }}>
            {/* <Icon name="account-circle" size={170} color="#f37335" /> */}
            <Icon name="account-circle" size={150} color="#65C7F7" />

          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontFamily: 'serif',
                  color: '#65C7F7',
                  fontWeight: 'bold',
                  marginBottom: 1,
                  marginRight: 8,
                }}>
                {userData.fname}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontFamily: 'serif',
                  color: '#f80759',
                  fontWeight: 'bold',
                  marginBottom: 1,
                }}>
                {userData.lname}
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'serif',
                color: '#65C7F7',
                fontWeight: 'bold',
                marginBottom: 15,
                marginTop:6
              }}>
              {userData.role}
            </Text>

          
       

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
            
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: 'gray',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginTop: -3,
                  marginLeft: 10,
                }}>
                  EMAiL : 
                {userData.email}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
              
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: 'gray',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginLeft: 10,
                  marginTop: -2,
                }}> CONTACT : 
                {userData.contact}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // alignItems:'center',
              }}>
             
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'serif',
                  color: 'gray',
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginLeft: 10,
                  marginTop: -2,
                }}> USERNAME : 
                {userData.username}
              </Text>
            </View>

           

          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
