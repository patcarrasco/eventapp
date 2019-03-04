import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import { loadEventDetails } from '../../store/actions/eventActions';

const styles = [
    // {width: '10vh', height:'10%'},
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
    }
    ]
    
const size = {width: '98%', height:'98%'}

class MapContainer extends PureComponent {
    state = {
        lat: 40.698330,
        lng: -74.053250
    }

    markers() {
        const rawEvents = this.props.events
        // debugger
        console.log(rawEvents)
        // let valid = rawEvents._embedded || false
        if (rawEvents && rawEvents.page.totalElements > 0) {
            console.log('found events!')
            const events = rawEvents._embedded.events.filter(e => !!e._embedded)
            const marks = events.map((e,idx) => {
                const event = e
                if (event._embedded.venues[0].location) {
                    const {name, _embedded} = e
                    const venueInfo = _embedded.venues[0]
                    const venue = venueInfo.name
                    const lat = venueInfo.location.latitude
                    const lng = venueInfo.location.longitude
                    return (
                        <Marker
                            key={idx}
                            title={name}
                            name={venue}
                            position={
                                {
                                    lat: lat,
                                    lng: lng,
                                }
                            } 
                            onClick={(free) => this.selectMarkerHandler({event, free})}
                        />
                    ) 
                } else {
                    return null
                }
            })
            return marks
        }
        return null
    }

    selectMarkerHandler = (e) => {
        
        this.props.loadEventDetails(e)
      
        // if (this.props.selectedEvent.free === e.free) {
        //     this.props.loadEventDetails(false)
        // } else {
        // }
    }

    userLocation = () => {
        const first = this.props.events._embedded.events[0]._embedded.venues[0].location
        this.setState({
            lat: first.latitude,
            lng: first.longitude
        })
    }

    componentDidUpdate() {
        this.userLocation()
    }

    render() {
        // console.log('re rendered with', this.state.lat, this.state.lng)
        return (
            <Map 
                google={this.props.google}
                zoom={14}
                styles={styles}
                style={size}
                center={{
                    lat: this.state.lat,
                    lng: this.state.lng
                }}
            >
                {this.markers()}
            </Map>
        )
    }
} 

const mapStateToProps = (state) => ({
    events: state.events.eventsByLocation,
})

const mapDispatchToProps = (dispatch) => ({
    loadEventDetails: (e) => dispatch(loadEventDetails(e))
})

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    // apiKey: ''
})(connect(mapStateToProps, mapDispatchToProps)(MapContainer))