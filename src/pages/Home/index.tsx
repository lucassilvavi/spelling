import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {

    const navigation = useNavigation();
    function navigateToModules() {
        navigation.navigate('Modules');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}  onPress={() => navigateToModules()}>Soletrar</Text>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <View style={styles.icon}>
                    {/* Coloque aqui o ícone de estrela */}
                    <Text>Favoritas</Text>
                </View>
                <View style={styles.icon}>
                    {/* Coloque aqui o ícone em forma de X */}
                    <Text>Erros</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        alignItems: 'center',
    },
});

export default Home;