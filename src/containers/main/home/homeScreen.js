import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Post from '../post/Post'
import colors from '../../../res/colors';
// import images from 'res/images';
import StoryContainer from '../story/StoryContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL } from '@env';
export default function homeScreen({ navigation }) {
  const storyOnPress = () => navigation.navigate('StoryScreen');

  const [posts, setPosts] = useState([])


  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
  ];

  const getAllPost = async () => {
    let token = await AsyncStorage.getItem('token')
    await fetch(`${BASE_API_URL}users/feed`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(res => res.json())
      .then((response) => {
        try {
          if (response.status === "OK") {
            var data = response.data;
            for (let index = 0; index < data.length; index++) {
              const element = data[index];
              console.log(element.image)
              setPosts(element)
            }
          }
        } catch (err) {
          console.log(err)
        }
      })
  }

  useEffect(() => {
    getAllPost()
  }, [])

  const post = {
    userName: 'John Doe',
    placeName: 'Istanbul, Turkey',
    imgUrl: 'https://picsum.photos/1920/1080',
    likeCount: 103,
    commentCount: 21,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra.',
    publishDate: new Date().toDateString(),
  };
  const stories = [
    {
      key: 'JohnDoe',
      hasStory: true,
      src: 'https://picsum.photos/500',
    },
    {
      key: 'CarlaCoe',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'DonnaDoe',
      hasStory: true,
      src: 'https://picsum.photos/400',
    },
    {
      key: 'JuanDoe',
      hasStory: true,
      src: 'https://picsum.photos/300',
    },
    {
      key: 'MartaMoe',
      hasStory: true,
      src: 'https://picsum.photos/700',
    },
    {
      key: 'PaulaPoe',
      hasStory: true,
      src: 'https://picsum.photos/200',
    },
  ];

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={data}
      ListHeaderComponent={() => (
        <StoryContainer stories={stories} storyOnPress={storyOnPress} />
      )}
      renderItem={({ item, index }) => (
        /*<View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={images.harun}
            style={{height: 512, width: 512, resizeMode: 'contain'}}
          />
        </View>
        */
        <Post post={posts} />
      )}
    />
  );
}
