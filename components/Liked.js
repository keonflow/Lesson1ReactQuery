import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Liked = props => {
  console.log('rendered');
  const {like,onIncrease} = props;
  const [liked, setLiked] = React.useState(false);
  const [quantily, setQuantily] = React.useState(like);
  const clickLiked = () => {
    setLiked(!liked);
    if (liked === true) {
      setQuantily(like+1);
    } else {
      setQuantily(like);
    }
  };
  return (
    <TouchableOpacity style={styles.likeContainer} onPress={() => clickLiked()}>
      <Icon name="thumb-up" color={liked == true ? 'red' : 'grey'} size={20} />
      <Text style={{marginLeft: 4}}>{quantily}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

Liked.propTypes = {
  like: PropTypes.number,
};
Liked.defaultProps = {
  like: '',
};

export default React.memo(Liked);
