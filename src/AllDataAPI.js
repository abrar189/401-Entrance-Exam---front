import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CardApi from './components/CardApi';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBok: [],
        }
    }
    // http://localhost:3006/dataDB
    componentDidMount = async () => {
        let result = await axios.get(`${process.env.REACT_APP_SERVER}/dataAPI`);
        this.setState({
            dataBok: result.data
        })
        console.log(this.state.dataBok);
    }
    // http://localhost:3006/addtofav

    addToFav = async (index) => {
        const newObj = {
            email: this.props.auth0.user.email,
            name: this.state.dataBok[index].name,
            img: this.state.dataBok[index].img,
            level: this.state.dataBok[index].level,

        }
        await axios.post(`${process.env.REACT_APP_SERVER}/addtofav`, newObj)
    }


    render() {
        return (
            <div>
                <div>
                    <h1>All Data from the API</h1>
                    <h3>Select your favorites :)</h3>
                </div>
               
                <CardApi dataBok={this.state.dataBok} addToFav={this.addToFav}/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
