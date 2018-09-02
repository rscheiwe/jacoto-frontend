import React, { Component } from 'react'
import { Menu, Container, Divider } from 'semantic-ui-react'

class FilterMenu extends Component {
  state = {

  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (

      <div>
      <Divider horizontal style={{position:'relative'}}>
      <Container >
      
      <Menu stackable style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>

        <center><Menu.Item><b>Sort</b></Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}>
          Subject
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}>
          Cost
        </Menu.Item>

        <Menu.Item
        name='sign-in'
        active={activeItem === 'sign-in'}
        onClick={this.handleItemClick}>
          Pace
        </Menu.Item></center>
      </Menu>
      </Container>
      </Divider>
      </div>


    )
  }
}

export default FilterMenu
