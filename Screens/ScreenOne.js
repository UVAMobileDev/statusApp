import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

var api_transit = `https://api.devhub.virginia.edu/v1/transit/vehicles`;
var api_facilities = `https://api.devhub.virginia.edu/v1/facilities`;

export default class ScreenOne extends React.Component {

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      busses: [] //,
      // buildings: []
    }
  }
  async updateBusses() {
    let data = await fetch(api_transit).then(res => res.json());
    this.setState({
        loaded: true,
        busses: data.vehicles
    });
  }
  // async updateBuildings() {
  //       let data = await fetch(api_facilities).then(res => res.json());
  //       this.setState({
  //           loaded: true,
  //           buildings: data.facilities
  //       });
  // }
  componentDidMount() {
    this.updateBusses();
    // this.updateBuildings
  }

  render() {
    if(!this.state.loaded) return (<Text>The transit API is down. </Text>);
    // if(!this.state.loaded) return (<Text>The facilities API is down. </Text>);
    return (
      <View style={styles.info}>
        <Text style={styles.status}>The transit API is up. </Text>
        <ScreenName info={'This status app was created by the UVA Development Hub intern team comprised of Alice Han, Arnold Garcia, Cathy Nguyen, and Jasmine Dogu.'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 8,
    marginBottom: 10,
  },
  status: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginTop: 10,
  }
});
