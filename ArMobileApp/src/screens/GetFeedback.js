import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const GetFeedback = ({navigation}) => {
  const [feedback, setFeedback] = useState([]);
  const [toggle, setToggle] = useState(false);

  const myIcon = <Icon name="delete-sweep" size={32} color="#900" />;

  const getFeedbackData = () => {
    axios
      .get('http://10.0.2.2:5000/getfeedback')
      .then(res => {
        console.log(res.data);
        setFeedback(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeedbackData();
  }, []);

  
  useEffect(() => {
    getFeedbackData();
  }, [toggle]);

  
  // Delete Feedback
  const deleteMsg = id => {
    console.log(id);
    axios
      .delete(`http://10.0.2.2:5000/deletefeedback/${id}`)
    
      .then(res => {
        
        const deleteFeed = feedback.filter((_, ind) => {
        
          return ind !== id;
        });

        setFeedback(deleteFeed);
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
            <Icon name="comment" size={40} color="#f37335" />
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
                {item.username}
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
                {item.feedback}
              </Text>
            </View>
            <View
              style={
                {
                  // marginLeft: 60,
                  // float:'right'
                }
              }>
              <TouchableOpacity
              onPress={e => deleteMsg(item._id)}
              >
                <Icon
                  style={
                    {
                      // float:'right'
                    }
                  }
                  name="cancel"
                  size={29}
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
      <View style={{
        marginTop:10
      }}>
        <FlatList
          data={feedback}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
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

export default GetFeedback;
