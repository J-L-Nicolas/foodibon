import React, {useEffect, Fragment} from 'react'
import styles from './assets/stylesApp'

/* import navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* imp redux */
import { useSelector, useDispatch } from 'react-redux';
import Action, {type} from './Redux/Action'

/* import components */
import OnePage from './components/OnePage'
import Login from './components/login'
import Register from './components/Register'
import Home from './components/Home'
import Account from './components/Account'
import Detail from './components/Detail'
import Card from './components/Card'

const App = () => {

  /* init redux */
  const Firebase = useSelector(state => state.Firebase)
  const User = useSelector(state => state.User)
  const dispatch = useDispatch()

  /* Effect */
  useEffect(() => {

    Firebase.auth().onAuthStateChanged(onAuthStateChanged)
  }, [])

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    
    if (user != null){

      dispatch(Action(type.USER_CHANGE, user))
    }
  }

  const Stack = createStackNavigator();

  /* display components Navigate  */
  const navigateComponentsSecurity = (User != null) ? (
    <Fragment>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="card" component={Card} />
    </Fragment>
  ):(
    <Fragment>
      <Stack.Screen name="onePage" component={OnePage} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Fragment>
  )
  
  /* Render */
  return (
    <NavigationContainer style={styles.body}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       {navigateComponentsSecurity}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App