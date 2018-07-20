import React, { Component } from 'react';
import {App, Header, Body, Footer, Logo, SplitContainer, UserLinks, LinkItem, HeaderContent} from './styles';
import {Link} from 'react-router-dom';

export default class Layout extends Component {
    render() {
        const {children} = this.props;
        return (
            <App>
                <Header>
                    <SplitContainer>
                      <Logo>Kirei</Logo>
                        <HeaderContent>
                        <UserLinks>
                          <LinkItem><Link to={'/register'}>Register?</Link></LinkItem>
                        </UserLinks>
                      </HeaderContent>
                    </SplitContainer>
                </Header>
                <Body>
                  {children}
                </Body>
                <Footer>
                    Footer
                </Footer>
            </App>
        );
    }
}
