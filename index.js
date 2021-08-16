/**
 * @format
 */

 import React from 'react'
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';

 /* firebase Messaging */
 import messaging from '@react-native-firebase/messaging';
 
 /* redux */
 import { Provider } from 'react-redux'
 import store from './Redux/store'

 /* Notification backgroun app  */
 messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
 
 const reactRender = () => {
 
     return(
         <Provider store={store}>
             <App/>
         </Provider>
     )
 }
 
 AppRegistry.registerComponent(appName, () => reactRender);