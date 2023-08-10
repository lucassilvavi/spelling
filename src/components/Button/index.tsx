import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';


interface ButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}

const GButton: React.FC<ButtonProps> = ({ label, onPress, disabled }) => {
    return (
        <PaperButton
            style={styles.button}
            mode="contained"
            onPress={onPress}
            disabled={disabled}
        >
            {label}
        </PaperButton>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
});

export default GButton;
