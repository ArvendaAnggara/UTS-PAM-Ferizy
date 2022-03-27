import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, 
        View, ScrollView, TextInput, 
        TouchableOpacity, StatusBar,
        KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Jadwal } from '../database/Data';
const Home = ({navigation}) => {  
    const [text, inputText] = useState({ 
        departure: '',
        arrival: '',
        service: '',
        date: '',
        time: '',
    });

    const getInput = (userInput) => {
        return (val) => {
            inputText({ ...text, [userInput]: val });
            console.log(text);
        }
    }
  
    const onSubmit = () => {
        navigation.navigate('Detail', { text })
    } 
  
    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#e6e6e6" />
        <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.main}>
                    <Text style={styles.head}>Ferizy</Text>
                    <Text style={styles.tittle}>Pelabuhan Awal</Text>
                    <View style={styles.search}>
                    <Icon name="ship" size={20} color='#919191'/>
                    
                    <TextInput
                    style={styles.input}
                    placeholder="Pilih Pelabuhan Awal"
                    onChangeText={getInput('departure')}
                    value={text.departure}
                    /> 
                    </View>   
                    <Text style={styles.tittle}>Pelabuhan Tujuan</Text>
                    <View style={styles.search}>
                        <Icon name="ship" size={20} color='#919191' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Pelabuhan Tujuan"
                        onChangeText={getInput('arrival')}
                        value={text.arrival}
                        />
                    </View>  
                    <Text style={styles.tittle}>Kelas Layanan</Text>
                    <View style={styles.search}>
                        <Icon name="couch" size={20} color='#919191' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Layanan"
                        onChangeText={getInput('service')}
                        value={text.service}
                        />
                    </View>             
                    <Text style={styles.tittle}>Tanggal Keberangkatan</Text>
                    <View style={styles.search}>
                        <Icon name="calendar-alt" size={20} color='#919191' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Tanggal Keberangkatan"
                        onChangeText={getInput('date')}
                        value={text.date}
                        />
                    </View>
                    <Text style={styles.tittle}>Jam Keberangkatan</Text>
                    <View style={styles.search}>
                        <Icon name="clock" size={20} color='#919191' />
                        <TextInput
                        style={styles.input}
                        placeholder="Pilih Jam Keberangkatan"
                        onChangeText={getInput('time')}
                        value={text.time}
                        />
                    </View>
                    <Text></Text>
                    <View style={styles.inputPerson}>
                        <View style={styles.detail_style}>
                            <Text style={styles.textPerson}>
                                Dewasa
                            </Text>
                            <Text style={styles.textPerson}>
                                1 Orang
                            </Text>
                        </View>
                    </View>            
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>
                        <Text style={styles.buttonText}><Icon style={styles.searchicon} name="search" size={15} color='#fffs'/>Cari</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomBar}>
                    <View style={styles.navbar}>
                        <TouchableOpacity
                            style={styles.buttonbar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="home" size={25} color='#533E85'/>
                            <Text style={styles.buttonbarText}>Beranda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="book" size={25} color='#533E85'/>
                            <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="ban" size={25} color='#533E85'/>
                            <Text style={styles.buttonbarText}>Pembatalan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="grip-horizontal" size={25} color='#533E85'/>
                            <Text style={styles.buttonbarText}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#E5E5E5',
    },
    head: {
        color: '#533E85',
        fontSize: 55,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textAlign: 'center',
        marginTop: 15,
        paddingBottom: 15    
    },
    main: {
        margin: 20,  
        marginTop: 31,  
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 15,
        shadowRadius: 9,
        borderRadius:14,
    },
    search: {
        marginLeft:15,    
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
        paddingBottom: 15
    },
    tittle: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#533E85',
    },
    input: {
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#e5e5e5',
        marginHorizontal: 10,
        paddingHorizontal: 5,
        height: 40,
        flex: 1,
    },
    inputPerson: {
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#E5E5E5',
        marginHorizontal: 1,
        paddingHorizontal: 10,
        padding:1,
        flex: 1,
        marginBottom: 10,
    },
    textPerson: {
        textAlign: 'center',
        marginTop: 20,
    },
    searchicon: {
        marginRight:90,
    },
    button: {
        backgroundColor: '#eb7900',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft:10,
        textAlign:'center',
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#533E85',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop:10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderRadius:5,
    },
});

export default Home;