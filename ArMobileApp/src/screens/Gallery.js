import React from 'react';
import Navbar from '../Components/Navbar';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Gallery = ({navigation}) => {

  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;
  
  return (
    
    <ScrollView style={{marginVertical: 4, backgroundColor: 'white'}}>
      <Navbar/>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image1.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image2.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image3.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image4.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image5.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image6.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image7.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image8.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image9.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image10.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image11.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image12.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/image13.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image2.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
        <Image
          source={require('../assets/image3.jpg')}
          style={{
            height: deviceHeight / 3,
            width: deviceWidth / 3 - 6,
            borderRadius: 10,
            margin: 2,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Gallery;
