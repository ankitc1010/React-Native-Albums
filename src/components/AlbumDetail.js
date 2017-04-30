import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = (props) => {
    const { textStyle, thumbnailImageStyle, spaceAround, imageStyle } = styles;
    return (
        <Card>
            <CardSection>
              <View>
                <Image style={thumbnailImageStyle} source={{ uri: props.album.thumbnail_image }} />
              </View>
              <View style={spaceAround}>
                <Text style={textStyle}>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
              </View>

            </CardSection>
            <CardSection>
              <Image style={imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
            <CardSection>
              <Button onPress={() => Linking.openURL(props.album.url)}>
                Buy Now
              </Button>
            </CardSection>
        </Card>
    );
};
const styles = {
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    thumbnailImageStyle: {
      width: 50,
      height: 50,
      borderRadius: 30,
      margin: 5
    },
    spaceAround: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: 5
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};
export default AlbumDetail;
