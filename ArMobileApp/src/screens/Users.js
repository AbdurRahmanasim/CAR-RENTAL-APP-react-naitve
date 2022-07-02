import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getUsers = () => {
    axios
      .get('http://10.0.2.2:5000/getusers')
      .then(res => {
        setAllUsers(res.data);
      })
      .catch(err => {
        console.log('err');
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [toggle]);

  // Delete User
  const deleteUser = id => {
    console.log(id);
    axios
      .delete(`http://10.0.2.2:5000/deleteuser/${id}`)
    
      .then(res => {
        
        const deleteuser = allUsers.filter((_, ind) => {
        
          return ind !== id;
        });

        setAllUsers(deleteuser);
        setToggle(!toggle);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderItem = ({item, ind}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            width: 370,
            paddingVertical: 4,
          }}>
          <View
            style={{
              marginRight: 20,
              marginLeft: 15,
            }}>
            <Icon name="person" size={40} color="#f37335" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginLeft: 10,
                // borderWidth:1,
                // borderColor:'red',
                width: 240,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: 19,
                }}>
                {item.fname}
              </Text>
              <Text
                style={{
                  // fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: 17,
                }}>
                {item.email}
              </Text>
              <Text
                style={{
                  // fontWeight: 'bold',
                  fontFamily: 'serif',
                  fontSize: 17,
                }}>
                {item.contact}
              </Text>
            </View>
            <View
              style={
                {
                  // marginLeft: 60,
                  // float:'right'
                }
              }>
              <TouchableOpacity onPress={e => deleteUser(item._id)}>
                <Icon
                  style={
                    {
                      // float:'right'
                    }
                  }
                  name="delete"
                  size={25}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Navbar />

      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <FlatList
          data={allUsers}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default Users;
