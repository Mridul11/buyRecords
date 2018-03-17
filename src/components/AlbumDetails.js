import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail =(props) => {
  // console.log(props)
  return(
          <Card>
            <CardSection>
              <View style={styles.thumbImgViewStyle}>
                  <Image
                  style = {styles.thumbnailStyle}
                  source={{uri : props.album.thumbnail_image}} />
              </View>
              <View style={styles.headerContentStyle}>
                <Text style={{fontSize:15, marginLeft:10, marginBottom:5}}>{props.album.title}</Text>
                <Text style={{fontSize:10, marginLeft:10, marginBottom:5}}>{props.album.artist}</Text>
              </View>
            </CardSection>

            <CardSection>
              <Image
              style ={styles.imageStyle}
              source = {{uri : props.album.image}}
              />
            </CardSection>

            <CardSection>
              <Button onPress={()=>Linking.openURL(props.album.url)}>
                Buy Now...
              </Button>
            </CardSection>

          </Card>
      )
};

styles = {
  headerContentStyle : {
    height : 30,
    width : 200,
    flexDirection : 'column',
    justifyContent : 'space-around',
  },
  thumbnailStyle : {
    height : 50,
    width : 50
  },
  thumbImgViewStyle :{
    flexDirection: 'row',
    height : 50,
    width : 50,
    flexDirection : 'column',
    justifyContent : 'space-around'
  },
  imageStyle :{
  flex : 1,
  height : 300,
  width : 350,
  alignSelf: 'stretch',
  marginLeft: 4,
  marginRight : 3
  }
}

export default AlbumDetail;
