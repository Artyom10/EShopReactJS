import React, {Component} from 'react';
import NavAdminPanel from './NavAdminPanel/NavAdminPanel';
import NavClientPanel from './NavClientPanel/NavClientPanel';
import NavStartPanel from './NavStartPanel/NavStartPanel';
import ModalSign from './ModalSign/ModalSign';
import ModalLog from './ModalLog/ModalLog';
//const panel = this.state.isClient && <NavClientPanel /> || <NavAdminPanel />

function ChoosePanel(props){
  const isPanel = props.who;

  if(isPanel === 'guest'){
    return <NavStartPanel />
  }
  else if(isPanel === 'client'){
    return <NavClientPanel />
  }
  else if(isPanel === 'admin'){
    return <NavAdminPanel />
  }
}


class Nav extends Component {
    constructor(props){
      super(props)

      this.state = {
        isWho: 'client'
      }
    }


  render() {
     
       return (
    <nav className="navbar my-navbar navbar-expand-lg navbar-light">
       <div className="container">
          <a className="navbar-brand" href="#"><div className="logo"><span>E</span>Shop</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/pages/index.html">Main page</a>
          </li>
        </ul>
         <ChoosePanel who={this.state.isWho} />
      </div>
       </div>
       <ModalLog />
       <ModalSign />
    </nav>
       )
  }
}



export default Nav;
