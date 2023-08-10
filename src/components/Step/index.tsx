import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StepProps {
    totalSteps: number;
    currentStep: number;
}

const GStep: React.FC<StepProps> = ({ totalSteps, currentStep }) => {
    return (
        <View style={styles.stepContainer}>
            {[...Array(totalSteps)].map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.stepItem,
                        currentStep === index && styles.currentStep,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default GStep;
