import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CardFav from './components/CardFav';
import UpdateModal from './components/UpdateModal';


class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBok: [],
      show:false,
      index:'',
      selectData:{}
    }
  }
  // http://localhost:3006/dataDB
  componentDidMount = async () => {
    const email = this.props.auth0.user.email;
    let result = await axios.get(`${process.env.REACT_APP_SERVER}/dataDB?email=${email}`);
    this.setState({
      dataBok: result.data
    })
    console.log(this.state.dataBok);
  }
  // http://localhost:3006/delete/idx

  deleteFun = async (index) => {
    const email = this.props.auth0.user.email;
    let result = await axios.delete(`${process.env.REACT_APP_SERVER}/delete/${index}?email=${email}`);
    this.setState({
      dataBok: result.data
    })
  }
  handleClose= async()=>{
    this.setState({
      show:false
    })
  }
  handleshow= async (index)=>{
    await this.setState({
      show:true,
      index:index,
      selectData:{
        name: this.state.dataBok[index].name,
        img: this.state.dataBok[index].img,
        level: this.state.dataBok[index].level,
      }
    })
    console.log('hiiiiiiii',this.state.selectData);

  }


// http://localhost:3006/update/idx
updateFun= async(e)=>{
  e.preventDefault();
  const newObj={
    email: this.props.auth0.user.email,
    name: e.target.name.value,
    img: e.target.img.value,
    level: e.target.level.value,
  }
  let result = await axios.put(`${process.env.REACT_APP_SERVER}/update/${this.state.index}`,newObj);
    this.setState({
      dataBok: result.data,
    

    })
    console.log('selected',this.state.selectData);
    
    console.log(this.state.dataBok);
}

  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
       
        <CardFav dataBok={this.state.dataBok} deleteFun={this.deleteFun} handleshow={this.handleshow}/>
        <UpdateModal handleClose={this.handleClose} updateFun={this.updateFun} show={this.state.show}
        selectData={this.state.selectData}/>
      </>
    )
  }
}


export default withAuth0(MyFavorites);

