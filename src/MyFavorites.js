import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Updatedmodel from './Updatedmodel'
// REACT_APP_SERVER=
class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myfavdata: [],
      index: 0,
      showmodel: false,
      title: '',
      imageUrl: '',



    }
  }
  componentDidMount = async () => {
    const { email } = this.props.auth0.user
    console.log(email);
    // http://localhost:3008/alldata?email=
    let resalldata = await axios.get(`http://localhost:3008/alldata?email=${email}`)

   await this.setState({
      myfavdata: resalldata.data,
    })
    console.log(this.state.myfavdata);
  }

  deletedcard = async (index) => {
    let paramsopj = {
      email: this.props.auth0.user.email
    }
    console.log(index);
    // http://localhost:3008/delete/index
    let resdelet = await axios.delete(`http://localhost:3008/delete/${index}`, { params: paramsopj })
    await this.setState({
      myfavdata: resdelet.data,
      index: index
    })
  }
  handelshow = (index) => {
    this.setState({
      showmodel: true,
      title: this.state.myfavdata.title,
      imageUrl: this.state.myfavdata.imageUrl,
      index: index,

    })
  }
  handelclose = () => {
    this.setState({
      showmodel: false,
    })
  }

  updatedData = async (e) => {
    e.preventDefault()
    let updateopj = {
      email: this.props.auth0.user.email,
      title: e.target.title.value,
      imageUrl: e.target.imageUrl.value,

    }
    
    // http://localhost:3008/update/index

    let resupdatedata = await axios.put(`http://localhost:3008/update/${this.state.index}`, updateopj
    )
    await this.setState({
      myfavdata: resupdatedata.data,
    })

  }



  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <div>
          {this.state.myfavdata.map((ele, index) => {
            return (
              <Card style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" src={ele.imageUrl} />
                <Card.Body>
                  <Card.Title>{ele.title}</Card.Title>

                  <Button variant="primary" onClick={() => this.deletedcard(index)}>delet</Button>
                  <Button variant="primary" onClick={() =>this.handelshow(index)}>update</Button>

                </Card.Body>
              </Card>
            )
          })

          }
        </div>
        <Updatedmodel imageUrl={this.state.imageUrl} title={this.state.title} showmodel={this.state.showmodel} handelshow={this.handelshow} handelclose={this.handelclose}  updatedData={this.updatedData} index={this.state.index} />
      </>
    )
  }
}


export default withAuth0(MyFavorites);

