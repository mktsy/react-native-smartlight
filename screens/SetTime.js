import React, { useState } from "react"
import { Button, View, ImageBackground, StyleSheet, Text } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { IconButton, Colors } from 'react-native-paper'
import { Card } from 'react-native-elements'
import ConsumeAPI from '../services/api'

const SetTime = () => {
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    var url = 'lights/on/'
    // useEffect(async () => {
    //     const getData = async () => {
    //         try {
    //             const result = await ConsumeAPI.get('lights')
    //             console.log(result);
    //             setLights(result) 
    //         } catch(err) {
    //             console.log('error');
    //         }
    //     }
    //     getData()
    //     console.log(lights);
    // }, [])

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }

    const timeOnFront = async (t) => {
        hideTimePicker()
        console.log('front');
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082da5da18c9ec7945273dc', data)
    }
    const timeOffFront = async (t) => {
        hideTimePicker()
        console.log('front');
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082da5da18c9ec7945273dc', data)
    }
    const timeOnLiving = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        console.log('kuy');
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082daf85e7b8e70651cd5ed', data)
        console.log(update)
        console.log('eiei');
    }
    const timeOffLiving = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082daf85e7b8e70651cd5ed', data)
    }
    const timeOnBed = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db065e7b8e70651cd5ee', data)
    }
    const timeOffBed = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db065e7b8e70651cd5ee', data)
    }
    const timeOnKit = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db0e5e7b8e70651cd5ef', data)
    }
    const timeOffKit = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db0e5e7b8e70651cd5ef', data)
    }
    const timeOnToi = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db155e7b8e70651cd5f0', data)
    }
    const timeOffToi = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db155e7b8e70651cd5f0', data)
    }
    const timeOnBack = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db1d5e7b8e70651cd5f1', data)
    }
    const timeOffBack = async (t) => {
        hideTimePicker()
        var time = t + 7
        time = JSON.stringify(time)
        console.log(time);
        const hour = time.slice(17, 19)
        const min = time.slice(20, 22)
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const update = await ConsumeAPI.patch(url + '6082db1d5e7b8e70651cd5f1', data)
    }
    const eiei = () => {
        console.log('jaja')
    }
    return (
        <View>
            <ImageBackground source={require('./images/bg.png')} style={styles.bg}>
                <View style={styles.container} key={1}>
                    <View style={styles.card}>
                        <View styles={styles.cardContent}>
                            <Text style={styles.title}>  Front yard</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnFront} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffFront} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card} key={2}>
                        <View styles={styles.cardContent}>

                            <Text style={styles.title}>  Living Room</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnLiving} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffLiving} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card} key={3}>
                        <View styles={styles.cardContent}>
                            <Text style={styles.title}>  Bedroom</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnBed} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffBed} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card} key={4}>
                        <View styles={styles.cardContent}>
                            <Text style={styles.title}>  Kitchen</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnKit} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffKit} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card} key={5}>
                        <View styles={styles.cardContent}>

                            <Text style={styles.title}>  Toilet</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnToi} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffToi} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card} key={6}>
                        <View styles={styles.cardContent}>
                            <Text style={styles.title}>  Backyard</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <IconButton style={styles.icon} icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOnBack} onCancel={hideTimePicker} date={new Date} />
                                <IconButton icon="clock" color={'#555'} size={40} onPress={showTimePicker} />
                                <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={timeOffBack} onCancel={hideTimePicker} date={new Date} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.icon}>      start          </Text>
                                <Text>end</Text>
                            </View>
                        </View>
                    </View>
                </View>



            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 20,
        marginTop: 7
    },
    box: {
        width: '50%',
        height: '50%',
        marginTop: 15
    },
    font: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25
    },
    button: {
        width: '55%',
        height: '43%',
        flexWrap: 'wrap',
        marginTop: 40,
        fontSize: 10,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#02867D'

    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#F7F3E8',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: '40%',
        alignItems: 'center',
        height: '35%',
        marginStart: 20,
        marginTop: 55,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    image: {
        height: 52,
        width: 52,
        flex: 1,
    },
    bg: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#009387',
    },
    icon: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colour: {
        backgroundColor: '#00ff00'
    }
})

export default SetTime;