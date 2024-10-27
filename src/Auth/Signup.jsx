import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import  Axios  from 'axios';
import "./Sing.css"


function SignUp() {
    let [user,setUser] = useState({});

    let changeInput = (e) =>{
        let {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    let submitData = async (e) =>{
        e.preventDefault();
        console.log(user);

        let checkUser = await Axios.get("http://localhost:3000/users?email="+user.email);
        if(checkUser.data.length===0){
            if(user.password == user.cpass){
                let registerUser = await Axios.post("http://localhost:3000/users",user);
                if(registerUser){
                    console.log("User registerd Successfully");
                }
                else{
                    console.log("User not registerd");
                }
            }
            else{
                console.log("Password & Confirm password not match")
            }
        }
        else{
            // console.log("User is already registerd !! try new Email id");
            console.log("User is already registerd !! try new Email id");
        }
    }
    return(
        <>
            {/* <Container>

                <Row className="justify-content-md-center">
                    <Col md="4">
                    <h1>SignUp Page</h1>
                        <Form method="post" onSubmit={(e)=>submitData(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username"  onChange={(e)=>changeInput(e)} placeholder="enter username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={(e)=>changeInput(e)} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  onChange={(e)=>changeInput(e)} name="password"placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password"  onChange={(e)=>changeInput(e)} name="cpass"  placeholder="Enter confirm password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                             <Button type="submit" value="SignUp">SignUp</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                   
                </Row>
               
            </Container> */}

<section className="login">
                <div className="container-main">
                    <form className="main-form" method="post" onSubmit={(e)=>submitData (e)}>
                        <p>SignUp</p>
                        <input type="text" placeholder="User_Name" name="username" onChange={changeInput} /><br />
                        <input type="email" placeholder="Email" name="email" onChange={changeInput} /><br />
                        <input type="password" placeholder="Password" name="password" onChange={changeInput} /><br />
                        <input type="password" placeholder="Confirm Password" name="cpass" onChange={changeInput} /><br />
                        <input type="submit" name="submit" value="Sign Up" /><br />
                        <Link to="/SignIn"><a style={{ fontSize: "18px" }}>Sign In</a></Link>
                    </form>
                </div>
            </section>
           
           
        </>
    )
}


export default SignUp;