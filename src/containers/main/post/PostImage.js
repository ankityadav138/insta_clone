import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

export default function PostImage({ post }) {
  // console.log("imagepost", post.image)
  return <Image source={{ uri: post.image }} style={Styles.postImg} />;
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
});
