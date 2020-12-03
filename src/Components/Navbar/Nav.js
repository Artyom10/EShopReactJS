import React, {Component, PureComponent} from 'react';
import NavAdminPanel from './NavAdminPanel/NavAdminPanel';
import NavClientPanel from './NavClientPanel/NavClientPanel';
import NavStartPanel from './NavStartPanel/NavStartPanel';
import ModalSign from './ModalSign/ModalSign';
import ModalLog from './ModalLog/ModalLog';
import  stylesFor from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


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


class Nav extends PureComponent {
    constructor(props){
      super(props)

      this.state = {
        isWho: 'admin'
      }
    }


  render() {
     
       return (
    <nav className={` ${stylesFor.myNav} navbar navbar-expand-lg navbar-light`}>
       <div className="container">
          <a className="navbar-brand" href="#"><div className={stylesFor.logo}><span className={stylesFor.spanLogo}>E</span>Shop</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">Main page</NavLink>
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
