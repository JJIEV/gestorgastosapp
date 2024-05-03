import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import ChangePassword from './ChangePassword';

const Stack = createStackNavigator();

export default function App() {
  return (

    <Stack.Navigator initialRouteName="Login"> 
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
  </Stack.Navigator>
  

  );
}
