import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client'




export default function App() {
  const [userData, setUserData] = useState({ name: 'madonna' })
  const mainRef = useRef(null);

  useEffect(() => {
    const socket = io('wss://wunder-provider.herokuapp.com/')
    socket.on('userList', (stm) => {
      console.log(stm.results[0].name.first)
    })
  })


  return (
    <View style={styles.container} ref={mainRef}>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
