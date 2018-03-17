import React, {Component} from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

export default class AlbumList extends Component{
  state = {albums : []};

  componentDidMount(){
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
         .then(res => this.setState({ albums : res.data }));
  }

  renderAlbum(){
      return this.state.albums.map((album,i) =>
                <AlbumDetail key={i} album={album}/>
              );
  }

  render(){
    console.log(this.state)
            return(
                    <ScrollView>
                      {this.renderAlbum()}
                    </ScrollView>
            )};
}
