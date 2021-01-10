import * as React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Profile = ({ route }) => {
    const { person } = route.params;


    return <ImageBackground style={styles.bg} source={require('../assets/bgNew.png')}>
        <View style={styles.info}>
            <Image style={styles.info_img} source={{ uri: person.picture.medium }} />
            <View style={styles.info_body}>
                <Text style={styles.info_text}>
                    <Text style={{ marginRight: 5 }}>{person.name.first}</Text> {person.name.last}
                </Text>

                <Text style={styles.info_textSubling}>
                    {person.dob.age}
                </Text>
            </View>

        </View>

        <View style={styles.user}>
            <View>
                <Text style={styles.info_text}>
                    <Feather name="user" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                    {person.login.username}
                </Text>
            </View>
            <View >

                <Text style={styles.info_textSubling}>
                    <MaterialCommunityIcons name="home-city-outline" size={24} color="#6374F3" style={{ marginRight: 10 }} />
                    {person.location.city}
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
        height: "100%",
        resizeMode: "contain"
    },
    info: {
        width: "100%",
        height: "30vh",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    info_img: {
        marginTop: 60,
        width: 125,
        height: 125,
        borderRadius: "50%",
        borderColor: "#E0E3DA",
        borderWidth: 2,
        borderStyle: "solid",
    },
    info_body: {
        justifyContent: "center",
        alignItems: "center"
    },
    info_text: {
        color: "#E0E3DA",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 15,

    },
    info_textSubling: {
        color: "#E0E3DA",
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
        marginTop: 125,
        marginLeft: 20,
    }

})