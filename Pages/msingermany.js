import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text} from 'react-native';

export default class MSinGermany extends Component {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return <WebView source={{ uri: 'https://msingermany.co.in' }} />;   
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*export default class MSinGermany extends Component {
  render() {
    return <WebView source={{ uri: 'https://msingermany.co.in' }} />;
  }
}*/

/*import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default MSinGermany = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  const source = Platform.OS === 'ios' ? require('./assets/sample.html')
    : { uri: 'file:///android_asset/sample.html' };

  const javascript = `
  document.body.style.backgroundColor = 'orange';
  window.alert('This is javascript');
`;

  return <>
    {
      !isLoaded ?
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color='#ff8300'
        /> : null
    }
    <WebView
      source={{
        uri: 'https://google.com',
        headers: { 'key': 'value' }
      }}
      // source={{ html: '<h1>This is a statsampleic HTML source!</h1>' }}
      // source={source}
      onError={(event) =>
        alert(`Webview error: ${event.nativeEvent.description}`)
      }
      // injectedJavaScript={javascript}
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }}
      onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      onLoadEnd={() => setLoaded(true)}
    />
  </>
}*/
/*import React, { Component } from "react";
 
import { WebView } from "react-native-webview";

export default class MSinGermany extends Component {
  constructor(props) {
    super(props);
    console.log(props.route.params);
 
    this.state = {
      url: props.route.params.url
    };
  }
 
  render() {
    return <WebView source={{ uri: 'https://msingermany.co.in'}} />;   //<---Pass url to webview
  }
}*/

/*import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default MSingermany = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  const source = Platform.OS === 'ios' ? require('./assets/sample.html')
    : { uri: 'file:///android_asset/sample.html' };

  const javascript = `
  document.body.style.backgroundColor = 'orange';
  window.alert('This is javascript');
`;

  return <>
    {
      !isLoaded ?
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color='#ff8300'
        /> : null
    }
    <WebView
      source={{
        uri: 'https://google.com',
        headers: { 'key': 'value' }
      }}
      // source={{ html: '<h1>This is a statsampleic HTML source!</h1>' }}
      // source={source}
      onError={(event) =>
        alert(`Webview error: ${event.nativeEvent.description}`)
      }
      // injectedJavaScript={javascript}
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }}
      onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      onLoadEnd={() => setLoaded(true)}
    />
  </>
}*/