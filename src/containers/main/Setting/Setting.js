import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

function Setting() {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "column", marginStart: 20 }}>

                <View style={{ width: "90%", height: 40, flexDirection: "row", borderRadius:4, backgroundColor:"grey", top: 20}}>
                    <View>
                        <TextInput
                        
                        placeholder='Search'
                         />
                    </View>

                </View>

                <View style={{ height: "60%", width: "100%", alignContent: "flex-start", marginLeft: 8, top: 20, justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Follow and invite friends</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Notifications</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Privacy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Security</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Ads</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Help</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>About</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Theme</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 50 }}>
                    <Text style={{ marginHorizontal: 10, color: "blue" }}>Account Center</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", top: 60 }}>

                    <Text style={{ marginHorizontal: 10 }}>Control setting for conected experiences across
                        Instagram, the Facebook app and Messanger, including
                        story and post sharing and logging in.
                    </Text>
                </View>

                <View style={{ flexDirection: "row", top: 80 }}>

                    <Text style={{ marginHorizontal: 10 }}>Logins </Text>
                </View>

                <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 100 }}>
                    <Text style={{ marginHorizontal: 10, color: "blue" }}>Add or switch accounts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 120 }}>
                    <Text style={{ marginHorizontal: 10, color: "blue" }}>Log out of all accounts</Text>
                </TouchableOpacity>






            </View>

        </View>
    )
}

export default Setting;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    searchbar: {
        width: "90%",
        height: 30,
        backgroundColor: "grey",
        borderRadius: 20,
        top: 10,
        left: 0.5,
    }
})

