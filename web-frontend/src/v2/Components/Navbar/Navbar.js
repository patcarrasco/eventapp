import React from 'react'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import { setLoadStatus, resetSearch} from '../../../store/actions/eventActions';
import {toggleFeed, toggleVenue} from '../../../store/actions/navbarActions'
import {selectVenue} from '../../../store/actions/venueActions'

import { Header, Menu, Button, Responsive, Segment } from 'semantic-ui-react';

import EventSearch from '../EventSearch/EventSearch';

function NavBar(props) {
    let showFeed = props.showFeed
    let showVenue = props.showVenue
    const handleLogout = () => {
        localStorage.clear()
        props.history.push('/')
    }
    const handleVenueClick = () => {
        props._toggleVenue(!showVenue)
        props._clearVenue()
    }

    const handleFeedClick = () => {
        props._clearVenue()
        props._toggleFeed()
    }

    return (
            <>
                <Responsive minWidth={1000}>
                    <Segment style={{backgroundColor:'transparent', boxShadow:'none', borderStyle:'none'}}>
                        < Menu fluid style = {{backgroundColor: '#feffff', borderRadius:'unset'}} >
                            <Menu.Item style={{justifyContent:'flex-start'}}>
                                < Header as='h1'style = {{fontFamily: "Roboto, sans-serif",fontWeight: "300",color: "#3c3744",}} > 
                                    wanago 
                                </Header>
                            </Menu.Item>
                            <Menu.Item> 
                                <div style={{display:'flex', alignItems:'center', justifyContent:"center", marginLeft:'1em'}}>
                                    <Button circular icon = "user" style={{color: false ? '#feffff' : `#3c3744`, backgroundColor: false ? '#3d52d5':'#B4C5E4'}} />
                                    <Button circular icon = "map pin" style={{color: showVenue ? '#feffff' : `#3c3744`, backgroundColor: showVenue ? '#3d52d5':'#B4C5E4'}} onClick={handleVenueClick} />
                                    <Button circular icon = "feed" style={{color: showFeed ? '#feffff' : `#3c3744`, backgroundColor: showFeed ? '#3d52d5':'#B4C5E4'}} onClick={handleFeedClick}/>
                                </div>
                            </Menu.Item>
                            <Menu.Menu >
                                {/* POSSIBLE ADDITIONAL SEARCH TERM, MAYBE BY EVENT TYPE??? */}
                                <EventSearch />
                            </Menu.Menu>
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <Button onClick={handleLogout} style={{backgroundColor:"#B4C5E4", color:"3D52D5"}}>LOGOUT</Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Segment>
                </Responsive>
                <Responsive maxWidth={999}>
                    <Segment style={{backgroundColor:'transparent', boxShadow:'none', borderStyle:'none'}}>
                        < Menu fluid style = {{backgroundColor: '#feffff', borderRadius:'unset'}} >
                            <Menu.Item style={{justifyContent:'flex-start'}}>
                                < Header as='h1'style = {{fontFamily: "Roboto, sans-serif",fontWeight: "300",color: "#3c3744",}} > 
                                    wanago 
                                </Header>
                            </Menu.Item>
                            <Menu.Item> 
                                <div style={{display:'flex', alignItems:'center', justifyContent:"center", marginLeft:'1em'}}>
                                    <Button circular icon = "user" style={{color: false ? '#feffff' : `#3c3744`, backgroundColor: false ? '#3d52d5':'#B4C5E4'}} />
                                    <Button circular icon = "map pin" style={{color: showVenue ? '#feffff' : `#3c3744`, backgroundColor: showVenue ? '#3d52d5':'#B4C5E4'}} onClick={handleVenueClick} />
                                    <Button circular icon = "feed" style={{color: showFeed ? '#feffff' : `#3c3744`, backgroundColor: showFeed ? '#3d52d5':'#B4C5E4'}} onClick={handleFeedClick}/>
                                    <Button circular icon = 'power off' onClick={handleLogout} style={{backgroundColor:"#B4C5E4", color:"3D52D5"}} />
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Segment>
                </Responsive>
            </>
    )
}

const mapStateToProps = state => ({
    showFeed: state.navbar.showFeed,
    showVenue: state.navbar.showVenue,
    eventSelected: !!state.events.selectedEvent,
    eventsPresent: !!state.events.eventsByLocation._embedded,
})

const mapDispatchToProps = (dispatch) => ({
    _setLoadStatus: (bool) => dispatch(setLoadStatus(bool)), 
    _resetSearch: () => dispatch(resetSearch()),
    _toggleFeed: () => dispatch(toggleFeed()),
    _toggleVenue: (bool) => dispatch(toggleVenue(bool)),
    _clearVenue: () => dispatch(selectVenue(false))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))