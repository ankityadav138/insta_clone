import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import arrowIcon from '../../../../../../res/images/rightarrow.png'

const data = [
    {
        id: 1,
        text: "Report a problem"
    },
    {
        id: 2,
        text: "Help Centre"
    },
    {
        id: 3,
        text: "Privacy and security help"
    },
]

function Help() {
    return (
        <View style={styles.container}>

            <FlatList
                data={data}
                keyExtractor={data.id}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                            <Text style={styles.fontstyle}>{item.text}</Text>
                            <Image source={arrowIcon} style={{ width: 15, height: 15, tintColor: "black" }} />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white"
    },
    fontstyle: {
        fontSize: 16,
        left: 10
    },
    contents: {
        top: 10,
        flexDirection: "row",
        marginVertical: 13,
        marginHorizontal: 10,
        justifyContent: "space-between"
    },
})
