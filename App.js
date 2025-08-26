import React from "react";
import { StatusBar, Platform, Alert, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />
  
  /*const handlePress = () => console.log("Text pressed.");

  return (
    <SafeAreaView style={styles.container}>

      <Text numberOfLines={1} onPress={handlePress}>
        Hello Rei Agustin - This is for demonstration purposes. A really really long text and see what happens.
      </Text>

      <TouchableOpacity onPress={() => console.log("Image tapped.")}>
        <Image 
          blurRadius={10}
          fadeDuration={1000}
          source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300" }} />
      </TouchableOpacity>
      
      <TouchableHighlight onPress={() => console.log("Image 2 tapped.")}>
        <Image source={require('./assets/robot.jpg')} />
      </TouchableHighlight>

      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: "yellow"}}/>
      </TouchableNativeFeedback>

      <Button
        color='orange'
        title='Click Me'
        onPress={() => console.log('Button pressed.')}
      />

      <Button
        color='red'
        title='Alert Button'
        onPress={() => alert('Alert!')}
      />

      <Button
        color='red'
        title='Alert Button (Better)'
        onPress={() => 
          Alert.alert("This is a better alert button.", "Do you agree", [
            { text: "Yes", onPress: () => console.log('Yes.') },
            { text: "No", onPress: () => console.log('No.') },
          ])
        } 
      />

      <Button
        color='red'
        title='Alert Prompt'
        onPress={() => Alert.prompt("This is a prompt button.", "Do you agree?", text => console.log(text))}
      />

      <View
        style={{
          backgroundColor: "red",
          width: "50%",
          height: 70,
        }}
      > </View>

    <StatusBar style="auto" />

    </SafeAreaView>
  );*/
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
});
