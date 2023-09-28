import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome/Welcome';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import Senha from './src/screens/Login/Senha';
import Dados from './src/screens/Dados/Dados';
import Principal from './src/screens/Principal/Principal';

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
        <Stack.Screen 
          name='Senha'
          component={Senha}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='SignUp'
          component={SignUp}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='Dados'
          component={Dados}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen 
          name='Principal'
          component={Principal}
          options={{
            headerShown:false
          }}
        />
        
      </Stack.Navigator>
  );
}
