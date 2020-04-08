import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenName from '../components/ScreenName.js'

// To create each icon
//<Ionicons /> always needs size, color, and name
//props.focused indicates if the page is selected or not

const TabIcon = (props) => (
  <Ionicons
    name={'ios-information-circle-outline'}
    size={30}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class ScreenTwo extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen two: breakdown of every call (categories)'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
