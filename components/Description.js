import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  FlatList,
  Alert,
} from 'react-native';

const Description = props => {
  const {description, tagPost} = props;
  const renderDescription = React.useCallback(
    ({item}) => (
      <View
        style={styles.flatlistContainer}>
        <Text onPress={()=>Alert.alert("hello")}>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <View>
      <Text style={{color: 'black', fontSize: 16}}>{description}</Text>
      <FlatList
        scrollEnabled={true}
        data={tagPost}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderDescription}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: 'row',
  },
  flatlistContainer:{
    marginTop:3,
    marginRight: 10,
    borderWidth: 1,
    paddingHorizontal: 4,
    alignSelf: 'center',
    borderRadius: 8,
    paddingBottom: 3,
    borderColor: 'grey',
  }
});

Description.propTypes = {
  like: PropTypes.string,
  tagPost: PropTypes.array,
};
Description.defaultProps = {
  like: '',
  tagPost: [],
};

export default React.memo(Description);
