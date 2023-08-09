import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Componentes/home";
import Login from "./Componentes/login";
import Total from "./Componentes/total";


const Pilha = createStackNavigator()

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen 
                    name='Login'
                    component={Login}
                />
                <Pilha.Screen 
                    name='Home'
                    component={Home}
                />
                <Pilha.Screen 
                    name='Total'
                    component={Total}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}