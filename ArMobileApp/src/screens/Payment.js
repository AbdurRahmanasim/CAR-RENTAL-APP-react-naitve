import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  Image,
  StyleSheet
} from 'react-native';
// import DatePicker from 'react-native-datepicker';
// import DatePicker from ' @react-native-community/datetimepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

const Payment = () => {
  const [card, setCard] = useState('');
  const [cardno, setCardno] = useState('');
  const [expirydate, setExpirydate] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [date, setDate] = useState('09-10-2021');
  const [date, setDate] = useState('09-10-2021');



  const navigation = useNavigation();

  const userObj = {
    card,
    cardno,
    expirydate,
  };
  const donePay = () => {
    if (!card || !cardno || !expirydate) {
      return Alert.alert(`Required fields are missing...`);
    } else {
      setLoading(true);
      axios
        .post('http://10.0.2.2:5000/payment', userObj)

        .then(res => {
          console.log(res);
          Alert.alert(`Yor Booking is Confirmed..!!`);
          navigation.navigate('Booking');
          setLoading(false);
        })

        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>





        






        
        {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
 {/* <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            height: 180,
            width: 180,
          }}
        />
      </View>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'silver',
          paddingLeft: 13,
          color: 'gray',
          fontSize: 17,
          fontFamily: 'serif',
          fontWeight: 'bold',
          width: 280,
          marginBottom: 10,
        }}
        value={card}
        onChangeText={e => setCard(e)}
        placeholder="Card Number"
      />
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'silver',
          paddingLeft: 13,
          color: 'gray',
          fontSize: 17,
          fontFamily: 'serif',
          fontWeight: 'bold',
          width: 280,
          marginBottom: 10,
        }}
        value={cardno}
        onChangeText={e => setCardno(e)}
        placeholder="Code"
        keyboardType="number-pad"
      />
          <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'silver',
          paddingLeft: 13,
          color: 'gray',
          fontSize: 17,
          fontFamily: 'serif',
          fontWeight: 'bold',
          width: 280,
          marginBottom: 10,
        }}
        value={expirydate}
        onChangeText={e => setExpirydate(e)}
        placeholder="Expiry Date"
        keyboardType="number-pad"
      />
     <View
     style={{
      marginTop: 8,
    }}>
     {isLoading ? (
        <ActivityIndicator
          style={{
            marginVertical: 8,
          }}
          size="large"
          color="#f37335"
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
          onPress={donePay}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: '#ffffff',
              fontFamily: 'serif',
            }}>
            FINISH
          </Text>
        </TouchableOpacity>
      )}
     </View>
    </View>
  );
};



export default Payment;
