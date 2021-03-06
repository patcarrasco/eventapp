import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {selectVenue} from '../../../store/actions/venueActions'

import { Segment, Header, Grid, Dimmer, Loader, Responsive} from 'semantic-ui-react';
import VenueCard from '../VenueCard/VenueCard';
import VenueInfo from '../VenueInfo/VenueInfo';



class VenueFeed extends PureComponent {
    state={localVenuesSaved: false, showVenueInfo: false, scrollResetPos: null}

    componentDidMount(){
        if (!!localStorage.getItem('localVenues')) {
            this.setState({localVenuesSaved: true})
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showVenue !== this.props.showVenue) {
            this.setState({localVenuesSaved: true})
        }

        if (this.props.showVenue === false) {
            this.setState({showVenueInfo: false})
        }
    }
    
    componentWillUnmount() {
        console.log('unmounting feed')
    }

    localVenueCards() {
        return JSON.parse(localStorage.getItem("localVenues")).map(ven => <VenueCard key={ven.key} {...ven} showVenueInfoHandler={this.showVenueInfoHandler}/>)
    }

    venues = () => {
        if (this.state.localVenuesSaved && this.props.showVenue) {
            return this.localVenueCards()
        }
    }

    showVenueInfoHandler = () => {
        const pos = document.getElementsByClassName('segment content-box')[0].scrollTop
        this.setState({showVenueInfo: true, scrollResetPos: () => document.getElementsByClassName('segment content-box')[0].scrollTop = pos })
    }

    closeVenueInfoHandler = () => {
        this.props._deselectVenue()
        this.setState({showVenueInfo: false}, () => this.state.scrollResetPos())
    } 

    mobileView = () => (
        <Segment className={'content-box'} style={{maxWidth: "100%", maxHeight:'85.5%', minHeight: '30%', overflow:'auto', position:'fixed', borderRadius:'unset', marginLeft:'16px', marginRight:'16px'}}  >
            {
                !this.state.showVenueInfo ?
                <>
                    <Header as='h2'style={{color:"#3c3744"}}>Venues near you</Header>
                    <Grid columns={2}>
                    {this.venues()}
                    </Grid>
                        <Dimmer active={!!!localStorage.getItem("localVenues")}>
                            <Loader indeterminate size='mini'></Loader>
                        </Dimmer>
                </>
                    :
                    <VenueInfo closeVenueInfoHandler={this.closeVenueInfoHandler}/>

            }
        </Segment>
    )

    desktopView = () => (
        <Segment className={'content-box'} style={{maxWidth: "50%", minWidth:"50%", maxHeight:"81.5%", minHeight:"81.5%", overflow:'auto', position:'fixed', borderRadius:'unset', marginLeft:'16px'}}  >
            {
                !this.state.showVenueInfo ?
                <>
                    <Header as='h2'style={{color:"#3c3744"}}>Venues near you</Header>
                    <Grid columns={2} >
                    {this.venues()}
                    </Grid>
                    <Dimmer active={!!!localStorage.getItem("localVenues")}>
                        <Loader indeterminate size='massive'></Loader>
                    </Dimmer>
                </>
                    :
                    <VenueInfo closeVenueInfoHandler={this.closeVenueInfoHandler}/>
            }
        </Segment>
    )

    feed = () => (
        <>
            <Responsive minWidth={1000}>
                {this.desktopView()}
            </Responsive>
            <Responsive maxWidth={999}>
                {this.mobileView()}
            </Responsive>
        </>
    )

    closeVenueFromMapHandler = () => {
        this.props._deselectVenue()
        this.setState({showVenueInfo: false})
    }

    venueFromMap = () => (
        <>
            <Responsive minWidth={1000}>
                <Segment style={{maxWidth: "50%", minWidth:"50%", maxHeight:"81.5%", minHeight:"81.5%", overflow:'auto', position:'fixed', borderRadius:'unset', marginLeft:'16px'}}>
                    <VenueInfo closeVenueInfoHandler={this.closeVenueFromMapHandler} />
                </Segment>
            </Responsive>
            <Responsive maxWidth={999}>
                <Segment style={{maxHeight:"85.5%", minHeight: "85.5%", minWidth:'93%', overflow:'auto', position:'fixed', borderRadius:'unset', marginLeft:'16px', marginRight:'16px'}}>
                    <VenueInfo closeVenueInfoHandler={this.closeVenueFromMapHandler} />
                </Segment>
            </Responsive>
        </>
    )


    render() {
        if (this.props.venueSelected && !this.props.showVenue) {
            console.log('render map venues')
            return this.venueFromMap()
        }
        return this.props.showVenue ? this.feed() : null
    }
}

const mapStateToProps = (state) => ({
    showVenue: state.navbar.showVenue,
    venueSelected: !!state.venue.selectedVenue
})

const mapDispatchToProps = (dispatch) => ({
    _deselectVenue: () => dispatch(selectVenue(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(VenueFeed)