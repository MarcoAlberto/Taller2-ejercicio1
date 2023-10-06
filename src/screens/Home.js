import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [modalVisibleMusic, setModalVisibleMusic] = useState(false);
    const [modalRap, setModalRap] = useState(false);
    const [modalPop, setModalPop] = useState(false);
    const navigation = useNavigation();
    return (
      <>
        <ScrollView>
          <Modal transparent={true} animationType='slide' visible={modalVisibleMusic} onRequestClose={() => {
            alert('Modal has been closed');}}>
              <View style={styles.vistaModal}>
                <View style={styles.Modal}>
                    <View style={styles.subViewTitle}>
                        <Text style={styles.subtitle}>The Dark Side of the Moon</Text>
                    </View>
                    <View>
                        <Image style={styles.subalbum} source={require('./img/dark.png')} />
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Speak to Me</Text>
                            <Text style={styles.subtitulo}>Pink Floyd</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('MusicPlayer')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Us and Them</Text>
                            <Text style={styles.subtitulo}>Pink Floyd</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('MusicPlayer')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Time</Text>
                            <Text style={styles.subtitulo}>Pink Floyd</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('MusicPlayer')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Eclipse</Text>
                            <Text style={styles.subtitulo}>Pink Floyd</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('MusicPlayer')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <Button title='Cerrar' onPress={() => {setModalVisibleMusic(!modalVisibleMusic)}}></Button>
                </View>
              </View>
            </Modal>
            <Modal transparent={true} animationType='slide' visible={modalRap} onRequestClose={() => {
            alert('Modal has been closed');}}>
              <View style={styles.vistaModal}>
                <View style={styles.Modal}>
                    <View style={styles.subViewTitle}>
                        <Text style={styles.subtitle}>The Chronic</Text>
                    </View>
                    <View>
                        <Image style={styles.subalbum} source={require('./img/dr_dre.jpg')} />
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Dre Day</Text>
                            <Text style={styles.subtitulo}>DR.DRE</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerRap')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>High Powered</Text>
                            <Text style={styles.subtitulo}>DR.DRE</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerRap')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>The Roach</Text>
                            <Text style={styles.subtitulo}>DR.DRE</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerRap')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Let Me Ride</Text>
                            <Text style={styles.subtitulo}>DR.DRE</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerRap')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <Button title='Cerrar' onPress={() => {setModalRap(!modalRap)}}></Button>
                </View>
              </View>
            </Modal>
            <Modal transparent={true} animationType='slide' visible={modalPop} onRequestClose={() => {
            alert('Modal has been closed');}}>
              <View style={styles.vistaModal}>
                <View style={styles.Modal}>
                    <View style={styles.subViewTitle}>
                        <Text style={styles.subtitle}>Thriller</Text>
                    </View>
                    <View>
                        <Image style={styles.subalbum} source={require('./img/thriller.png')} />
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Thriller</Text>
                            <Text style={styles.subtitulo}>Michael Jackson</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerPop')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Billie Jean</Text>
                            <Text style={styles.subtitulo}>Michael Jackson</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerPop')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Beat It</Text>
                            <Text style={styles.subtitulo}>Michael Jackson</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerPop')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <View style={styles.cancion}>
                        <View>
                            <Text style={styles.subtitulo}>Human Nature</Text>
                            <Text style={styles.subtitulo}>Michael Jackson</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableHighlight onPress={() => navigation.navigate('PlayerPop')}>
                                <Image style={styles.icon} source={require('./img/play_icon.png')} />
                            </TouchableHighlight>
                            <Image style={styles.icon} source={require('./img/avoid.png')} />
                            <Image style={styles.icon} source={require('./img/heart.png')} />
                        </View>
                    </View>
                    <Button title='Cerrar' onPress={() => {setModalPop(!modalPop)}}></Button>
                </View>
              </View>
            </Modal>
            <View style={styles.viewtitle}>
                <Text style={styles.title}>Music UDB</Text>
            </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>ROCK</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight onPress={() => {setModalVisibleMusic(!modalVisibleMusic)}}>
                  <Image style={styles.album} source={require('./img/dark.png')} />
                </TouchableHighlight>
                <Text style={styles.subtitulo}>The Dark Side of the Moon</Text>
                <Text style={styles.subtitulo}>Pink Floyd</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>RAP</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight onPress={() => {setModalRap(!modalRap)}}>
                  <Image style={styles.album} source={require('./img/dr_dre.jpg')} />
                </TouchableHighlight>
                <Text style={styles.subtitulo}>The Chronic</Text>
                <Text style={styles.subtitulo}>DR.DRE</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>POP</Text>
            <ScrollView>
              <View>
                <TouchableHighlight onPress={() => {setModalPop(!modalPop)}}>
                  <Image style={styles.album} source={require('./img/thriller.png')} />
                </TouchableHighlight>
                <Text style={styles.subtitulo}>Thriller</Text>
                <Text style={styles.subtitulo}>Michael Jackson</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    titulo: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 10,
    },
    contenedor: {
      marginHorizontal: 10,
    },
    album: {
      width: 250,
      height: 300,
      marginRight: 10,
    },
    vistaModal: {
      backgroundColor: '#000000aa',
      flex: 1,
    },
    Modal: {
      backgroundColor: '#fff',
      margin: 50,
      padding: 40,
      borderRadius: 10,
      flex: 1,
    },
    subtitulo: {
      fontWeight: 'bold',
      fontSize: 14,
      justifyContent: 'center',
      textAlign: 'center',
    },
    viewtitle: {
        height:100,
        backgroundColor: 'blue',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subViewTitle: {
        height: 75,
        backgroundColor: 'grey',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subalbum: {
        width: 230,
        height: 200,
        marginRight: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    icons: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    },
    cancion: {
        flexDirection: 'row',
        marginVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-between',
    }
  });

export default Home;