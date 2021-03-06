import React from 'react'
import SignInForm from '../SignInForm/SignInForm';
import { Responsive } from 'semantic-ui-react';


const LandingPageMainBackground = () => {

    const desktop = () => (
        < div style = {
            {
                width: "auto",
                height: "100vh",
                minHeight: "100vh",
                backgroundColor: '#3c3744',
                backgroundImage: `-webkit-linear-gradient(20deg, #b4c5e4 10%, transparent)`,
                // backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "space-between",
                padding: "10em"
            }
        } >
            <div style={
                    {
                        // padding:"1em", 
                        // flexDirection:"row", 
                        alignItems:"center", 
                        // alignSelf:"flex-start"
                        // justifyContent:"space-between", 
                        // alignContent:"flex-start",
                        // backgroundColor: "#f2f5ea",
                        // borderStyle: "solid",
                        marginBottom:'20px',
                        borderBottom:"solid",
                        borderColor: "#E75A7C",
                        // backgroundImage: `-webkit-linear-gradient(bottom, #59c3c3, transparent 80%)`,

                    }
                }>
                < h1 style = {
                    {
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "300",
                        fontSize: "8em",
                        color: "#fbfff1"
                    }
                } > wanago </h1>
            </div>

            < div style = {
                {
                    width: "max-content",
                    height: "75%",
                    // maxHeight: "100%",
                    // borderStyle: "solid",
                    // borderColor: "#E75A7C",
                    // borderRadius: "4px",
                    justifySelf: "center",
                    display:"flex",
                    alignItems:"center",
                    justifyContent: "center",
                    // backgroundColor: '#52489C',
                }
            } >
                < h2 style = {
                    {
                        fontFamily: "Roboto, san-serif",
                        fontWeight: "400",
                        fontSize: "50px",
                        color: "#fbfff1",
                    }
                } >
                    Live tonight. Find events near you.      
                </h2>
            </div>
            <div style = {
                {
                    // borderStyle:"solid",
                    // backgroundColor: "#fbfff1",
                    // display: "flex",
                    // flexDirection:"column",
                    // alignItems: "center",
                    // justifyContent:"space-evenly",
                    marginTop: '20px',
                    maxWidth:"40%",
                    minWidth:"40%"
                    // minHeight:"230px",
                }
            }>
                <SignInForm />
            </div>
        </div>
    ) 

    const mobile = () => (
        < div style = {
            {
                width: "auto",
                height: "100vh",
                minHeight: "100vh",
                backgroundColor: '#3c3744',
                backgroundImage: `-webkit-linear-gradient(20deg, #b4c5e4 10%, transparent)`,
                // backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "space-between",
                padding: "6em"
            }
        } >
            <div style={
                    {
                        // padding:"1em", 
                        flexDirection:"row", 
                        alignItems:"center", 
                        justifyContent:"space-between", 
                        alignContent:"flex-start",
                        // backgroundColor: "#f2f5ea",
                        // borderStyle: "solid",
                        borderBottom:"solid",
                        borderColor: "#E75A7C",
                        marginBottom: '14px'
                        // backgroundImage: `-webkit-linear-gradient(bottom, #59c3c3, transparent 80%)`,

                    }
                }>
                < h1 style = {
                    {
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "300",
                        fontSize: "6em",
                        color: "#fbfff1"
                    }
                } > wanago </h1>
            </div>

            <div style = {
                {
                    // borderStyle:"solid",
                    // backgroundColor: "#fbfff1",
                    // display: "flex",
                    // flexDirection:"column",
                    // alignItems: "center",
                    // justifyContent:"space-evenly",
                    // width:"26em",
                    // minHeight:"230px",
                }
            }>
                <SignInForm />
            </div>
        </div>
    )

    return (
        <>
            <Responsive minWidth={1000}>
                {desktop()}
            </Responsive>
            <Responsive maxWidth={999}>
                {mobile()}
            </Responsive>
        </>
    )


}

export default LandingPageMainBackground