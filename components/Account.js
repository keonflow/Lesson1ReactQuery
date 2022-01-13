import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import moment from 'moment'
const Account = props => {
  const {avatar, name, date} = props;

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: avatar,
        }}
      />
      <View style={styles.textView}>
        <Text style={{color:'black'}}>{name}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    padding:20
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
  },
});

Account.propTypes = {
  date: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
Account.defaultProps = {
  date: '',
  avatar: '',
  name: '',
};

export default Account;
