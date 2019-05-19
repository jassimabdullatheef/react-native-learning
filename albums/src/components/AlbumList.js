import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        const url = 'http://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url).then(res => this.setState({albums: res.data}))
    }

    renderAlbums() {
        return this.state.albums.map((album, key) =>
            <AlbumDetails key={key} album={album} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
};

export default AlbumList;
