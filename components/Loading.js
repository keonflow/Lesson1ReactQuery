import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-translucent-modal';
import colors from '../theme/color';


const Loading = (props) => {
  const {show} = props;
  return (
    <Modal
      style={styles.container}
      visible={show}
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={() => {}}>
      <View style={styles.content}>
        <ActivityIndicator animating size="large" color={colors.white} />
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  show: PropTypes.bool,
};
Loading.defaultProps = {
  show: false,
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.windowTint,
  },
});
