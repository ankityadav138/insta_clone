import React from 'react'
import { View } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

function Links() {
    return (
        <View style={styles.container}>

            <View style={{ flexDirections: "Column", marginStart: 20 }}>

                <View style={{ flexDirection: "row", top: 20 }}>

                    <Text style={{ marginHorizontal: 10 }}>Time on Instagram</Text>

                </View>
                <View style={{ flexDirection: "row", top: 20 }}>

                    <Text style={{ marginHorizontal: 10, justifyContent: 'center' }}>54m
                        Daily average
                        The average time you've spent per day using the
                        Instagram app on this device in the last week.
                    </Text>

                    <View style={{ flexDirection: "row", top: 20 }}>

                        <Text style={{ marginHorizontal: 10, justifyContent: 'center' }}>Manage your time</Text>

                        <View style={{ height: "60%", width: "100%", alignContent: "flex-start", marginLeft: 8, top: 20, justifyContent: "space-evenly" }}>
                            <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                                <Feather name='user-plus' size={18} color="black" />
                                <Text style={{ marginHorizontal: 10 }}>Set daily reminder
                                    We'll send you a reminder once you've reached the time you've reached the
                                    time you've set for yourself.
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: "60%", width: "100%", alignContent: "flex-start", marginLeft: 8, top: 20, justifyContent: "space-evenly" }}>
                            <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                                <Feather name='user-plus' size={18} color="black" />
                                <Text style={{ marginHorizontal: 10 }}>Notification settings
                                    Choose which Instagram notifications you receive.
                                    You can also mute push notifications.
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

            </View>

        </View>
    )
}

export default Links;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})