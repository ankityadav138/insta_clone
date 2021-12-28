import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import palette from 'res/palette';
import ProfileHeader from './ProfileHeader';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import Header from './profileBottomMenu/Header';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import BottomContent from './profileBottomMenu/BottomContent';
import { useNavigation } from '@react-navigation/native'



const data = [{ key: '1' }];

export default function profileScreen() {

  let navigation = useNavigation()

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  var renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );


  return (
    <FlatList
      style={{ flex: 1, backgroundColor: colors.bottomBackGround }}
      ListHeaderComponent={<Header bs={bs} />}
      stickyHeaderIndices={[0]}
      data={data}
      renderItem={() => (
        <>
          <BottomSheet
            ref={bs}
            snapPoints={[570, 0]}
            renderContent={() => <BottomContent navigation={navigation} />}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
          <ProfileHeader />
          <UserBio />
          <EditProfileButton />
          <ConstantStories />
          <LineSeperator />
          <GridIcon />
          <ProfileGrid />
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 10
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'black',
    bottom: 10
  },
})
// #00000040