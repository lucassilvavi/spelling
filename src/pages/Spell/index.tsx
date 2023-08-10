import React, {useState} from 'react';
import {View, TextInput, Modal, StyleSheet} from 'react-native';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import * as Speech from 'expo-speech';
import {useNavigation} from '@react-navigation/native';

const Spell: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isFinishModalVisible, setIsFinishModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);

    const navigation = useNavigation();

    const words = ['Palavra', 'Texto', 'Sigla', 'Contexto', 'Letra']; // Adicione as palavras que deseja soletrar

    const handleSpellCheck = () => {
        // Lógica para verificar se a palavra está correta
        // Defina uma variável para determinar se a palavra está correta
        setIsModalVisible(true); // Se a palavra estiver correta, exiba o modal
    };

    const handleExitQuiz = () => {
        navigation.navigate('Modules');
    }

    const handleNextWord = () => {
        setInputText('');
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleSpeech = () => {
        if (currentStep <= 4) {
            Speech.speak(words[currentStep]);
        }
    };

    const handleAnswer = () => {
        const currentWord = words[currentStep].toLowerCase();
        const userAnswer = inputText.toLowerCase();
        if (userAnswer === currentWord) {
            setIsModalVisible(true); // Modal de acerto
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
        } else {
            setIsModalVisible(true); // Modal de erro
            setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
        }
    };

    const hideModal = () => {
        setIsModalVisible(false);
        if (currentStep < 4) {
            handleNextWord();
        } else {
            setIsFinishModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            {/* Step */}
            <View style={styles.stepContainer}>
                {words.map((word, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepItem,
                            currentStep === index && styles.currentStep,
                        ]}
                    />
                ))}
            </View>
            <Button
                style={styles.listenButton}
                mode="contained"
                onPress={handleSpeech}
                disabled={currentStep > 4}
            >
                Ouvir
            </Button>
            <TextInput
                style={styles.input}
                placeholder="Digite a palavra"
                value={inputText}
                onChangeText={setInputText}
                editable={currentStep <= 4}
            />
            <Button
                style={styles.nextButton}
                mode="contained"
                onPress={() => {
                    handleAnswer();
                }}
                disabled={currentStep > 4 || inputText === ''}
            >
                Enviar
            </Button>
            <Portal>
                <Dialog visible={isModalVisible} onDismiss={hideModal}>
                    <Dialog.Title>
                        {inputText.toLowerCase() === words[currentStep].toLowerCase()
                            ? 'Parabéns, você acertou!'
                            : 'Que pena, você errou!'}
                    </Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Significado: ...</Paragraph>
                        <Paragraph>Contexto: ...</Paragraph>
                        <Paragraph>Classe gramatical: ...</Paragraph>
                        <Paragraph>Observação: ...</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideModal}>Fechar</Button>
                    </Dialog.Actions>
                </Dialog>
                <Dialog visible={isFinishModalVisible} onDismiss={() => setIsFinishModalVisible(false)}>
                    <Dialog.Title>Resultados</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Acertos: {correctAnswers}</Paragraph>
                        <Paragraph>Erros: {wrongAnswers}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleExitQuiz}>Sair</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    stepItem: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: 5,
    },
    currentStep: {
        backgroundColor: '#000',
    },
    listenButton: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        marginBottom: 10,
    },
    nextButton: {
        marginBottom: 20,
    },
});

export default Spell;
