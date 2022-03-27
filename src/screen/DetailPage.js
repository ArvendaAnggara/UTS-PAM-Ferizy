import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList,ScrollView,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Jadwal } from '../database/Data'; 

const Detail = ({ route, navigation }) => {
    const data = route.params.text;
    const scheduleList = Jadwal.filter(item =>
        item.pelabuhan_awal === data.departure &&
        item.pelabuhan_akhir === data.arrival &&
        item.kelas_layanan === data.service &&
        item.tanggal_keberangkatan === data.date &&
        item.jam_keberangkatan === data.time);

    const [listData, setlistData] = useState(data);
    
    const onSubmit = () => {
        navigation.navigate('Confirm', {listData});
    } 
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#00660e" />
            <ScrollView style={styles.scrollView}>
            <SafeAreaView style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Ferizy</Text>
                    <Text style={styles.intitle}>Rincian Tiket</Text>
                    <FlatList
                        data={scheduleList}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                            <TouchableOpacity style={styles.detail_search}>
                                <View style={styles.detail_style}>
                                    <Text style={styles.text}>
                                        {item.pelabuhan_awal}
                                    </Text>
                                    <Text style={styles.text}>
                                        <Icon name="arrow-right" size={20} color='#000' />
                                    </Text>
                                    <Text style={styles.text}>
                                        {item.pelabuhan_akhir}
                                    </Text>
                                </View>
                                    <Text style={styles.intitle}>Jadwal Masuk Pelabuhan</Text>
                                    <Text style={styles.detailInfo}>
                                        {item.tanggal_keberangkatan}
                                    </Text>
                                    <Text style={styles.detailInfo}>
                                         {item.jam_keberangkatan}
                                    </Text>
                                    <Text style={styles.intitle}>Layanan</Text>
                                    <Text style={styles.detailInfo}>
                                    {item.kelas_layanan}
                                    </Text>
                                    <View style={styles.detail_style}>
                                        <Text style={styles.text}>
                                            Dewasa x 1
                                        </Text>
                                        <Text style={styles.text}>
                                            Rp.65.000,00
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.Jadwal_id}
                        >
                    </FlatList>
                    <View style={styles.result_style}>
                        <Text style={styles.textResult}>
                            Total
                        </Text>
                        <Text style={styles.textResult}>
                            Rp.65.000
                        </Text>
                    </View>
                    <View style={styles.button_style}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress= {() => navigation.navigate('Home')}>
                            <Text style={styles.backbuttonText}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress= {onSubmit}>
                            <Text style={styles.confirmbuttonText}>Lanjutkan</Text>
                        </TouchableOpacity>
                    </View>
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
            
            </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        color: '#533E85',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    intitle: {
        fontWeight: 'bold',
        padding: 10
    },
    search: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
    card: {
        marginHorizontal: 30,
    },
    detail_search: {
        backgroundColor: '#E5E5E5',
        color: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    result_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#000",
        fontWeight: 'bold'
    },
    button_style: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planeIcon: {
        marginRight: 10,
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
    textResult: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    detailInfo: {
        paddingBottom: 10
    },
    backButton: {
        borderWidth: 3,
        backgroundColor: '#fff',
        borderColor: '#533E85',
        color: '#533E85',
        borderRadius: 7,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    confirmButton: {
        borderWidth: 1,
        backgroundColor: '#533E85',
        borderColor: '#533E85',
        color: '#fff',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    backbuttonText: {
        color: '#533E85',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    confirmbuttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
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
});

export default Detail;