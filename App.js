/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
  // Image,
} from 'react-native';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  Image,
} from 'react-native-svg';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Modal
          animationType="slide"
          visible={true}
          statusBarTranslucent={true}
          presentationStyle="overFullScreen">
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <Svg height={247} width={WIDTH}>
              <ClipPath id="clip">
                {/* <Circle r={247} cx={WIDTH / 2} /> */}
                {/* <Circle cx="50" cy="50" r="50" /> */}
                <Ellipse
                  cx={WIDTH / 2}
                  rx={250}
                  ry={150}
                  stroke="purple"
                  strokeWidth="2"
                  fill="yellow"
                />
              </ClipPath>
              <Image
                href={{
                  uri:
                    'https://visualsonline.cancer.gov/retrieve.cfm?imageid=2397&dpi=300&fileformat=jpg',
                }}
                style={{height: '100%', resizeMode: 'stretch'}}
                preserveAspectRatio="xMidYmid meet"
                clipPath="url(#clip)"
              />
            </Svg>
          </View>
          {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="blue"
                strokeWidth="2.5"
                fill="green"
              />
              <Rect
                x="15"
                y="15"
                width="70"
                height="70"
                stroke="red"
                strokeWidth="2"
                fill="yellow"
              />
            </Svg> */}

          <View style={{flex: 4, backgroundColor: 'blue'}}></View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
