import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Image,ImageBackground } from 'react-native';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import { Container, Content, Header, Body, Icon } from 'native-base';
import homescreen from './Components/homescreen';
import men from './Components/men';
import kids from './Components/kids';
import women from './Components/women';
import login from './Components/login';


export default class App extends React.Component {
  render() {
    return ( 
            /*<ImageBackground source={require('./assets/females_outfits.jpeg')} style={styles.backgroundImage}>*/
              <MyApp />
            /*</ImageBackground>*/
          );
        }
      }

const CustomeDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height : 200 , backgroundColor:'black' }}>
      <Body>
        <Image source={require('./assets/stuffwearables_logo_white.png')} style={styles.drawerImage} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const MyApp = DrawerNavigator ({
  Home : { screen : homescreen },
  Men : { screen : men },
  Women : { screen : women},
  Kids : { screen : kids },
},
{
  initialRouteName: 'Home',
  contentComponent:CustomeDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerImage: {
    height:75,
    width:130
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
}
});


