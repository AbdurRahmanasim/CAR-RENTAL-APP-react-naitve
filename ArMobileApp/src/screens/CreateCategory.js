import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import DropDownPicker from 'react-native-dropdown-picker';

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
} from 'react-native';

const CreateCategory = ({navigation}) => {
  // const [category, setcategory] = useState('');
  // const [subcategory, setsubcategory] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');
  const [images, setImages] = useState('');
  const [toggle, setToggle] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [category, setcategory] = useState('');
  const [items, setItems] = useState([
    {label: 'SUV', value: 'SUV'},
    {label: 'SEDAN', value: 'SEDAN'},
    {label: 'HATCHBAK', value: 'HATCHBAK'},
    {label: 'COUPE', value: 'COUPE'},
    {label: 'CONVERTIBLE', value: 'CONVERTIBLE'},
  ]);

  const [openn, setOpenn] = useState(false);
  const [subcategory, setsubcategory] = useState('');
  const [itemss, setItemss] = useState([
    {label: 'Super Mini', value: 'Super Mini'},
    {label: 'Small Family', value: 'Small Family'},
    {label: 'Large Family', value: 'Small Family'},
    {label: 'Executive', value: 'Executive'},
    {label: 'Luxury Saloon', value: 'Luxury Saloon'},
  ]);

  const userObj = {
    category,
    subcategory,
    description,
 
    price,
  };

  // var imgUrl = require(images);
{/* <Image source={{uri:"https://picsum.photos/200", width:200,height:200 }}/> */}
  const CreateCategory = () => {
    if (!category || !subcategory || !description || !price) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/createcategory', userObj)

        .then(res => {
          setToggle(!toggle);
          Alert.alert(`Created Successfully...`);

          setLoading(false);

          setcategory('');
          setsubcategory('');
          setdescription('');
          setprice('');
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };

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

  // Delete Category
  const deleteCategory = id => {
    console.log(id);
    axios
      .delete(`http://10.0.2.2:5000/deletecategory/${id}`)

      .then(res => {
        const deleteCat = categoryData.filter((_, ind) => {
          return ind !== id;
        });

        setCategoryData(deleteCat);
        setToggle(!toggle);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Edit Category
  // const editCategory = id => {
  //   let category = prompt(
  //     'Enter Category',
  //     'SUV, SEDAN, HATCHBAK, COUPE, CONVERTIBLE',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: password => console.log('OK Pressed, password: ' + password),
  //       },
  //     ],
  //     {
  //       cancelable: false,
  //     },
  //   );

  //   let subcategory = prompt(
  //     'Enter Sub-Category',
  //     'Super Mini, Small Family, Large Family, Executive, Luxury Saloon',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: password => console.log('OK Pressed, password: ' + password),
  //       },
  //     ],
  //     {
  //       cancelable: false,
  //     },
  //   );

  //   let description = prompt(
  //     'Enter Description',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: password => console.log('OK Pressed, password: ' + password),
  //       },
  //     ],
  //     {
  //       cancelable: false,
  //     },
  //   );

  //   let price = prompt(
  //     'Enter Price',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: password => console.log('OK Pressed, password: ' + password),
  //       },
  //     ],
  //     {
  //       cancelable: false,
  //     },
  //   );

  //   const editDetails = {
  //     category,
  //     subcategory,
  //     description,
  //     price,
  //   };

  //   axios
  //     .put(`http://10.0.2.2:5000/updatecategory/${id}`, editDetails)
  //     .then(res => {
  //       console.log(res.data);

  //       setToggle(!toggle);
  //     })

  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const editCategory = () => {
    Alert.alert('Edited');
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
 <View style={{
  flexDirection:'row'
 }}>
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
          onPress={deleteCategory}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 21,
              fontFamily: 'serif',
              textAlign: 'center',
              color: 'white',
              
            }}>
            DELETE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 150,
            // height:35,
            paddingVertical: 7,
            // borderRadius: 20,
            textAlign: 'center',
            marginVertical: 10,
            // marginLeft:10
          }}
          onPress={deleteCategory}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 21,
              fontFamily: 'serif',
              textAlign: 'center',
              color: 'white',
            }}>
            EDIT
          </Text>
        </TouchableOpacity>
 </View>
      </View>
    );
  };

  return (
    // <ScrollView>
      <View>
        <Navbar />
        <View
          style={{
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 35,
              fontFamily: 'serif',
              color: '#f37335',
              fontWeight: 'bold',
              marginBottom: 25,
            }}>
            Rental Car
          </Text>

          <View
            style={{
              width: 290,
            }}>
            <DropDownPicker
              style={{
                borderWidth: 0,
                paddingLeft: 13,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                backgroundColor: '#f6f6f6',
              }}
              containerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                width: 280,
                height: 50,
                marginBottom: 10,
                backgroundColor: '#f6f6f6',
                zIndex: 9,
              }}
              itemKey={subcategory}
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setcategory}
              setItems={setItems}
              placeholder="Category"
              placeholderStyle={{
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}
            />

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
              itemKey={subcategory}
              open={openn}
              value={subcategory}
              items={itemss}
              setOpen={setOpenn}
              setValue={setsubcategory}
              setItems={setItemss}
              placeholder="Sub-Category"
              placeholderStyle={{
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}
            />
            <TextInput
              style={{
                // borderWidth: 1,
                // borderColor: 'gray',
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
                backgroundColor: '#f6f6f6',
                // zIndex : 0
              }}
              value={description}
              onChangeText={e => setdescription(e)}
              placeholder="Description"
            />

            <TextInput
              style={{
                // borderWidth: 1,
                // borderColor: 'gray',
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
                backgroundColor: '#f6f6f6',
                // zIndex : 0
              }}
              value={price}
              onChangeText={e => setprice(e)}
              placeholder="Price"
            />

            {/* <TextInput
              style={{
                // borderWidth: 1,
                // borderColor: 'gray',
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
                backgroundColor: '#f6f6f6',
                // zIndex : 0
              }}
              value={images}
              onChangeText={e => setImages(e)}
              placeholder="Image"
            /> */}

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
                }}
                onPress={CreateCategory}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#ffffff',
                    fontFamily: 'serif',
                  }}>
                  Add Car Details
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View
              style={{
                borderWidth: 1,
                borderColor: 'silver',
                width: 400,
                // marginBottom: 3,
              }}></View>

        <View
          style={{
            flexDirection: 'column',
            marginVertical: 20,
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

export default CreateCategory;
