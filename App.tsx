import React from 'react';
import NavigationContainer from './src/navigators/NavigationContainer';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Feather as Icon } from '@expo/vector-icons';

export default function App() {
    return (
        <PaperProvider
            theme={theme}
            settings={{
                icon: props => <Icon {...props} />,
            }}
        >
            <NavigationContainer />
        </PaperProvider>
    );
}

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fonts),
    colors: {
        ...DefaultTheme.colors,
        primary: '#39bfb1',
        accent: '#FFFFFF',
        vermelho: '#FF0000'
    },
};

const fonts: any = {
    default: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    }
}
