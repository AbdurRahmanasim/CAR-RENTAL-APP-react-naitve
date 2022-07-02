import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Packages from './src/screens/Packages';
import Booking from './src/screens/Booking';
import Gallery from './src/screens/Gallery';
import Feedback from './src/screens/Feedback';
import UserProfile from './src/screens/UserProfile';
import BookRide from './src/screens/BookRide';
import Payment from './src/screens/Payment';
import CreateCategory from './src/screens/CreateCategory';
import GetFeedback from './src/screens/GetFeedback';
import ShowCategories from './src/screens/ShowCategories';
import ShowPackages from './src/screens/ShowPackages';
import Users from './src/screens/Users';
import Location from './src/screens/Location';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'Welcome to Rent Car',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              title: 'SignUp',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              title: 'Login',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              title: 'Packages',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Packages"
            component={Packages}
          />
          <Stack.Screen
            options={{
              title: 'CreateCategory',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="CreateCategory"
            component={CreateCategory}
          />
          <Stack.Screen
            options={{
              title: 'Gallery',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Gallery"
            component={Gallery}
          />
          <Stack.Screen
            options={{
              title: 'Profile',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="UserProfile"
            component={UserProfile}
          />
          <Stack.Screen
            options={{
              title: 'location',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="location"
            component={Location}
          />
          <Stack.Screen
            options={{
              title: 'Booking',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Booking"
            component={Booking}
          />
             <Stack.Screen
            options={{
              title: 'Users',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Users"
            component={Users}
          />
          <Stack.Screen
            options={{
              title: 'Feedback',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Feedback"
            component={Feedback}
          />
          <Stack.Screen
            options={{
              title: 'Book Rental Car',
              headerStyle: {
                backgroundColor: '#f37335',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'serif',
              },
            }}
            name="BookRide"
            component={BookRide}
          />
          <Stack.Screen
            options={{
              title: 'Payment',
              headerStyle: {
                backgroundColor: '#f37335',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'serif',
              },
            }}
            name="Payment"
            component={Payment}
          />

          <Stack.Screen
            options={{
              title: 'Feeds',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Feeds"
            component={GetFeedback}
            GetFeedback
          />

          <Stack.Screen
            options={{
              title: 'Cat',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Cat"
            component={ShowCategories}
            GetFeedback
          />

<Stack.Screen
            options={{
              title: 'Pkg',
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: '#f00000',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              //   fontFamily: 'serif',
              // },
            }}
            name="Pkg"
            component={ShowPackages}
            GetFeedback
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
