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
            ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
            source={{uri: 'https://www.ipmet.unesp.br/mobile2/ipmet/'}}
            style={{marginTop: 20}}
            />
        </View>
        <TouchableHighlight underlayColor="#00000001" onPress={() => Linking.openURL('https://www.ipmet.unesp.br/mobile2/openlayers/ipmet/radar.php')} 
          style={{flex: 1, position: 'absolute', height: 55, width: 70, marginTop: height-116, marginLeft: width-283}}>
            <Text></Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#00000001" onPress={() => WebViewRef.reload()} 
          style={{flex: 1, position: 'absolute', height: 55, width: 88, marginTop: height-116,  marginLeft: width-88}}>
            <Text></Text>
          </TouchableHighlight>          
        <View style={{height: this.state.heightAds}}>          
          <AdMobBanner            
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-8859501611942566/5828561238" // Test ID, Replace with your-admob-unit-id
          onDidFailToReceiveAdWithError={this.erroAds} />
        </View>  
      </View>  
    );
  }
};