//Screen2:  api call for facilities - building addresses
// 04/04/2020

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  useState,
  useEffect
} from 'react';

var api_link = `https://api.devhub.virginia.edu/v1/facilities`;
export default function FacilitiesAddresses(props) {
  // Use hooks to store functional component state
  //fields/attributes
  const [buildingsState, setBuildingsState] = useState({
    loaded: false,
    buildings: []
  });
  // Function to get/update our stored bus data
  const updateBuildings = async () => {
    let data = await fetch(api_link).then(res => res.json());
    setBuildingsState({
      loaded: true,
      buildings: data
    });
  }
  // Trigger the initial loading of the building data
  useEffect(() => {
    updateBuildings();
  }, []);

  if (!buildingsState.loaded) return ( < Text > Loading... < /Text>);
        return ( <
            View>
            <TouchableOpacity style = {
              styles.reloadBtn
            }
            onPress = {
              () => updateBuildings()
            } >
            <Text style = {
              styles.reloadTxt
            }> Refresh Data </Text>
             </TouchableOpacity>
              <View>
                {
                  buildingsState.buildings.map(buildings => (
                    <Text key = { buildings.Name }>{ `Name: ${buildings.Name} | Address: ${buildings.Address}`}</Text>
                  ))
                }
              </View>
            </View>
              )
            }

            const styles = StyleSheet.create({
              reloadBtn: {
                margin: 5,
                flexDirection: "row",
                justifyContent: "center"
              },
              reloadTxt: {
                padding: 5,
                backgroundColor: "#232dfb",
                color: "white",
              }
            })
