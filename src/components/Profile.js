import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth.js'
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react'


class Profile extends React.Component {





  render() {

    const style = {
      h3: {
        marginTop: '2em',
        padding: '2em 0em',
      },
      last: {
        marginBottom: '300px',
      },
    }
    console.log("In PROFILE", this.props.user.username)
    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
<Container>
      <Header as='h3' content='Stackable Grid' textAlign='center' style={style.h3} />
        <Grid columns={2} stackable>
         <Grid.Column>
           <Segment>Content</Segment>
         </Grid.Column>
         <Grid.Column>
           <Segment>Content</Segment>
         </Grid.Column>
         <Grid.Row columns={3}>
           <Grid.Column>
             <Segment>Content</Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment>Content</Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment>Content</Segment>
           </Grid.Column>
         </Grid.Row>
         <Grid.Column width={10}>
           <Segment>Content</Segment>
         </Grid.Column>
         <Grid.Column width={6}>
           <Segment>Content</Segment>
         </Grid.Column>
        </Grid>
</Container>
      </div>
    )
  }
}

const mapStateToProps = state => state


export default withAuth(connect(mapStateToProps)(Profile))
