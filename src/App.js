import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './App.css';

export default function App() {
  return (
     <div>
    <Container fluid="md"  >
         <Card  border="secondary" style={{ width: '20rem' , padding: '1rem', backgroundColor: "black", borderRadius:"1rem" } } >
          <Form >
                 <fieldset>
                <legend>Sign Up</legend>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type= "email" placeholder = "Email" name ="email"/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicUserName">
                 <Form.Control type= "text" placeholder = "UserName" name ="userName"/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicOption">
                 <Form.Select aria-label="Default select example">
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDOB">
                 <Form.Control type= "date" placeholder = "Date of Birth" name ="DOB"/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Control type ='password' placeholder = "Password" name = "password" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Terms and Condition" />
                </Form.Group>
                 <Button variant="primary" type="submit">Submit</Button>
                 </fieldset>
          </Form>
          </Card>
          </Container>
          </div>
); }