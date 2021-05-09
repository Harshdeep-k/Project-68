import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import In from "./screens/in";
import Fb from "./screens/fb";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb: { screen: Fb },
  In: { screen: In },
  },
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
    const routeName=navigation.state.routeName;
    if(routeName==="Fb"){
      return(
        <Image source={require("./assets/fb.png")} style={{width:50, height:50}}></Image>
      )
    }
    else if(routeName==="In"){
      return(
        <Image source={require("./assets/insta.png")} style={{width:50, height:50}}></Image>
      )
    }
  }
  })

});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
