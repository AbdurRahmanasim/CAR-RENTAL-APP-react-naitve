import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

const ShowCategories = ({navigation}) => {
  const [categoryData, setCategoryData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getCatData = () => {
    axios
      .get('http://10.0.2.2:5000/getcreatecategory')
      .then(res => {
        console.log(res.data, 'category');
        setCategoryData(res.data);
      })
      .catch(err => {
        console.log('err');
      });
  };

  useEffect(() => {
    getCatData();
  }, [toggle]);

  const bookRide = () => {
    navigation.navigate('BookRide');
  };

  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'silver',
          marginVertical: 10,
        }}>
        <Image
          source={require('../assets/image1.jpg')}
          style={{
            height: 200,
            width: 310,
            // borderRadius: 10,
            // margin: 2,
            objectFit: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'serif',
            textAlign: 'center',
            marginVertical: 5,
            color: '#f37335',
            fontFamily: 'serif',
          }}>
          {item.category}
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: '#f37335',
            // fontWeight:'bold',
            fontFamily: 'serif',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          {item.subcategory}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 7,
            fontFamily: 'serif',
            textAlign: 'center',
            width: 280,
            color: 'gray',
            fontFamily: 'serif',
          }}>
          {item.description}
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'serif',
            textAlign: 'center',
            color: '#f37335',
          }}>
          ${item.price}/hr
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#f37335',
            width: 150,
            // height:35,
            paddingVertical: 7,
            // borderRadius: 20,
            textAlign: 'center',
            marginVertical: 10,
          }}
          onPress={bookRide}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 21,
              fontFamily: 'serif',
              textAlign: 'center',
              color: 'white',
            }}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    // <ScrollView>
    <View>
      <Navbar />

      <View
        style={{
          flexDirection: 'column',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <FlatList
          data={categoryData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
    // </ScrollView>
  );
};

export default ShowCategories;
