import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress}>
          <View style={{...styles.button, ...this.props.style}}>
            <Icon
              name={this.props.IconName}
              color={
                !this.props.color || this.props.color === ''
                  ? '#fff'
                  : this.props.color
              }
              size={
                !this.props.size || this.props.size === ''
                  ? 22
                  : this.props.size
              }
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '30%',
  },
});
export default IconButton;
