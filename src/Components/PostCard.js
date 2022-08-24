import React from 'react'
import { Card } from 'react-bootstrap'

const PostCard = ({post}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
         <h5>Name: </h5>{post.name}
          <br/>
          <h5>Username: </h5> {post.username}
          <br/>
          <h5>Email: </h5> {post.email}
          <br/>
          <h5>Sreet: </h5> {post.address.street}
          <br/>
          <h5>Suite: </h5>  {post.address.suite}
          <br/>
          <h5>City: </h5> {post.address.city}
          <br/>
          <h5>ZipCode: </h5>  {post.address.zipcode}
          <br/>
          <h5>geo: </h5>  {post.address.geo.lat}
          <br/>
          {post.address.geo.lng}
          <br/>
          <h5>Phone: </h5>  {post.phone}
          <br/>
          <h5>Website: </h5> {post.website}
          <br/>
          <h5>Company name: </h5> {post.company.name}
          <br/>
          <h6>Catch phrase: </h6> {post.company.catchPhrase}
          <br/>
          <h6>bs: </h6>{post.company.bs}
          <br/>

       
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PostCard