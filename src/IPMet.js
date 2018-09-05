import React from 'react';
import { WebView, View, Dimensions, TouchableHighlight, Text, Linking } from 'react-native'
import { AdMobBanner } from 'expo';

var { height, width } = Dimensions.get('window');

export default class IPMet extends React.Component {
  constructor(){
    super()
    this.state = {
      heightAds: 60
    }    
  }

  erroAds = () => {
    this.setState({ heightAds: 0});
  }

  render() {
    return (
      <View>
        <View style={{height: height-60}}>
            <WebView
            source={{uri: 'https://www.ipmet.unesp.br/mobile2/ipmet/'}}
            style={{marginTop: 20}}
            />
        </View>          
        <View style={{position: 'absolute', height: this.state.heightAds, top: height-60}}>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.ipmet.unesp.br/mobile2/openlayers/ipmet/radar.php')} style={{position: 'absolute', height: 50, width: 50, bottom: 60, left: 100}}>
            <Text></Text>
          </TouchableHighlight>         
            <AdMobBanner            
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-8859501611942566/5828561238" // Test ID, Replace with your-admob-unit-id
            onDidFailToReceiveAdWithError={this.erroAds} />
        </View>  
      </View>  
    );
  }
};