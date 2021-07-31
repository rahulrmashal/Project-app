/*import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://msingermany.co.in/' }} />;
  }
}*/

/*import React from 'react';
import { Text, ViewComponent } from 'react-native';

//import { Container } from './styles/wrapper.js'
//import { Title, ContentText } from './styles/text.js'
//import { CustomImage } from './styles/image.js'
//import { RoundedButton } from './styles/buttons.js'

//const source = Platform.OS === 'ios' ? 'Futura' : 'serif';

export default App = ({ navigation }) =>
  <Container >
    <Image
      source={require('./assets/msingermany.png')}
    />
    <Title fontFamily={source}>https://msingermany.co.in/</Title>
    <Button
      title='Open Webview'
      onPress={() => navigation.navigate('MSingermany')} />
  </Container>*/
/*import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://msingermany.co.in/' }} 
    
    />;
  }
}*/

/*import * as React from "react";
import { Text, View, Button } from "react-native";



import Home from "./Home";
import MSinGermany from "./msingermany";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "#3e78f4"
          },
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTintColor: "#FFFFFF"
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
       
        <Stack.Screen
          name="MSingermany"
          component={MSinGermany}
          options={{ title: "React-native WebView" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;*/

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

export default function App {
  return (
    <View style={styles.container}>
      <View  style={styles.homecontainer}> 
      
      <View style={styles.titles}>
        <Text style={styles.title}>MS in Germany</Text>
        <Text style={styles.subtitle}>Desiriour of healping</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/msingermany.png')}
      />
      <Pressable
        title="Home"
        onPress={() => navigation.navigate('MSinGermany')}
      />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homecontainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',

  },
  titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
  }, 
  title: {
      fontSize: 40,
      fontWeight: '500',
  },
  subtitle: {
      fontSize: 16,
      color: '#5c5e62'
  },
  tinyLog: {
    /*resizeMode: 'stretch',
            height: '100%',
            width: '200',
            display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    height: 400,
    width: 500,  
  }



});*/


/*import React from 'react';

/*import { Container } from './styles/wrapper'
import { Title, ContentText } from './styles/text'
import { CustomImage } from './styles/image'
import { RoundedButton } from './styles/buttons'

const source = Platform.OS === 'ios' ? 'Futura' : 'serif';

export default App = ({ navigation }) =>
  <view style={styles.container} >
    <Image
    style={styles.image}
      source={require('./assets/msingermany.png')}
    />
    <Title style={styles.title}>Cheetah Coding</Title>
    <Button
      title='Open Webview'
      onPress={() => navigation.navigate('MSinGermany')} />
  </view>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
  height: 180,
  },

  title: {

  }

});*/




/*import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import MSinGermany from './Pages/msingermany';
import Homepage from './Pages/Homepage';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  Homepage: { screen: Homepage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    MSinGermany: { screen: MSinGermany }, 
  },
  {
    initialRouteName: 'Homepage',
  }
);
export default class App extends Component {
  render() {
  return <App />;
  }
  }*/

  import React from 'react';  
import { View, Text, Button } from 'react-native';  
import { createStackNavigator, createAppContainer } from '@react-navigation/native';  
  
class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.navigate('Profile')}  
                />  
            </View>  
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
            </View>  
    );  
    }  
}  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  