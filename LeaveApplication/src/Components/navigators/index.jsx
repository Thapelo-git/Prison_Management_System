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
import { auth } from "../../../firebase";
import UserDetails from "../screens/UserDetails";
import PolUserDetails from "../screens/PolUserDetails";
import Visits from "../screens/Visits";
import Visitshistory from "../screens/Visitshistory";
import Visitsupcoming from "../screens/Visitsupcoming";
import Notification from "../screens/Notification";
import AccountDetails from "../screens/AccountDetails";
// import ForgetPassword from "../screens/forgetPassword";
import UpdateProfile from "../screens/UpdateProfile";
import PasswordForget from "../screens/PasswordForget";
import Interviews from "../screens/Interviews";
const Stack = createNativeStackNavigator()

const Navigators =()=>{
//     const [signedIn,setSignedIn]=useState(false)

//     auth.onAuthStateChanged((user)=>{
//       if(user){
//           setSignedIn(true);
//          console.log(user.uid,"user------------")
       
//       }else{
       
//           setSignedIn(false);
//       }
//   });
    return(
        <NavigationContainer>
            {/* {!signedIn ?(
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
                <> */}
             <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={GetStarted}/> 
                <Stack.Screen name="Signup" component={SignupScreen}/> 
                <Stack.Screen name="Signin" component={SigninScreen}/> 
                <Stack.Screen name="forgetPassword" component={PasswordForget}/>
                <Stack.Screen name="RegisterPhone" component={RegisterPhone}/> 
 
            <Stack.Screen name="homeScreen" component={AuthStack}/>
            <Stack.Screen name="UserDetails" component={UserDetails}/>
            <Stack.Screen name="Polhome" component={TabScreen}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="PolLocation" component={PolLocation}/>
            <Stack.Screen name="PolProfile" component={PolProfile}/>
            <Stack.Screen name="PolUserDetails" component={PolUserDetails}/>
            {/* <Stack.Screen name="Visits" component={Visits}/> */}
            <Stack.Screen name="Visisthistory" component={Visitshistory}/>
            <Stack.Screen name="Visistupcoming" component={Visitsupcoming}/>
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="AccountDetails" component={AccountDetails}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile}/>
            <Stack.Screen name="Interviews" component={Interviews}/>
        </Stack.Navigator>
                {/* </>
            )} */}
  
        </NavigationContainer>
    )
}

export default Navigators