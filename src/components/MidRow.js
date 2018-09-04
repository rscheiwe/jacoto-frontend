import React from 'react'
import { Grid } from 'semantic-ui-react'

const MidRow = () => {

  return (
<div>
      <Grid columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column width={8} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <img src={require('./placeholder.png')} width="500px" alt="" />
          </Grid.Column>

          <Grid.Column width={8} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <img src={require('./jacoto_book.jpg')} width="500px" alt="" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>

  )
}

export default MidRow

// <Header as='h3' style={{ fontSize: '2em' }}>
// "I shouldn't have gone with their competitor."
// </Header>

// <p style={{ fontSize: '1.33em' }}>
// <Image avatar src='/images/avatar/large/nan.jpg' />
// <b>Nan</b> Chief Fun Officer Acme Toys
// </p>
