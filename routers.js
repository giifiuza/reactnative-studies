import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome/Welcome';
import Login from './screens/Login/Login'

const Stack = createNativeStackNavigator()
export default function Routers() {
  return (
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen 
          name='Welcome'
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            headerShown:false
          }}
        />
        
      </Stack.Navigator>
  );
}
