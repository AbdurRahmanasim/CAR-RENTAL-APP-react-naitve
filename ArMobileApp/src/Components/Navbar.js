import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  const [userData, setuserData] = useState([]);
  const navigation = useNavigation();
  const getData = async () => {
    try {
      let userDatas = await AsyncStorage.getItem('key');
      let data = JSON.parse(userDatas);
      setuserData(data);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Logout = async () => {
    try {
      await AsyncStorage.removeItem('key');
      navigation.navigate('WelcomeScreen');
    } catch (exception) {
      return false;
    }
  };

  const Packages = () => {
    navigation.navigate('Packages');
  };

  const Booking = () => {
    navigation.navigate('Booking');
  };

  const Gallery = () => {
    navigation.navigate('Gallery');
  };

  const myProfile = () => {
    navigation.navigate('UserProfile');
  };

  const Feedback = () => {
    navigation.navigate('Feedback');
  };

  const CreateCategory = () => {
    navigation.navigate('CreateCategory');
  };

  const GetFeedback = () => {
    navigation.navigate('Feeds');
  };

  const GetAllCategories = () => {
    navigation.navigate('Cat');
  };

  const GetAllPackages = () => {
    navigation.navigate('Pkg');
  };

  const Users = () => {
    navigation.navigate('Users');
  };

  const trackLoc = () => {
    navigation.navigate('location');
  };

  return (
    <View>
      {userData.role === 'customer' ? (
        <View
          style={{
            width: '100%',
            backgroundColor: '#65C7F7',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={GetAllCategories}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              <Icon name="home" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 13}} onPress={GetAllPackages}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              <Icon name="list-alt" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 13}} onPress={Gallery}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              <Icon name="image" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 13}} onPress={Booking}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              <Icon name="car-rental" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 13}} onPress={Feedback}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              <Icon name="local-post-office" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 13}} onPress={trackLoc}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
             <Icon name="location-on" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

         

          <TouchableOpacity
            style={{marginLeft: 13}}
            onPress={myProfile}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              <Icon name="person" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 13}}
            onPress={Logout}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              <Icon name="logout" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            backgroundColor: '#65C7F7',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{marginLeft: 3}} onPress={CreateCategory}>
            <Text>
              <Icon name="home" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 20}} onPress={Packages}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              <Icon name="list-alt" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 20}} onPress={Booking}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              <Icon name="car-rental" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 20}} onPress={Users}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              <Icon name="supervisor-account" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 20}} onPress={GetFeedback}>
            <Text>
              <Icon name="local-post-office" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 20}} onPress={myProfile}>
            <Text>
              <Icon name="person" size={35} color="#f80759" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 20}} onPress={Logout}>
            <Text>
              <Icon name="logout" size={34} color="#f80759" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Navbar;
