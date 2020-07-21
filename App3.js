import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Modal,
  Image,
  Button,
} from 'react-native';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal
        animationType="slide"
        visible={true}
        statusBarTranslucent={true}
        presentationStyle="overFullScreen">
        <View style={{flex: 2, alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
            }}
            style={{
              resizeMode: 'stretch',
              width: 50,
              height: HEIGHT / 3,
              borderBottomLeftRadius: WIDTH / 2,
              borderBottomRightRadius: WIDTH / 2,
              transform: [{scaleX: 10}],
            }}
          />
          <Text
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'orange',
              padding: 10,
            }}>
            X
          </Text>
        </View>

        <View style={{flex: 4, backgroundColor: 'blue'}}></View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
