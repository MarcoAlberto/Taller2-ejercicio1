import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import songsrap from './Rap';

const {width} = Dimensions.get('window');

const PlayerRap = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState(0);

    const songSlider = useRef(null);

    useEffect(() => {
        scrollX.addListener(({value}) => {
            //console.log('Scroll X', scrollX);
            //console.log('Device width', width);

            const index = Math.round(value/width);
            setSongIndex(index);
            //console.log('Index:', index);
        });

        return () => {
            scrollX.removeAllListeners();
        }
    }, []);

    const skipToNext = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex + 1) * width,
        });
    }
    const skipToPrevious = () => {
        songSlider.current.scrollToOffset({
            offset: (songIndex - 1) * width,
        });
    }

    const renderSongs = ({item}) => {
        return(
            <Animated.View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.artwork}>
                    <Image style={styles.subalbum} source={item.image} /> 
                </View>
            </Animated.View>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.maincontainer}>
                <View style={{width: width}}>
                    <Animated.FlatList renderItem={renderSongs} data={songsrap} keyExtractor={(item) => item.id}
                        horizontal pagingEnabled showsHorizontalScrollIndicator={false} 
                        scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: {
                            x: scrollX
                        }}}], {useNativeDriver: true })} ref={songSlider}/>
                    <Text style={styles.title}>{songsrap[songIndex].title}</Text>
                    <Text style={styles.artist}>{songsrap[songIndex].artist}</Text>
                </View>
                <View>
                    <Slider style={styles.progress} value={10} minimumValue={0} maximumValue={100}
                        thumbTintColor='blue' minimumTrackTintColor='blue' maximumTrackTintColor='grey'
                        onSlidingComplete={() => {}} />
                </View>
                <View style={styles.labelcontainer}>
                    <Text style={styles.timerprogress}>0:00</Text>
                    <Text style={styles.timerprogress}>3:55</Text>
                </View>
                <View style={styles.iconview}>
                    <View>
                        <TouchableHighlight onPress={skipToPrevious}>
                            <Image style={styles.icon} source={require('./img/double_left.png')} /> 
                        </TouchableHighlight>
                    </View>               
                    <Image style={styles.icon} source={require('./img/pause.png')} />
                    <Image style={styles.icon} source={require('./img/square.png')} /> 
                    <View>
                        <TouchableHighlight onPress={skipToNext}>
                            <Image style={styles.icon} source={require('./img/double_right.png')} /> 
                        </TouchableHighlight>
                    </View>   
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    maincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subalbum: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    artwork: {
        width: 300,
        height: 340,
        marginBottom: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
    },
    artist: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
    },
    progress: {
        width: 350,
        height: 40,
        marginTop: 25,
        flexDirection: 'row',
    }, 
    labelcontainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timerprogress: {
        color: 'black',
        fontWeight: '600',
    },
    iconview: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    icon: {
        width: 30,
        height: 30,
    }
});

export default PlayerRap;