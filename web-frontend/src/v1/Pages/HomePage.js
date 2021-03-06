import React, { PureComponent } from 'react'
import { Segment, Menu, Grid, Sidebar, Header, Icon, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'


import styles from '../assets/stylesheets/homepage.css'
import Explore from '../Components/Explore/Explore';

class HomePage extends PureComponent {
    state = {activeItem: 'content', sidebar: false}


    handleItemClick = (e, {name}) => {
        const types = ['create', 'search', 'ticket', 'friends', 'chats', 'settings']
        if (types.includes(name)) {
            this.setState({activeItem: name})    
        } else {
            this.setState({activeItem: 'content'})
        }
    }

    handleShow = () => this.setState({sidebar: !this.state.sidebar})

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    render(){
        
        const {activeItem, sidebar} = this.state
        console.log(activeItem)
        return (
            <div className={styles.headerImg}>
                <Segment inverted > 
                    <Menu fluid inverted className='fixed' size='huge'>
                        <Menu.Item onClick={this.handleShow}>
                            <Icon name='bars'/>
                            Event App
                        </Menu.Item>
                        <Menu.Menu position='right' onClick={this.handleLogout}>
                            < Button icon = 'power off' color='black'/>
                        </Menu.Menu>
                    </Menu>
                </Segment>

                <Grid columns={1} inverted>
                        <Grid.Column color='black'>
                            <Sidebar.Pushable as={Segment} inverted color='green'>
                                <Sidebar
                                    as={Menu}
                                    animation='slide out'
                                    icon='labeled'
                                    inverted
                                    vertical
                                    visible={sidebar}
                                    width='thin'
                                    size='massive'
                                    direction='left'
                                > 
                                    < Menu.Item header name='home' active={'home' === activeItem} onClick={this.handleItemClick}>
                                        <Icon name="connectdevelop"/>
                                        Home
                                    </ Menu.Item >
                                    < Menu.Item name='create' active={'create' === activeItem} onClick={this.handleItemClick} > 
                                        <Icon name='idea' />
                                        create event
                                    </ Menu.Item >
                                    < Menu.Item name='search' active={'search' === activeItem} onClick={this.handleItemClick} > 
                                        <Icon name='search' />
                                        explore
                                    </ Menu.Item >
                                    < Menu.Item name='ticket' active={'ticket' === activeItem} onClick={this.handleItemClick} > 
                                        <Icon name='ticket' />
                                        tickets
                                    </ Menu.Item >
                                    < Menu.Item name='friends' active={'friends' === activeItem} onClick={this.handleItemClick} > 
                                        <Icon name='users'/>
                                        friends
                                    </ Menu.Item>
                                    < Menu.Item name='chats' active={'chats' === activeItem} onClick={this.handleItemClick} >
                                        <Icon name='chat' />
                                        chats
                                    </ Menu.Item>
                                        < Menu.Item name='settings' active={'settings' === activeItem} onClick={this.handleItemClick} > 
                                        <Icon name='setting' />
                                        settings
                                    </ Menu.Item >                                
                                </Sidebar>

                                <Sidebar
                                    as={Menu}
                                    direction='right'
                                    vertical
                                    inverted
                                    visible={sidebar}
                                >
                                    <Menu.Item header>
                                        stuff
                                    </Menu.Item>
                                </Sidebar>

                                <Sidebar.Pusher>
                                    <Segment inverted >
                                        {activeItem === 'ticket' && <Header>ticket</Header>}
                                        {activeItem === 'search' && <Explore />}
                                        {activeItem === 'friends' && <Header>friends</Header>}
                                        {activeItem === 'chats' && <Header>chats</Header>}
                                        {activeItem === 'settings' && <Header>settings</Header>}
                                    </Segment>
                                </Sidebar.Pusher>
                            </Sidebar.Pushable>
                        </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default withRouter(HomePage)