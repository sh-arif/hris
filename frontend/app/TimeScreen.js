import React from 'react';
import { Text,View,StyleSheet, FlatList, ScrollView } from 'react-native';

function TimeScreen(props) {
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
                <View style={styles.detailsbar}>
                    <View>
                        <Text style={{fontSize:"20" ,fontweight:'bold'}}>Employee:</Text>
                        <Text style={{fontSize:'18'}}>AABB3960</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:'18' ,marginLeft:100}}>Month</Text>
                        <Text style={{fontSize:'18' ,marginLeft:100}}>August</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.date1}>
                        <Text>01</Text>
                        <Text>Sun</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>02</Text>
                        <Text>Mon</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>03</Text>
                        <Text>Tues</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>04</Text>
                        <Text>Wed</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>05</Text>
                        <Text>Thurs</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>06</Text>
                        <Text>Fri</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>07</Text>
                        <Text>Sat</Text>
                        </View>
                    <View style={styles.line1}></View>
                    <View style={styles.date1}>
                        <Text>08</Text>
                        <Text>Sun</Text>
                        </View>
                    <View style={styles.line1}></View>
                </ScrollView>

                
          </View>
    );
}
const styles = StyleSheet.create({
    date1:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 80,
        height:80,
        borderRadius: 50,
        backgroundColor:'orange'
    },
    line1:{
        width: '100%',
        height: 3,
        backgroundColor: 'black',
    },
    detailsbar:{
        
        width: '100%',
        height: 60,
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'

    },
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'white',
    
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
    
})

export default TimeScreen;