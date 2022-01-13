import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import {GET_POST_DETAILS} from '../src/api';
import Account from '../components/Account';
import usePost from '../hook/usePost';
import {mdiThumbUp} from '@mdi/js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Liked from '../components/Liked';
import {SliderBox} from 'react-native-image-slider-box';
import Description from '../components/Description';

Icon.loadFont();

export default function TestScreen() {
  const {status, data, error, isFetching} = usePost();
  const test = ()=>{
    console.log(data)
  }
  React.useEffect(() => {
    test()
  }, [])
  return (
    <View style={{backgroundColor: 'white'}}>

      <Text>Hello</Text>
    </View>
  );
}
