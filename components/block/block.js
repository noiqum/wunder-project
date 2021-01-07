import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import ArrowRight from '../svg.components/arrowRight';

const Block = ({ person }) => {

    const navigation = useNavigation()

    return <View style={styles.block}>
        <View style={styles.left}>
            <Image source={{ uri: person.picture.thumbnail }} style={styles.blockImage} ></Image>
            <Text style={styles.info} >{person.name.first} , {person.dob.age}</Text>
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
            <View><ArrowRight /></View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    block: {
        width: "100%",
        borderBottomColor: "#dbe0e5",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    left: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    blockImage: {
        width: 52,
        height: 52,
        margin: 20,
        borderRadius: 50,
    },
    info: {
        fontSize: 18,
        color: "#6374f3",
    }

})

export default Block;