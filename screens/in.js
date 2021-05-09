import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default class In extends React.Component {
  render() {
    return (
        <SafeAreaProvider>
        <View>
        <Header centerComponent={{text:"Buzz App", style:[{height:45,fontSize:23,color:"white",fontStyle:"normal"}] }}  backgroundColor="#401A3F" />
        <Text> Insta screen will be here</Text>
        </View>
        </SafeAreaProvider>
    )
  }
}
