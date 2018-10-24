// import React, {Component} from 'react';
// import { StyleSheet, Text, View, AppRegistry,Image, TextInput, Button, ListView, ActivityIndicator, Alert } from 'react-native';
// import { Icon, Button, Container, Header, Content, Left, Right, Card, CardItem, Body } from 'native-base';

// export default class login extends Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             email: '',
//             password: ''
//         }
//     }

//     validateUser(email, password){
//         fetch('http://10.0.2.2/magento/mobile/login.php', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: this.state.email,
//                 password: this.state.password,
//             }),
//         })
//         .then((response) => { 
//             console.log(response);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }

//     render(){
//         return(
//             <Container>
//             <Header>
//                 <Left>
//                     <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
//                 </Left>
//             </Header>
           
//             <View>
//                 <Text>Stuff Wearables</Text>
//                 <Text>Login</Text>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Email"
//                     onChangeText={(text) => this.setState({email : text})}
//                     />
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Password"
//                     onChangeText={(text) => this.setState({password : text})}
//                     />

//                 <Button
//                     onPress={() => { 
//                         this.validateUser();
//                         console.log(this.state.email);
//                         console.log(this.state.password);
//                     }}
//                     title="Login"
//                     color="#841584"
//                 />
//             </View>
//             </Container>
//         );
//     }
// }
