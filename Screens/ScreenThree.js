import React from 'react';
import { View, StyleSheet } from 'react-native';
//
import { FontAwesome } from '@expo/vector-icons';
import ScreenName from '../components/ScreenName.js'

//props.focused indicates if the page is selected or not
const TabIcon = (props) => (
  <FontAwesome
    name={'map-o'}
    size={25}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

// Icons for each tab can be found from https://expo.github.io/vector-icons/
//After creating the TabIcon, you need to add it to your static navigationOptions as shown below
export default class ScreenThree extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen three: live map of all the vehicles moving around'} />
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
