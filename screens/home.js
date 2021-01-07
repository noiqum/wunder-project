import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client'
import Block from '../components/block/block';




export default function App() {
    const [userDataList, setUserDataList] = useState([])


    useEffect(() => {
        const socket = io('wss://wunder-provider.herokuapp.com/',
            {
                timeout: 10000,
                jsonp: false,
                autoConnect: true,
                agent: '-',
                pfx: '-',
                cert: '-',
                ca: '-',
                ciphers: '-',
                perMessageDeflate: '-',
                transports: ['polling'],
                transportOptions: {
                    polling: {
                        extraHeaders: {
                            'Origin': "http://localhost:19006"
                        }
                    }
                }
            }
        )
        socket.on('userList', (stm) => {
            setUserDataList((state) => {
                const list = state.length > 0 ? [...state].filter(el => el.login.uuid !== stm.results[0].login.uuid) : [...state];
                list.push(stm.results[0])
                return list;
            })
        })
    })


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
            <FlatList data={userDataList}
                renderItem={(person) => (
                    <Block person={person.item} />
                )}
                keyExtractor={(item) => {
                    item.login.uuid
                }}
            />

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
