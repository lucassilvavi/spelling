import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const modulesData = [
    { id: 1, title: 'Module 1', content: 'Content for Module 1' },
    { id: 2, title: 'Module 2', content: 'Content for Module 2' },
    { id: 3, title: 'Module 3', content: 'Content for Module 3' },
    // Add more modules here
];
export default function Modules() {
    const navigation = useNavigation();

    function navigateToSpell() {
        navigation.navigate('Spell');
    }

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.title}>Modules</Text>
                {modulesData.map((module) => (
                    <List.Accordion
                        key={module.id}
                        title={module.title}
                        id={module.id}
                        onPress={navigateToSpell}
                        left={(props) => <List.Icon {...props} icon="folder" />
                    }
                    >
                        <List.Item title={module.content} />
                    </List.Accordion>
                ))}
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
