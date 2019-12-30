import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class MyButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress}>
          <View style={{...styles.button, ...this.props.style}}>
            <Text
              style={{
                color: !this.props.color ? '#000' : this.props.color,
              }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
  },
});
export default MyButton;
