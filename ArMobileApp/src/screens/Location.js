import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Location = () => {

  const [location, setLocation] = useState('');


    const findLoc = () => {
        const config = {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 3600000,
        };
    
        Geolocation.getCurrentPosition(
          info => setLocation(info.coords),
          error => console.log('ERROR', error),
          config,
        );
      };
  return (
    <View>
        <Navbar/>

        <View
        style={{
            marginLeft:250
          }}>
            <TouchableOpacity
            onPress={findLoc}
            style={{
                backgroundColor: '#f37335',
                width: 120,
                height: 40,
                marginTop:20,
                marginBottom: 6,
                borderRadius:20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            <Text
            style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#ffffff',
                fontFamily: 'serif',
              }}>Search</Text>
            </TouchableOpacity>
        </View>
        <View
    style={{
    //   backgroundColor: 'black',
      width: 350,
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 20,
      padding : 10,
      paddingBottom : 20
  
    }}>
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 40,
          color : '#f37335',
          fontFamily:'serif',
          fontWeight:'bold'
        }}>
        Your Location
      </Text>
    </View>

    <View
              style={{
                borderWidth: 1,
                borderColor: 'silver',
                width: 340,
                marginBottom: 28,
            //   marginLeft:2
              }}></View>

<View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
    }}>
    
        
  
    <Text
        style={{
          fontSize: 27,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'

       
        }}>
        Place: 
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginLeft : 15,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'

        }}>
       Pakistan
      </Text>
    </View>
  
    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
    }}>
    
        
  
    <Text
        style={{
          fontSize: 27,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'

       
        }}>
        Latitude: 
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginLeft : 15,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'

        }}>
       {location.latitude}
      </Text>
    </View>

    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
  
    }}>
  
    <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'


        }}>
      Altitude:
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'gray',
          fontFamily:'serif',
          marginVertical: 10,
          marginLeft : 15,
          fontWeight:'bold'
  
        }}>
     {location.altitude}
      </Text>
    </View>

    <View
    style={{
    flexDirection : 'row',
    marginHorizontal : 10
  
    }}>
  
    <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'gray',
          fontFamily:'serif',
          fontWeight:'bold',
          marginVertical: 10,
        }}>
       Accuracy:
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color : 'gray',
          marginLeft : 15,
          fontFamily:'serif',
          marginVertical: 10,
          fontWeight:'bold'

  
        }}>
           {location.accuracy}
    
      </Text>

    </View>
    </View>
    </View>
  )
}

export default Location