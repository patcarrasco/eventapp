import React from 'react'
import { Card, Image, Grid, Button } from 'semantic-ui-react'
import Moment from 'react-moment'
import 'moment-timezone'

export function EventCard(props) {
    let {name, image, attractions, venues, dates} = props
    // const attractionNames = !!attractions ? attractions.map(att => att.name).join(', ') : ''
    let venueNames = !!venues ? venues.map(ven => ven.name).join(', ') : ''
    let date = dates.start.dateTime
    if (venueNames.length > 30) {
        venueNames = venueNames.slice(0,30) + "..."
    }
    if (name.length > 55) {
        name = name.slice(0,55) + "..."
    }

    return (
        <Grid.Row columns={3} style={{borderBottom:"1px solid #b4c5e4", minHeight:"6em"}}>
            <Grid.Column width={3}>
                <div style={{fontWeight:"bold", fontSize:"18px", color:"#3c3744"}}>
                    <Moment tz="America/New_York" format="MMM DD">{date}</Moment>
                </div>
                <Moment tz="America/New_York" format="ddd h:mma">{date}</Moment>
            </Grid.Column>
            <Grid.Column width={7} style={{fontSize:"16px", color:"#3c3744"}}>
                {name}
            </Grid.Column>
            <Grid.Column width={6} style={{fontSize:"16px", color:"#3c3744", alignItems:'center'}}>
                <Button fluid>
                    {venueNames}
                </Button>
            </Grid.Column>
        </Grid.Row>
    )
}


            // <Card.Content>
            //     {/* <Image size='tiny' floated='left' src={image}/> */}
            //     <Card.Header as="h6">{name}</Card.Header>
            //     <Card.Meta>{attractionNames}</Card.Meta>
            // </Card.Content>
            // <Card.Content extra>
            //     {venueNames}
            // </Card.Content>