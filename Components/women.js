import React,{ Component } from 'react';
import { StyleSheet, Text, View, AppRegistry,Image, ListView, ActivityIndicator, Alert } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Card, CardItem, Body } from 'native-base';
import Product from './product';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    cover: {
        flex: 1,
        width: null,
        height: null
    }
});

export default class women extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    getWomenProductsAsync() {
        return fetch('http://www.stuffwearables.com/api/rest/products?category_id=15',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading: false,
                women: ds.cloneWithRows(responseJson),
            });
        })
        .catch((error) => {
            console.error(error);
        });

    }

    componentDidMount(){
        this.getWomenProductsAsync();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return(
        <Container>
            <Header>
                <Left>
                    <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                </Left>
                <Right>
                </Right>
            </Header>
           
            <Content>
                <ListView
                    dataSource={this.state.women}
                    renderRow={(rowData) => 
                    <Card >
                        <CardItem>
                            <Body style={styles.container}>
                                <Image
                                style={{ width: 200, height: 250}}
                                source={{uri: rowData.image_url}}
                                />
                                <Text>{rowData.name}</Text>
                                {/* <Text>{rowData.short_description}</Text> */}
                                <Text>{rowData.regular_price_without_tax}</Text>
                            </Body>
                        </CardItem>
                    </Card> 
                    } 
                    />
            </Content>
        </Container>
      );
    }
  }
