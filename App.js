import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import io from 'socket.io-client'




export default function App() {
  const [userDataList, setUserDataList] = useState([])


  // useEffect(() => {
  //   const socket = io('wss://wunder-provider.herokuapp.com/')
  //   socket.on('userList', (stm) => {
  //     console.log(stm.results[0].name.first)
  //   })
  // })


  return (
    <View style={styles.container} >
      <View style={styles.head}>
        <Text style={styles.header}>PROFILES</Text>
        <View>
          <View style={styles.lineFirst}></View>
          <View style={styles.lineRest}></View>
          <View style={styles.lineRest}></View>
        </View>

      </View>
      <View>
        <Text>hello</Text>
      </View>


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  head: {
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  header: {
    width: 103,
    height: 25,
    fontSize: 20,
    textAlign: 'right',
    color: '#b1b8c5',
  },
  lineFirst: {
    width: 32,
    height: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#6374f3',
    borderRadius: 4,
  },
  lineRest: {
    width: 32,
    height: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#6374f3',
    borderRadius: 4,
    marginTop: 9,
  }
});
