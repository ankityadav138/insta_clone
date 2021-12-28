import React from 'react'
import { View } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

function Links() {
    return (
        <View style ={styles.container}>

            <View style={{flexDirections: "Column" ,marginStart: 20}}>

            <View style={{ flexDirection: "row", top: 20 }}>

               <Text style={{ marginHorizontal: 10 }}>Links you've visited </Text>
               <Text style={{ marginHorizontal: 10 }}>Hide History </Text>
               

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
