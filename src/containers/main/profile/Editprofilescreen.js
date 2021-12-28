import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Iconic from 'react-native-vector-icons';

const Editprofilescreen = ({ route, navigation }) => {
    const { name, accountname, profileimage } = route.params;
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                <TouchableOpacity>
                    <Iconic name="close-outline" style={{ fontsize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontsize: 16, fontweight: 'bold' }}>Edit Profile</Text>
                <TouchableOpacity
                    onpress={() => {
                        TostMessage();
                        navigation.goback();
                    }}>
                    <Iconic name="checkmark" style={{ fontsize: 35, color: '#3493D9' }} />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, alignItems: 'center' }}>
                <Image
                    source={profileimage}
                    style={{ width: 80, height: 80, borderradius: 100 }}
                />
                <Text style={{
                    color: '#3493D9',
                }}>
                    Change profile photo

                </Text>
            </View>
            <Image
                source={profileimage}
                style={{ width: 80, height: 80, borderradius: 100 }}
            />

            <View style={{ padding: 10 }}>
                <View>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Name
                    </Text>
                    <TextInput
                        placeholder="name"
                        defaultValue={name}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />

                </View>
                <View style={{ paddingvertical: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Username
                    </Text>
                    <TextInput
                        placeholder="accountname"
                        defaultValue={accountname}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />

                </View>
                <View style={{ paddingvertical: 10 }}>

                    <TextInput
                        placeholder="Website"
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />

                </View>
                <View style={{ paddingvertical: 10 }}>

                    <TextInput
                        placeholder="Bio"
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />

                </View>
            </View>
            <View>
                <Text style={{
                    marginVertical: 10,
                    padding: 10,
                    color: "#3493D9",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    bordercolor: "#EFEFEF",
                }}>
                    Switch to Professional account
                </Text>
                <Text style={{
                    marginVertical: 10,
                    padding: 10,
                    color: "#3493D9",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    bordercolor: "#EFEFEF",
                }}>
                    Personal information setting
                </Text>
            </View>
        </View>



    );
};


export default Editprofilescreen;