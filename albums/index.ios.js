/**
 * @format
 */
import React from 'react';
import {AppRegistry, View} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create the component
const App = () => (
    <View>
        <Header title="Albums" />
        <AlbumList />
    </View>
);

// Render the component
AppRegistry.registerComponent('albums', () => App);
