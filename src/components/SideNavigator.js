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
            <div className='sideNavigator' style={{background:'rgb(255,255,244)'}}>
              <div className="float-right" style={{padding:'35px', position: 'sticky !important'}}>
                <a onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
              </div>
            <Collapse isOpen = { this.state.collapse } >
                <div className='full height'>
                    <div className='toc'>
                        <Menu className='inverted vertical left fixed'>
                            <Menu.Item>
                                Home
                                <Icon name='dashboard' />
                                <Menu.Menu>
                                    <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                                        Search
                                    </Menu.Item>
                                    <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                                        Add
                                    </Menu.Item>
                                    <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                                        Remove
                                    </Menu.Item>
                                </Menu.Menu>
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
                    <div className='article'>
                        <div>Content</div>
                    </div>
                </div>
                </Collapse>
            </div>
        )
    }
}
