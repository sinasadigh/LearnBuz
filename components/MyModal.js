import React, {Component} from 'react';
import {View, Modal, Alert, StyleSheet} from 'react-native';
import MyButton from './MyButton';

class MyModal extends Component {
  render() {
    return (
      <Modal
        animationType={
          !this.props.animationType || this.props.animationType === ''
            ? 'fade'
            : this.props.animationType
        }
        transparent={false}
        visible={this.props.visibility}
        onRequestClose={() => {
          Alert.alert('دکمه بستن را فشار دهید.');
        }}>
        <View style={{...styles.modalView, ...this.props.style}}>
          <MyButton
            title="بستن"
            style={styles.button}
            onPress={this.props.onClosePress}
          />
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
  },
});
export default MyModal;
