import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import MyButton from './components/MyButton';
import IconButton from './components/IconButton';
import Colors from './constants/Colors';
import MyModal from './components/MyModal';

const App = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeVisibility = () => {
    setModalVisible(!modalVisible);
  };
  const [modalVisible1, setModalVisible1] = useState(false);

  const changeVisibility1 = () => {
    setModalVisible1(!modalVisible1);
  };
  const [modalVisible2, setModalVisible2] = useState(false);

  const changeVisibility2 = () => {
    setModalVisible2(!modalVisible2);
  };
  return (
    <View style={styles.body}>
      <View style={styles.bodyTop}>
        <View style={styles.profile}>
          <View style={styles.profileDetail}>
            <Image
              source={require('./images/man.png')}
              style={styles.profileImage}
            />
            <Text style={styles.ml_8}>farid</Text>
          </View>
          <View style={styles.profileElements}>
            <Image source={require('./images/badge.png')} />
            <Text style={styles.ml_8}>1</Text>
          </View>
          <View style={styles.profileElements}>
            <Image source={require('./images/diamond.png')} />
            <Text style={styles.ml_8}>2</Text>
          </View>
          <View style={{...styles.profileElements, flex: 2}}>
            <Image source={require('./images/treasure-chest.png')} />
          </View>
        </View>
      </View>

      <View style={styles.bodyMid}>
        <MyButton title="شروع بازی" style={styles.button} color="#fff" />
      </View>
      <View style={styles.bodyBottom}>
        <IconButton IconName="cog" onPress={changeVisibility} />
        <IconButton IconName="lock" onPress={changeVisibility1} />
        <IconButton IconName="exclamation-circle" onPress={changeVisibility2} />
      </View>

      <MyModal
        visibility={modalVisible}
        onClosePress={changeVisibility}
        style={{backgroundColor: '#ffc600'}}
        animationType="fade"
      />
      <MyModal
        visibility={modalVisible1}
        onClosePress={changeVisibility1}
        style={{backgroundColor: '#7B1FA2'}}
        animationType="slide"
      />
      <MyModal
        visibility={modalVisible2}
        onClosePress={changeVisibility2}
        style={{backgroundColor: '#388E3C'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  profile: {
    backgroundColor: Colors.accent,
    height: 60,
    width: 300,
    borderRadius: 30,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  bodyTop: {
    flex: 6,
    alignItems: 'center',
  },
  profileDetail: {
    flex: 4,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    marginTop: 5,
    marginLeft: 5,
  },
  button: {
    width: 300,
    backgroundColor: Colors.accent,
  },
  ml_8: {
    marginLeft: 8,
  },
  profileElements: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  bodyMid: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
