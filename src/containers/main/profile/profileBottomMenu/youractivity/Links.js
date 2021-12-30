import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';


function Links() {
    return (
        <View>
            <Text>Links You've visited</Text>
        </View>
    )
}

export default Links;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    }
})
