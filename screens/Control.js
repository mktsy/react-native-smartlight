import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import ConsumeAPI from '../services/api'
import { Card, ListItem, Icon } from 'react-native-elements'
import { Button } from 'react-native-paper'
const offImg = './images/offimage.png'
const whiteImg = './images/onimage.png'
const redImg = './images/redimage.png'
const greenImg = './images/greenimage.png'
const blueImg = './images/blueimage.png'
const bgImg = './images/bg.png'

export default class Control extends Component {
    state = {
        lights: [],
        light: []
    }
    async componentDidMount() {
        this.setState({
            lights: await ConsumeAPI.get('lights'),
        })
    }
    onOffLight = id => async () => {
        const url = 'lights/state/' + id
        this.setState({ light: await ConsumeAPI.get('lights/' + id)})
        // console.log(this.state.light);
        if (this.state.light.state == false) {
            var data = {
                state: true,
                color: '#ffffff'
            }
            this.setState({light: await ConsumeAPI.patch(url, data)})
        } else {
            data = {
                state: false,
                color: 'off'
            }
            this.setState({light: await ConsumeAPI.patch(url, data)})
        }
        this.setState({lights: await ConsumeAPI.get('lights')})
    }
    changeColor = id => async () => {
        const url = 'lights/state/' + id
        console.log(url);
        this.setState({ light: await ConsumeAPI.get('lights/' + id)})
        console.log(this.state.light.state);
        var data = null
        if (this.state.light.state == true) {
            if (this.state.light.color == '#ffffff') {
                data = {state: true, color: '#ff0000'}
            } else if (this.state.light.color == '#ff0000') {
                data = {state: true, color: '#00ff00'}
            } else if (this.state.light.color == '#00ff00') {
                data = {state: true, color: '#0000ff'}
            } else {
                data = {
                    state: true, 
                    color: '#ffffff'
                }
            }
            console.log(data);
            this.setState({light: await ConsumeAPI.patch(url, data)})
        }
        this.setState({lights: await ConsumeAPI.get('lights')})
    }
    render() {
        return (
            <View>
                <ImageBackground source={require(bgImg)} style={styles.bg}>
                <View style={styles.header}>
                    <Text style={styles.font}>   Control</Text>
                </View>
                <View style={styles.container}>
                    {
                        this.state.lights.map((data, i) => {
                            return (

                                <View key={i} style={styles.box}>
                                    <Card>
                                        <Card.Title>
                                            {data.name}
                                        </Card.Title>
                                        <Card.Divider />
                                        <View style={{flexDirection:'row'}}>
                                            <TouchableOpacity onPress={this.onOffLight(data._id)}>
                                            {data.color == 'off'?<Image source={require(offImg)} style={styles.image} />:null}
                                            {data.color == '#ff0000'?<Image source={require(redImg)} style={styles.image} />:null}
                                            {data.color == '#00ff00'?<Image source={require(greenImg)} style={styles.image} />:null}
                                            {data.color == '#0000ff'?<Image source={require(blueImg)} style={styles.image} />:null}
                                            {data.color == '#ffffff'?<Image source={require(whiteImg)} style={styles.image} />:null}
                                        </TouchableOpacity>
                                        <Button style={styles.button} mode="contained" onPress={this.changeColor(data._id)} uppercase={false}>
                                                Color
                                            </Button>
                                        </View>
                                    </Card>
                                </View>
                            )
                        })

                    }
                </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#111111',
        justifyContent: 'center',

    },
    container: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: '50%',
        height: '50%',
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
        
    },
    image: {
        height: 52,
        width: 52,
        flex: 1,
    },
    bg: {
        width: '100%',
        height: '100%'
    }
})