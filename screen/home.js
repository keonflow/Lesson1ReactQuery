import * as React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';
import {GET_POST_DETAILS} from '../src/api';
import Account from '../components/Account';
import usePost from '../hook/usePost';
import {mdiThumbUp} from '@mdi/js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Liked from '../components/Liked';
import {SliderBox} from 'react-native-image-slider-box';
import Description from '../components/Description';
import moment from 'moment';
import Loading from '../components/Loading';
import {windowHeight, windowWidth} from '../theme/Dimensions';
Icon.loadFont();

export default function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [text, onChangeText] = React.useState('');

  const {status, data, error, isFetching} = usePost();
  const calDate = date => {
    let startDate = moment([date]);
    let endDate = moment(startDate).fromNow();
    return endDate;
  };

  const renderPost = React.useCallback(
    ({item}) => (
      <View style={{marginBottom: 30}}>
        <Account
          avatar={item.avatar}
          name={item.userName}
          date={calDate(item.postDate)}
        />
        <SliderBox
          images={item.postImage}
          sliderBoxHeight={400}
          resizeMode={'stretch'}
        />
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <Liked like={item.liked} />
          <Description description={item.postDescription} tagPost={item.tag} />
          <View style={styles.commentContainer}>
            <Icon name="comment" color="grey" size={20} />
            <TextInput
              placeholder="Comment"
              onChangeText={comment => onChangeText(comment)}
              style={styles.input}
            />
          </View>
        </View>
      </View>
    ),
    [],
  );
  React.useEffect(() => {
    {
      status === 'loading' ? setIsLoading(true) : setIsLoading(false);
    }
  }, [status]);
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList scrollEnabled={true} data={data} renderItem={renderPost} />
      <Loading show={isLoading} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: windowWidth / 1.2,
    borderColor: 'white',
    borderWidth: 1,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
