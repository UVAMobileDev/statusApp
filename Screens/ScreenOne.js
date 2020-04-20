import React from 'react';
import { View, StyleSheet } from 'react-native';
// line below needs to be imported to be able to
import { SimpleLineIcons } from '@expo/vector-icons';
// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js'

//props.focused indicates if the page is selected or not
const TabIcon = (props) => (
  <SimpleLineIcons
    name={'home'}
    size={25}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

// Icons for each tab can be found from https://expo.github.io/vector-icons/
// After creating the TabIcon, you need to add it to your static navigationOptions as shown below

var api_link = `https://api.devhub.virginia.edu/v1/transit/vehicles`;

export default class ScreenOne extends React.Component {

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen one: overview of status '} />
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
