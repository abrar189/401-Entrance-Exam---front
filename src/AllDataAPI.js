import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromapi: [],
        }
    }

    componentDidMount = async () => {
        // https://ltuc-asac-api.herokuapp.com/allColorData
        let resData = await axios.get('http://localhost:3008/allColorData')
        await this.setState({
            dataFromapi: resData.data
        })
    }

    addtofavaret=async (ele)=>{
        let addtofavopj={
            email:this.props.auth0.user.email,
            title:ele.title,
            imageUrl:ele.imageUrl,
        }
console.log(addtofavopj);
          // http://localhost:3008/addtoFavart
        await axios.post('http://localhost:3008/addtoFavart',addtofavopj)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>All Data from the API</h1>
                    <h3>Select your favorites :)</h3>
                </div>


                {this.state.dataFromapi.map((ele, index) => {
                    return (
                        <Card style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Img variant="top" src={ele.imageUrl} />
                            <Card.Body>
                                <Card.Title>{ele.title}</Card.Title>

                                <Button variant="primary" onClick={() => this.addtofavaret(ele)}>ADD TO FAV</Button>

                            </Card.Body>
                        </Card>
                    )
                })

                }
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
