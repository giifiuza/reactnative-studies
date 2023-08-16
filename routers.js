import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Componentes/home";
import Login from "./Componentes/login";
import Total from "./Componentes/total";
import TelaImages from "./Componentes/tela4";


const Pilha = createStackNavigator()

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen 
                    name='Login'
                    component={Login}
                    // options={{headerShown:false}}
                />
                <Pilha.Screen 
                    name='Home'
                    component={Home}
                    // options={{headerShown:false}}
                />
                <Pilha.Screen 
                    name='Total'
                    component={Total}
                    // options={{headerShown:false}}
                />
                <Pilha.Screen 
                    name='TelaImages'
                    component={TelaImages}
                    // options={{headerShown:false}}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}