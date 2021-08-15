import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, ViewComponent, StyleSheet, Text, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';



function WelcomeScreen(props) {


  return (

    <View style={styles.container}>
      <View style={styles.navBar}>

        <View style={styles.icon1}>
          <Text>Modules</Text>
        </View>

        <View style={styles.icon2}>
          <Text>Profile</Text>
        </View>
        <View style={styles.icon3}
        >
          <Text>Settings</Text>
        </View>
        <View style={styles.icon4}>
          <Text>Logout</Text>
        </View>
      </View>
      <View style={styles.contents}>
        <TouchableOpacity style={styles.content1}>
          <FontAwesome5 name="user-clock" size={25} color='white' />
          <Text>TimeIn/TimeOut</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.content2}>
          <FontAwesome5 name="money-bill" size={25} color="white" />
          <Text>Claim</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.content3}>
          <MaterialIcons name="beach-access" size={30} color="white" />
          <Text>Leaves</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.content4}>
          <FontAwesome5 name="piggy-bank" size={28} color="white" />
          <Text>PaySlip</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>



  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: 'white',

  },
  contents: {

    height: '80%',
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
    alignItems: 'center'


  },
  content1: {
    borderRadius: 100,
    margin: '5%',
    height: '10%',
    width: '40%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'

  },
  content2: {
    borderRadius: 100,
    margin: '5%',
    height: '10%',
    width: '40%',
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center'

  },
  content3: {
    borderRadius: 100,
    margin: '5%',
    height: '10%',
    width: '40%',
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center'

  },
  content4: {
    borderRadius: 100,
    margin: '5%',
    height: '10%',
    width: '40%',
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'

  },
  icontouch1: {
    width: 500,


  },
  icon1: {
    margin: 10,
    width: '20%',
    height: 50,
    borderRadius: 100,
    backgroundColor: 'mediumaquamarine',
    justifyContent: 'center',
    alignItems: 'center',


  },
  icon2: {
    margin: 10,
    width: '20%',
    height: 50,
    borderRadius: 100,
    backgroundColor: 'mediumturquoise',
    justifyContent: 'center',
    alignItems: 'center',


  },
  icon3: {
    margin: 10,
    width: '20%',
    height: 50,
    borderRadius: 100,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',


  },
  icon4: {
    margin: 10,
    width: '20%',
    height: 50,
    borderRadius: 100,
    backgroundColor: 'orchid',
    justifyContent: 'center',
    alignItems: 'center',


  },
  navBar: {

    height: '10%',
    backgroundColor: 'linen',
    flexDirection: 'row'
  },

  footer: {

    height: '10%',
    backgroundColor: '#1466a8',
  },

})

export default WelcomeScreen;
