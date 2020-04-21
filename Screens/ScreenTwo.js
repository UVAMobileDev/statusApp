import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenName from '../components/ScreenName.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const TabIcon = (props) => (
  <Ionicons
    name={'ios-information-circle-outline'}
    size={30}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
);

const Drawer = createDrawerNavigator();

function TabScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>home page</Text>
    </View>
  )
}

function APIOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>API I info here</Text>
    </View>
  );
}

function APITwo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>API II info here</Text>
    </View>
  );
}

function DrawerContainer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabScreen} />
      <Drawer.Screen name="API I" component={APIOne} />
      <Drawer.Screen name="API II" component={APITwo} />
    </Drawer.Navigator>
  );
}

export default class ScreenTwo extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
        <NavigationContainer>
          <DrawerContainer />
        </NavigationContainer>
      );
    };
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#F00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
});
