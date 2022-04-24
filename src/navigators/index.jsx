import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";
import { WelcomeScreen, SigninScreen} from "../screens";
import SignupScreen from "../screens/SignupScreen";
import { forgetPassword } from "../screens";
import { RegisterPhone } from "../screens";
import GetStarted from "../screens/GetStarted";
const Stack = createNativeStackNavigator()

const Navigators =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={GetStarted}/> 
                <Stack.Screen name="Signup" component={SignupScreen}/> 
                <Stack.Screen name="Signin" component={SigninScreen}/> 
                <Stack.Screen name="forgetPassword" component={forgetPassword}/>
                <Stack.Screen name="RegisterPhone" component={RegisterPhone}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators