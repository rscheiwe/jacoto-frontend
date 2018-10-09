import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, Collapse } from 'mdbreact';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class SideNavigator extends Component {
  state = {
    collapse: false

  };

  clicked = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    componentDidMount() {}

    render() {
        const { activeItem } = this.state

        return(
            <div className='sideNavigator' >
              <div className="float-right" style={{padding:'35px'}}>
                <a onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
              </div>
            <Collapse isOpen = { this.state.collapse } >
                <div className='full height'>
                    <div className='toc'>
                        <Menu className='inverted vertical left fixed'>
                            <Menu.Item>

                            <a href='/'><div className="hoja-nav">
                                <NavbarBrand href="/">
                                <img src='/images/jacoto_logo.png' width="90px" style={{marginLeft:'-10px'}} alt="logo"/>

                                </NavbarBrand>
                              </div></a>

                                </Menu.Item>
                                    <Menu.Item className='search-button' name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                                    <a href="/browse" id="navbar-category-pro-react" className="profile-trigger" role="button">
                                      <span >
                                          <span
                                                className="btn btn-outline btn-sm my-0 ml-3 waves-effect waves-light"
                                                role="button">Browse<i className="fa fa-search ml-2"></i>
                                          </span>
                                      </span>
                                    </a>
                                    </Menu.Item>
                                    <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                                    <a href="/about" id="navbar-category-pro-react" className="profile-trigger" role="button">
                                      <span >

                                          <span 
                                                className="btn btn-outline btn-sm my-0 ml-3 waves-effect waves-light"
                                                role="button">About<i className="fa fa-info ml-2"></i>
                                          </span>
                                      </span>
                                    </a>
                                    </Menu.Item>
                                    <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                                        Remove
                                    </Menu.Item>


                            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='grid layout' />
                                Browse
                            </Menu.Item>
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
                                Messages
                            </Menu.Item>

                            <Dropdown item text='More'>
                                <Dropdown.Menu>
                                    <Dropdown.Item icon='edit' text='Edit Profile' />
                                    <Dropdown.Item icon='globe' text='Choose Language' />
                                    <Dropdown.Item icon='settings' text='Account Settings' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </div>

                </div>
                </Collapse>
            </div>
        )
    }
}
