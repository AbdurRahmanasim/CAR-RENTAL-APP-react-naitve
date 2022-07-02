import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';

const Booking = ({navigation}) => {
  const [bookData, setBookData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const myIcon = <Icon name="delete" size={27} color="#ed213a" />;

  const bookingData = () => {
    axios
      .get('http://10.0.2.2:5000/getbookingdata')
      .then(res => {
        setBookData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    bookingData();
  }, []);

  useEffect(() => {
    bookingData();
  }, [toggle]);

  // Delete User
  const CancelRide = id => {
    console.log(id);
    axios
      .delete(`http://10.0.2.2:5000/deletebookingdata/${id}`)

      .then(res => {
        const deleteride = bookData.filter((_, ind) => {
          return ind !== id;
        });

        setBookData(deleteride);
        setToggle(!toggle);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 3,
          borderWidth: 1,

          borderColor: 'silver',
        }}>
        <View style={{width: 130}}>
          <Text
            style={{
              color: 'gray',
              fontWeight: 'bold',
              paddingVertical: 15,
              fontSize: 17,
              paddingLeft: 10,

            }}>
            {item.username}
          </Text>
        </View>

        <View style={{width: 135}}>
          <Text
            style={{
              color: 'gray',
              fontWeight: 'bold',
              paddingVertical: 15,
              fontSize: 17,
            }}>
            {item.contact}
          </Text>
        </View>

        <View style={{width: 70}}>
          <Text
            style={{
              color: 'gray',
              fontWeight: 'bold',
              paddingVertical: 15,
              fontSize: 17,
            }}>
            {item.ride}
          </Text>
        </View>
        <TouchableOpacity onPress={e => CancelRide(item._id)}>
          <View style={{width: 50}}>
            <Text
              style={{
                paddingVertical: 15,
              }}>
              {myIcon}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Navbar />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 3,
          borderWidth: 1,
          marginTop: 10,
          borderColor: 'silver',
          backgroundColor: 'gray',
        }}>
        <View style={{width: 130}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              paddingVertical: 16,
              fontSize: 20,
              paddingLeft: 10,
            }}>
            Name
          </Text>
        </View>

        <View style={{width: 130}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              paddingVertical: 16,
              fontSize: 20,
              paddingLeft: 3,
            }}>
            Contact
          </Text>
        </View>

        <View style={{width: 60}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              paddingVertical: 16,
              fontSize: 20,
              paddingLeft: 3,
            }}>
            Ride
          </Text>
        </View>

        <View style={{width: 70}}>
          <Text></Text>
        </View>
      </View>

      <FlatList
        data={bookData}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Booking;
