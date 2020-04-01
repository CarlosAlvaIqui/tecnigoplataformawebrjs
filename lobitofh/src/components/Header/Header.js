import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import SecondHeader from './SecondHeader';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      headerconten: true
     }
  }

componentDidMount(){
  var gettokenuser = localStorage.getItem("tokenuser")
  var getitemuser = localStorage.getItem('data_user')


  console.log("HEADER>>>>")
  console.log("HEADER>>>>"+gettokenuser)

  console.log("HEADER>>>>"+getitemuser)
if(getitemuser == undefined && gettokenuser == undefined){
  this.setState({
    headerconten:true
  })
}else{
  this.setState({
    headerconten:false
  })
}


}

  render() { 
    return (
      <React.Fragment>
        {
        this.state.headerconten ?
        <DefaultHeader/>

        :
        
        <SecondHeader/>

      }
      </React.Fragment>
      );
  }
}
 
export default Header;