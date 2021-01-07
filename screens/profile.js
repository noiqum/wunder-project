import * as React from 'react';
import { View, Text } from 'react-native';

const Profile = ({ route }) => {
    const { person } = route.params;
    return <View>
        <Text>
            {person.name.first}
        </Text>
    </View>
}

export default Profile;