import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

const Packages = ({navigation}) => {
  // const [packagename, setpackagename] = useState('');
  const [packagedesc, setpackagedesc] = useState('');
  const [packageprice, setpackageprice] = useState('');
  const [toggle, setToggle] = useState(false);
  const [pacakgeData, setPackageData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [packagename, setpackagename] = useState('');
  const [items, setItems] = useState([
    {label: 'Happy Sunday', value: 'Happy Sunday'},
    {label: 'Family Trip', value: 'Family Trip'},
    {label: 'Eid Bundle', value: 'Eid Bundle'},
  ]);

  const userObj = {
    packagename,
    packagedesc,
    packageprice,
  };

  const CreatePackage = () => {
    if (!packagename || !packagedesc || !packageprice) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/createpackage', userObj)

        .then(res => {
          // console.log(res);
          Alert.alert(`Package Created Successfully...`);

          setToggle(!toggle);
          setpackagename('');
          setpackagedesc('');
          setpackageprice('');

          setLoading(false);
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const getPkgData = () => {
    axios
      .get('http://10.0.2.2:5000/getpackage')
      .then(res => {
        setPackageData(res.data);
      })
      .catch(err => {
        console.log('err');
      });
  };

  useEffect(() => {
    getPkgData();
  }, [toggle]);

  //  Delete Package
    const deletePackage = (id) => {
      console.log(id);
      axios
        .delete(`http://10.0.2.2:5000/deletepackage/${id}`)
      
        .then(res => {
          
          const deletePkg = pacakgeData.filter((_, ind) => {
          
            return ind !== id;
          });
  
          setPackageData(deletePkg);
          setToggle(!toggle);
        })
        .catch(err => {
          console.log(err);
        });
    };

  // const deleteCategory = () => {
  //   Alert.alert('Delete');
  // };

  const editCategory = () => {
    Alert.alert('Edited');
  };

  const renderItem = ({index, item}) => {
    return (

      <View
      style={{
        // borderWidth: 1,
        // borderColor: 'silver',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 3,
        marginBottom: 10,
        width: 400,
      }}>
      <Image
        source={require('../assets/image1.jpg')}
        style={{
          height: 190,
          width: 150,
          borderRadius: 20,
          margin: 2,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'black',
            fontFamily: 'serif',
            marginLeft: 5,
            marginBottom: 4,
            marginTop: 10,
            color: '#f37335',
          }}>
          {item.packagename}
        </Text>
        <View style={{}}>
          <Text
            style={{
              // borderWidth: 1,
              // borderColor: 'red',
              // marginRight:2000,
              fontSize: 16,
              color: 'gray',
              // fontWeight: 'bold',
              fontFamily: 'serif',
              marginLeft: 5,
              marginBottom: 8,
              width: 240,
              lineHeight:22,
            }}>
            {item.packagedesc}
          </Text>
        </View>

        <View style={{}}>
          <Text
            style={{
              // borderWidth: 1,
              // borderColor: 'red',
              // marginRight:2000,
              fontSize: 18,
              color: '#f37335',
              fontWeight: 'bold',
              fontFamily: 'serif',
              marginLeft: 5,
              marginBottom: 4,
              width: 240,
            }}>
            ${item.packageprice}
          </Text>
        </View>

        <Text
          style={{
            marginLeft: 5,
            marginBottom: 3,
          }}>
          <Icon name="star" size={24} color="orange" />
          <Icon name="star" size={24} color="orange" />
          <Icon name="star" size={24} color="orange" />
          <Icon name="star" size={24} color="orange" />
          <Icon name="star-half" size={24} color="orange" />
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 5,
              marginBottom: 10,
            }}
            onPress={e => deletePackage(item._id)}>
            <Text style={{textAlign: 'center', color: 'white', marginTop: 5}}>
              <Icon name="delete" size={30} color="red" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 3,
              marginBottom: 10,
              marginTop:2
            }}
            onPress={editCategory}
            >
            <Text
              style={{textAlign: 'center', color: 'white', marginTop: 5}}>
              <Icon name="mode-edit" size={30} color="green" />
            </Text>
          </TouchableOpacity>
        </View>
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
            Create Package
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
              open={open}
              value={packagename}
              items={items}
              setOpen={setOpen}
              setValue={setpackagename}
              setItems={setItems}
              placeholder="Package"
              placeholderStyle={{
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}
            />
            {/* <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
              }}
              value={packagename}
              onChangeText={e => setpackagename(e)}
              placeholder="Package"
            /> */}
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
              }}
              value={packagedesc}
              onChangeText={e => setpackagedesc(e)}
              placeholder="Description"
            />
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'silver',
                paddingLeft: 10,
                color: 'gray',
                fontSize: 17,
                fontFamily: 'serif',
                fontWeight: 'bold',
                width: 280,
                marginBottom: 10,
              }}
              value={packageprice}
              onChangeText={e => setpackageprice(e)}
              placeholder="Price"
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
                }}
                onPress={CreatePackage}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#ffffff',
                    fontFamily: 'serif',
                  }}>
                  Add Package
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
                marginBottom: 30,
              }}></View>
        <View
          style={{
            alignItems: 'center',
          }}>
     

        <FlatList
          data={pacakgeData}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          />
          </View>
      </View>
    // </ScrollView>
  );
};

export default Packages;
