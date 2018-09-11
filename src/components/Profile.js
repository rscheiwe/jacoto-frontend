import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth.js'
import UserCourseList from './UserCourseList.js'
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
    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>

      <Header as='h3' content={this.props.user.username} textAlign='center' style={style.h3} />
      <Container>
        <Grid columns={2} stackable>
         <Grid.Column>
           <Segment><center><img src={this.props.user.avatar} className="responsive" alt="profile"/></center></Segment>
         </Grid.Column>
         <Grid.Column>
           <Segment>CONTENT</Segment>
         </Grid.Column>
         </Grid>

         <span>
         <h2 style={{fontFamily:'Oswald', letterSpacing:'.5em', textAlign:'right'}}>Your Courses</h2>
         <hr />
         <UserCourseList usercourses={this.props.user.courses} />
         </span>


         <Grid >
           <Grid.Column width={5}>
             <Segment>Content</Segment>
           </Grid.Column>
           <Grid.Column width={6}>
             <Segment>Content</Segment>
           </Grid.Column>
           <Grid.Column width={5}>
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
