/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default class troioi extends Component {
  // render() {
  //   return (
  //     <View style={{flex: 1}}>
  //       <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  //       <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  //       <View style={{flex: 3, backgroundColor: 'steelblue'}} />
  //     </View>
  //   );
  // }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('troioi', () => troioi);
