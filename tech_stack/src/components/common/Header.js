import React from 'react';
import { Text, View } from 'react-native';

const Header = ({title}) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    )
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#f8f8f8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
}

export { Header };
