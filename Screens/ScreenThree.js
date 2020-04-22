import React from 'react';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ScreenName from '../components/ScreenName.js';

//props.focused indicates if the page is selected or not
const TabIcon = (props) => (
  <FontAwesome
    name={'map-o'}
    size={25}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

import Busses from '../constants/Busses.js';
const StopToMarker = stop => (<MapView.Marker
                                  key={stop.id}
                                  coordinate={{latitude: stop.position[0],
                                  longitude: stop.position[1]}}
                                  title={stop.name}
                                  description={stop.description}
                                  image = {require('../constants/bus.png')}
                                  resizeMode="contain"
                               />);

// Icons for each tab can be found from https://expo.github.io/vector-icons/
//After creating the TabIcon, you need to add it to your static navigationOptions as shown below
export default class ScreenThree extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion={{
                latitude: 38.0356,
                longitude: -78.5034,
                latitudeDelta: 0.00005,
                longitudeDelta: 0.005,
            }}
          >
          {Busses.map(StopToMarker)}
        </MapView>
   </View>
    );
  }
}

var styles = StyleSheet.create({

 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
   map: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
   }
});
