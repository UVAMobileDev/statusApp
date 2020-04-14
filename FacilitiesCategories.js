/*
Api call for Facilities - categories
04/01/2020

*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

var api_link = `https://api.devhub.virginia.edu/v1/facilities/categories`;

export default function FacilitiesCategories(props) {
    // Use hooks to store functional component state
    const [busState, setBusState] = useState({
        loaded: false,
        busses: []
    });

    // Function to get/update our stored bus data
    const updateBusses = async () => {
        let data = await fetch(api_link).then(res => res.json());
        setBusState({
            loaded: true,
            busses: data.vehicles
        });
    }

    // Trigger the initial loading of the bus data
    useEffect(() => {
        updateBusses();
    }, []);

    if(!busState.loaded) return (<Text>Loading...</Text>);
    return (
        <View>
            <TouchableOpacity   style={styles.reloadBtn}
                                onPress={() => updateBusses()}>
                <Text style={styles.reloadTxt}>Refresh Data</Text>
            </TouchableOpacity>
            <View>
                {
                    busState.busses.map(bus => (<Text key={bus.category}>{`Categories: ${bus.Category}`}</Text>))
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
