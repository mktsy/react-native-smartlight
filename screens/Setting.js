import React, {} from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, Icon, Avatar } from 'react-native-elements'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MeterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Card>
                <View style={styles.box3}>
                    <Text >
                        <Avatar style={styles.image} rounded source={{ uri: 'https://www.westsidepetvet.com/images/template/intro-cat.png' }} />
                        <Text style={styles.font}>    John Chaorai</Text>
                    </Text>
                </View>

                <Card.Divider />
                <View style={styles.box}>
                    <Text >
                        <MeterialCommunityIcons name="cash-usd" size={25} />
                        <Text style={styles.font}>    Electricity bill</Text>
                    </Text>
                </View>

                <Card.Divider />
                <View style={styles.box2}>
                    <Text onPress={() => navigation.navigate('Home')}>
                        <SimpleLineIcons name="logout" size={25} />
                        <Text style={styles.font}>    Logout</Text>
                    </Text>
                </View>


            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        marginBottom: 15,
        marginStart: 10
    },
    box2: {
        marginTop: 1,
        marginStart: 10
    },
    box3: {
        marginBottom: 15,
        marginStart: 5
    },
    font: {
        color: '#000',
        fontSize: 20,
    },
    image: {
        width: 30,
        height: 30,
        // alignItems: 'center'
        // marginBottom: 15
    },
})

export default Setting