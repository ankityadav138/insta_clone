import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

function ActivityIndicators() {
    return (
        <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="small" color="white" />
        </View>
    )
}

export default ActivityIndicators
