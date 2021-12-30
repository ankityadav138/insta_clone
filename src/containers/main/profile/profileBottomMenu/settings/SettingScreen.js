import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, FlatList } from 'react-native';
import searchIcon from '../../../../../res/images/search.png'
import addfrinds from '../../../../../res/images/addfriends.png'
import bellIcon from '../../../../../res/images/bell.png'
import creator from '../../../../../res/images/favorite.png'
import privacy from '../../../../../res/images/lock.png'
import security from '../../../../../res/images/protection.png'
import ads from '../../../../../res/images/ads.png'
import user from '../../../../../res/images/user.png'
import help from '../../../../../res/images/lifesaver.png'
import about from '../../../../../res/images/info.png'
import theme from '../../../../../res/images/paint.png'
import meta from '../../../../../res/images/meta.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const data = [
    {
        id: 1,
        icon: addfrinds,
        text: "Follow and invite friends",
    },
    {
        id: 2,
        icon: bellIcon,
        text: "Notifications",
    },
    {
        id: 3,
        icon: creator,
        text: "Creator",
    },
    {
        id: 4,
        icon: privacy,
        text: "Privacy",
    },
    {
        id: 5,
        icon: security,
        text: "Security",
    },
    {
        id: 6,
        icon: ads,
        text: "Ads",
    },
    {
        id: 7,
        icon: user,
        text: "Account",
    },
    {
        id: 8,
        icon: help,
        text: "Help",
    },
    {
        id: 9,
        icon: about,
        text: "About",
    },
    {
        id: 10,
        icon: theme,
        text: "Theme",
    }
]



function SettingScreen() {

    const navigation = useNavigation()


    return (
        <ScrollView style={styles.container}>

            <View style={{ width: "90%", height: 35, borderRadius: 10, backgroundColor: "#D3D3D3", flexDirection: "row", alignSelf: "center" }}>
                <Image source={searchIcon} style={{ height: 18, width: 18, top: 10, left: 13, tintColor: "black" }} />
                <TextInput
                    style={{ left: 30, top: 3 }}
                    placeholder='Search'
                />
            </View>

            <View style={{ flexDirection: "column", top: 10 }}>


                <FlatList
                    data={data}
                    keyExtractor={data.id}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate(item.text)} style={styles.contents}>
                                <Image source={item.icon} style={styles.iconstyle} />
                                <Text style={styles.fontstyle}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />

            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 25, marginVertical: 40 }}>
                <Image source={meta} style={{ height: 25, width: 25, }} />
                <Text style={{ fontSize: 18, fontWeight: "bold", left: 5 }}>Meta</Text>
            </View>

            <View style={{ marginVertical: 0, marginHorizontal: 23, bottom: 30 }}>
                <Text style={{ fontSize: 16, color: "skyblue" }}>Accounts Centre</Text>

                <Text style={styles.textstyle}>Control settings for connected experience across </Text>
                <Text style={styles.textstyle}>Instagram, the Facebook app and Messenger,</Text>
                <Text style={styles.textstyle}>including story and post sharing and logging in.</Text>
            </View>


            <View style={{ marginHorizontal: 23 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Logins</Text>
            </View>


            <TouchableOpacity style={{ marginHorizontal: 23, marginVertical: 10 }}>
                <Text style={{ color: "black", fontSize: 17, }}>Multi-account login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginHorizontal: 23, marginVertical: 10 }}>
                <Text style={{ color: "skyblur", fontSize: 16 }}>Add or switch accounts</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginHorizontal: 23, marginVertical: 10 }}>
                <Text style={{ color: "skyblue", fontSize: 16 }}>Log out</Text>
            </TouchableOpacity>



        </ScrollView>
    )
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        marginVertical: 10

    },
    searchbar: {
        width: "90%",
        height: 30,
        backgroundColor: "grey",
        borderRadius: 20,
        top: 10,
        left: 0.5,
    },
    contents: {
        flexDirection: "row",
        marginVertical: 13,
        marginHorizontal: 20
    },
    iconstyle: {
        height: 24,
        width: 24,
        tintColor: "black"
    },
    fontstyle: {
        fontSize: 16,
        left: 10
    },
    textstyle: {
        fontSize: 14,
        color: "grey",
        top: 10,

    }
})



