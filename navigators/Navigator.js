import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, getFocusedRouteNameFromRoute,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import Login from '../views/Login';
import {MainContext} from '../contexts/MainContext';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'My profile';
  };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
    return (      
        <Tab.Navigator screenOptions={({route}) => {
          return {
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }
              return <Ionicons name={iconName} />
            },
          };
        }}>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}></Tab.Screen>
        </Tab.Navigator>
    );
};

const StackScreen = () => {
  const {isLoggedIn} = useContext(MainContext);
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e6def7',
        },
        headerTintColor: '#1b434d',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
      }
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen 
            name="Tabs"
            component={TabScreen} 
            options={{headerShown:  true}}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
          <Stack.Screen name="Single" component={Single} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
      ) }   
    </Stack.Navigator>
    )
}


const Navigator = () => {
  return (
    <NavigationContainer >
      <StackScreen />
    </NavigationContainer>
  );
};

export default Navigator;