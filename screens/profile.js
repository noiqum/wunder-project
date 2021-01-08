import * as React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Profile = ({ route }) => {
    const { person } = route.params;


    return <ImageBackground style={styles.bg} source={require('../components/svg/bg.svg')}>
        <View style={styles.info}>
            <Image style={styles.info_img} source={{ uri: person.picture.medium }} />
            <View>
                <Text style={styles.info_text}>
                    {person.name.first}
                </Text>
                <Text style={styles.info_textSubling}>
                    {person.name.last}
                </Text>
                <Text style={styles.info_textSubling}>
                    {person.dob.age}
                </Text>
            </View>

        </View>
        <View style={styles.city}>

            <Text style={styles.info_text}>
                <MaterialCommunityIcons name="home-city-outline" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                {person.location.city}
            </Text>
        </View>
        <View style={styles.user}>
            <View>
                <Text style={styles.info_text}>
                    <Feather name="user" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                    {person.login.username}
                </Text>
            </View>
            <View>
                <Text style={styles.info_textSubling}>
                    <Entypo name="email" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                    {person.email}
                </Text>
            </View>
            <View>
                <Text style={styles.info_textSubling}>
                    <Entypo name="old-phone" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                    {person.cell}
                </Text>
            </View>

        </View>


    </ImageBackground>
}

export default Profile;

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: "100%"
    },
    info: {
        width: "100%",
        height: "20%",
        backgroundColor: "transparent",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    info_img: {
        margin: 20,
        width: 125,
        height: 125,
        borderRadius: 20,
        borderColor: "#6374F3",
        borderWidth: 2,
        borderStyle: "solid",
    },
    info_text: {
        color: "#6374F3",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 30,

    },
    info_textSubling: {
        color: "#6374F3",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,

    },
    city: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 20,
        marginLeft: 20
    },
    user: {
        marginTop: 100,
        marginLeft: 20,
    }

})