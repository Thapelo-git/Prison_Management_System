import React,{useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";
import { WelcomeScreen, SigninScreen} from "../screens";
import SignupScreen from "../screens/SignupScreen";
import { forgetPassword } from "../screens";
import { RegisterPhone } from "../screens";
import GetStarted from "../screens/GetStarted";
import AuthStack from "../screens/AuthStack";
import TabScreen from "../screens/TabScreen";
import SearchScreen from "../screens/SearchScreen";
import PolLocation from "../screens/PolLocation";
import PolProfile from "../screens/PolProfile";
import { auth } from "../../firebase";
import UserDetails from "../screens/UserDetails";
const Stack = createNativeStackNavigator()

const Navigators =()=>{
    const [signedIn,setSignedIn]=useState(false)

    auth.onAuthStateChanged((user)=>{
      if(user){
          setSignedIn(true);
         console.log(user.uid,"user------------")
       
      }else{
       
          setSignedIn(false);
      }
  });
    return(
        <NavigationContainer>
            {!signedIn ?(
                <>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                               <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={GetStarted}/> 
                <Stack.Screen name="Signup" component={SignupScreen}/> 
                <Stack.Screen name="Signin" component={SigninScreen}/> 
                <Stack.Screen name="forgetPassword" component={forgetPassword}/>
                <Stack.Screen name="RegisterPhone" component={RegisterPhone}/> 
                </Stack.Navigator>
                </>
            ):(
                <>
                          <Stack.Navigator screenOptions={{headerShown:false}}>
            
 
            <Stack.Screen name="homeScreen" component={AuthStack}/>
            <Stack.Screen name="UserDetails" component={UserDetails}/>
            <Stack.Screen name="Polhome" component={TabScreen}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="PolLocation" component={PolLocation}/>
            <Stack.Screen name="PolProfile" component={PolProfile}/>
        </Stack.Navigator>
                </>
            )}
  
        </NavigationContainer>
    )
}

export default Navigators