import React, {Component} from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

class Home extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <Text>
                            Home
                        </Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Home