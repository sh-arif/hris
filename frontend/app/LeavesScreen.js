import React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

function LeavesScreen(props) {
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
        
        <ScrollView>
            <View style={styles.monthBar}>
                <Text style={{fontSize:"20" ,paddingLeft:20}}>Feburary 2021</Text>
             
                </View>
                
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>2</Text>
                        <Text>Mon</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Off In Lieu CNY</Text>

                </View>
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View>       
            
            <View style={styles.monthBar}>
                <Text style={{fontSize:"20" ,paddingLeft:20}}>April 2021</Text>
            </View>
            <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>5</Text>
                        <Text>Fri</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Sick Leave</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                <View style={styles.datelayout}>
                    <View style={styles.date}>
                        <Text>11</Text>
                        <Text>Thu</Text>
                    </View>
                    <Text style={{fontSize:'18'}}>Annual</Text>
                </View> 
                




            </ScrollView>

       </View>
    );
}
const styles = StyleSheet.create({
    
    datelayout:{
        flexDirection: 'row',
        
        alignItems: 'center'
    },
    date:{
        margin: 10,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    monthBar:{
        width:'100%',
        height: 40,
        backgroundColor: 'lightblue',
        justifyContent:'center',
        
    },

    //share items
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
export default LeavesScreen;