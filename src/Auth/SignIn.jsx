
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import  Axios  from 'axios';
import "./Sing.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER_LOGIN } from '../redux/ActionTypes';
// import { setUserLogin } from '../Redux/Action/UserAction';



function SignIn() {


   let [login, setLogin] = useState({});
   let dispatch = useDispatch();
   


   let changeInput = (e) =>{
       let {name,value} = e.target;
       setLogin({...login,[name]:value});
   }

   let submitData = async (e) =>{
        e.preventDefault();
        // console.log(login);
        let checkEmail = await Axios.get("http://localhost:5000/users?email="+login.email);
        if(checkEmail.data.length===1){
            if(checkEmail.data[0].password===login.password){
                console.log(checkEmail.data[0]);
                    dispatch(setUserLogin(checkEmail.data[0]))
              window.location="/";
            }
            else{
                console.log("Invalid Password");
            }
        }
        else{
            console.log("Invalid email")
        }
      setLogin({})
   }
//    setLogin({})


    return(
        <>
            {/* <Container>

                <Row className="justify-content-md-center">

                    <Col md="4">
                    <h1>SignIn Page</h1>
                        <Form method="post"  onSubmit={(e)=>submitData(e)}>
                    
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={(e)=>changeInput(e)} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"   name="password" onChange={(e)=>changeInput(e)} placeholder="Enter password" />
                            </Form.Group>

                           

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                             <Button type="submit" value="SignUp">SignIn</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                   
                </Row>
               
            </Container> */}
            <section className="login">
                <div class="container-main">
                    <form className="main-form" method="post" onSubmit={(e) => submitData(e)}>
                        <p>SingIn</p>
                        <input type="email" placeholder="Email" name="email" onChange={(e) => changeInput(e)} /><br />
                        <input type="password" placeholder="Password" name="password" onChange={(e) => changeInput(e)} /><br />
                        <input type="submit" name="submit" value="Sing_In" /><br />
                        {/* <Link to="/Forget"><a style={{ fontSize: "18px" }}>Forget Password</a></Link> */}
                    </form>

                </div>
            </section>
      
           
        </>
    )
}


export default SignIn;