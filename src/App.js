import logo from './logo_header.jpg';
import aboutLogo from './picture1.jpg'
import contactLogo from './contact.jpg'
import './App.css';
import React from 'react';
import {Container, Row, Col, Media, Nav, Form, Navbar,Table} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

var signInToken;

//MARK

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
          <Media>
            <img
                src={logo}
                width={120}
                height={80}
                alt = "logo"
              />
          </Media>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="https://ozuburs.ozyegin.edu.tr/tr/blog/hasan-umut-suluhan">About</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/offeredcourses">Offered Courses</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Nav
          activeKey="/" onSelect={(selectedKey) => navSelected(selectedKey)}>
          </Nav>
        <Switch>
          <Route exact path="/">
            <Entrance />
          </Route>
          <Route exact path="/home">
            <Entrance />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/offeredcourses">
            <OfferedCourse />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>     
    <Container>
      <Row id = "footer">
        <Col>
          <Media>
            <img
              src={logo}
              width={120}
              height={80}
              alt = "logo"
            />
          </Media>
        </Col>
        <Col>
          <article>
            Contact Information:<br></br>
            Address:İstanbul, Mecidiyeköy<br></br>
            Phone Number:02327173813<br></br>
            E-mail:coursetr@gmail.com
          </article>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

function Entrance() {
  var isSigned = isSignedIn();
  if(isSigned) {
	var user = getCurrentUserObject();
    return (
      <Container id="loggedInCont">
        <article>
            Welcome, {user.firstname + " " + user.lastname} <br></br>
            Email, {user.mail}<br></br>
            School: Özyeğin University<br></br>
            <button id="logoffbutton" onClick={logoff} type="button">Logoff</button>
          </article>
      </Container>
    );
  } else {
    return (     
      <Container id="cont">
        <Row id = "row">
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
            <h4 id = "h3">Register</h4>
            <Form>
              <Form.Group ControlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id = "formRegisterEmail" type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group controlId="registerFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control id = "formRegisterFirstName" type="text" placeholder="Enter your first name" maxLength="15" required/>
              </Form.Group>
              <Form.Group controlId="registerLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control id = "formRegisterLastName" type="text" placeholder="Enter your last name" maxLength="15" required/>
              </Form.Group>
              <Form.Group controlId="registerUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control id = "formRegisterUsername"type="text" placeholder="Enter your username" minLength="5" maxLength="15" required/>
              </Form.Group>
              <Form.Group controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control id = "formRegisterPassword"type="password" placeholder="Password" required/>
              </Form.Group>
              <Form.Group controlId="registerPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control id = "formRegisterPhone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" required/>
              </Form.Group>
              
              <Form.Group controlId="registerBirthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control id = "formRegisterBirthdate" type="date" min="1950-01-01" max="2008-01-01" value="2000-01-01" required/>
              </Form.Group>
              <Form.Group controlId="submitButton">
                <Form.Control type="submit" onClick={store} placeholder="Submit" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
            <h4 id = "h3">Sign In</h4>
            <Form>
              <Form.Group controlId="formSignInEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id = "signinusername" type="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group controlId="formSignInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control id = "signinpassword" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="submitButton">
                <Form.Control type="submit" onClick = {signin} placeholder="Password" />
              </Form.Group>
            </Form>
          </Col>
        </Row>     
      </Container>
    );
  }
}

function About() {
  return (
    <Container>
      <Row>
        <Col>
            <Media>
              <img
                src={aboutLogo}
                width={300}
                height={225}
                alt = "logo"
              />
            </Media>
        </Col>
        <Col>
          <article>
            CourseTR is a website offering best structured and informative courses to students worldwide.<br></br>
            Explore and register our courses to get the incredible experience from experts who trained to be the best in their professional area.
            CourseTR offers courses certificated by the top tier universities.
          </article>
        </Col>
        
      </Row>      
    </Container>
  );
}

function Contact(){
  return(
    <Container>
      <Row>
        <Col>
            <Media>
              <img
                src={contactLogo}
                width={300}
                height={225}
                alt = "logo"
              />
            </Media>
        </Col> 
        <Col>
          <article>
            Contact Information:<br></br>
            Address:İstanbul, Mecidiyeköy<br></br>
            Phone Number:02327173813<br></br>
            E-mail:coursetr@gmail.com
          </article>
        </Col>               
      </Row>
    </Container>
  );
}

function OfferedCourse(){
  var isSigned = isSignedIn();
  if (!isSigned) {
	  return(
		<Container>
		  <Row>
			<Col>
			  <article>
				Please sign in to access the page!
			  </article>
			</Col>               
		  </Row>
		</Container>
	  );
  }
  var csCourseBool = loadCourseData('CS101');
  var mathCourseBool = loadCourseData('MATH103');
  var physCourseBool = loadCourseData('PHYS101');
  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">Course Code</th>
          <th scope="col">Teacher</th>
          <th scope="col">Topic</th>
          <th scope="col">Registered</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">CS101</th>
          <td>Prof. Unluturk</td>
          <td>Introduction to Computer Science</td>
          <td>{getCourseRegisterText(csCourseBool)}</td>
          <td>
            <button id="csregisterbutton" onClick={() => {
              var isSigned = isSignedIn();
              if (isSigned) {
                var currentUser = getCurrentUser();
                var courseBool = loadCourseData("CS101");
                console.log(courseBool);
                localStorage.setItem(currentUser + "-" + "CS101", !courseBool);
                window.location.reload();
              } else {
                alert("Not Logged In!");
              }
            }
            } type="button">{getCourseRegisterButtonText(csCourseBool)}</button>
          </td>
        </tr>
        <tr>
          <th scope="row">MATH103</th>
          <td>Prof. Whizz</td>
          <td>Calculus I</td>
          <td>{getCourseRegisterText(mathCourseBool)}</td>
          <td>
          <button id="mathregisterbutton" onClick={() => {
              var isSigned = isSignedIn();
              if (isSigned) {
                var currentUser = getCurrentUser();
                var courseBool = loadCourseData("MATH103");
                console.log(courseBool);
                localStorage.setItem(currentUser + "-" + "MATH103", !courseBool);
                window.location.reload();
              } else {
                alert("Not Logged In!");
              }
            }
            } type="button">{getCourseRegisterButtonText(mathCourseBool)}</button>
          </td>
        </tr>
        <tr>
          <th scope="row">PHYS101</th>
          <td>Prof. Einstein</td>
          <td>Physics I</td>
          <td>{getCourseRegisterText(physCourseBool)}</td>
          <td>
            <button id="physregisterbutton" onClick={() => {
              var isSigned = isSignedIn();
              if (isSigned) {
                var currentUser = getCurrentUser();
                var courseBool = loadCourseData("PHYS101");
                console.log(courseBool);
                localStorage.setItem(currentUser + "-" + "PHYS101", !courseBool);
                window.location.reload();
              } else {
                alert("Not Logged In!");
              }
            }
            } type="button">{getCourseRegisterButtonText(physCourseBool)}</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

function Settings(){
  var isSigned = isSignedIn();
  if (!isSigned) {
	  return(
		<Container>
		  <Row>
			<Col>
			  <article>
				Please sign in to access the page!
			  </article>
			</Col>               
		  </Row>
		</Container>
	  );
  }
  var user = getCurrentUserObject();
  
  return(
    <Table striped bordered hover>
      <tbody>
        <tr>
            <th scope="row">Email Address</th>
            <td>{user.mail}</td>
            <td>
              <Form.Group controlId="formRegisterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id = "nemail" type="email" placeholder="Enter email" required/>
              </Form.Group>
            </td>
            <td>
              <button id="newEmail" onClick={onclickEmail} type="button">Change</button>
            </td>
        </tr>
        <tr>
            <th scope="row">First Name</th>
            <td>{user.firstname}</td>
            <td>
              <Form.Group controlId="formRegisterFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control id= "nfirstname" type="text" placeholder="Enter your first name" maxLength="15" required/>
              </Form.Group>
            </td>
            <td>
              <button id="newFName" onClick={onclickFirstName} type="button">Change</button>
            </td>
        </tr>
        <tr>
            <th scope="row">Last Name</th>
            <td>{user.lastname}</td>
            <td>
              <Form.Group controlId="formRegisterLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control  id= "nlastname" type="text" placeholder="Enter your last name" maxLength="15" required/>
              </Form.Group>
            </td>
            <td>
              <button id="newLName"  onClick={onclickLastName} type="button">Change</button>
            </td>
        </tr>
        <tr>
            <th scope="row">Phone Number</th>
            <td>{user.phone}</td>
            <td>
              <Form.Group controlId="formRegisterPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control id = "nphone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" required/>
              </Form.Group>
            </td>
            <td>
              <button id="phone" onClick={onclickPhone} type="button">Change</button>
            </td>
        </tr>
      </tbody>
    </Table>
  );
}


function store() {
  if (typeof(Storage) !== "undefined") {

      var inputmail = document.getElementById("formRegisterEmail").value;
      console.log(inputmail);
      var inputfirstname = document.getElementById("formRegisterFirstName").value;
      var inputlastname = document.getElementById("formRegisterLastName").value;
      var inputusername = document.getElementById("formRegisterUsername").value;
      var inputpassword = document.getElementById("formRegisterPassword").value;
      var inputphone = document.getElementById("formRegisterPhone").value;
      var inputbirthdate = document.getElementById("formRegisterBirthdate").value;

      var usersList = JSON.parse(localStorage.getItem("users"));

      if (usersList) {
          if (!checkDuplicate(inputmail, inputusername, inputphone)) {
              usersList.push({
                  mail: inputmail,
                  firstname: inputfirstname,
                  lastname: inputlastname,
                  username: inputusername,
                  password: inputpassword,
                  phone: inputphone,
                  birthdate: inputbirthdate
              });
              localStorage.setItem("users", JSON.stringify(usersList));
              alert("Your profile has been successfully created, please login now");
          } else {
              alert("Try again");
          }
      } else {
          localStorage.setItem("users",
              JSON.stringify([
                  {
                      mail: inputmail,
                      firstname: inputfirstname,
                      lastname: inputlastname,
                      username: inputusername,
                      password: inputpassword,
                      phone: inputphone,
                      birthdate: inputbirthdate
                  }
              ]));
          alert("Your profile has been successfully created, please login now");
      }
  } else {
      alert("No webstorage support");
  }
}

function onclickEmail() {
  toggleChange('mail', document.getElementById('nemail').value);
}

function onclickFirstName() {
  toggleChange('firstname', document.getElementById('nfirstname').value);
}

function onclickLastName() {
  toggleChange('lastname', document.getElementById('nlastname').value);
}

function onclickPhone() {
  toggleChange('phone', document.getElementById('nphone').value);
}

function onclickCountry() {
  toggleChange('country', document.getElementById('ncountry').value);
}

function checkDuplicate(mail, username, phone) {
  var i = 0;

  var usersList = JSON.parse(localStorage.getItem("users"));

  while (i < usersList.length) {
      if (usersList[i].mail === mail) {
          alert("User with entered mail already exists");
          return true;
      } else if (usersList[i].username === username) {
          alert("User with entered username already exists");
          return true;
      } else if (usersList[i].phone === phone) {
          alert("User with entered phone number already exists");
          return true;
      }
      i++;
  }
  return false;
}

function signin() {

  var inputMail = document.getElementById("signinusername").value;
  var inputPassword = document.getElementById("signinpassword").value;

  var x = checkIfUserExists(inputMail, inputPassword);

  if (!x) {
      alert("You have entered wrong information.");
  } else {
      var user = getUser(inputMail);
      var username = user.username;
      alert(["Welcome back", " ", user.firstname, " ", user.lastname].join(""));
      localStorage.setItem("CurrentUser", username);

      window.location.reload();
  }
}

function getUser(mail) {

  var usersList = JSON.parse(localStorage.getItem("users"));
  console.log("Working...");
  var i = 0;

  while (i < usersList.length) {
      if (usersList[i].mail === mail) {
          console.log("Found");
          return usersList[i];
      }
      i++;
  }
  return null;
}


function getCurrentUserObject() {
  var usersList = JSON.parse(localStorage.getItem("users"));
  return usersList.find(x => x.username === getCurrentUser());
}

function toggleChange(attribute, changed) {
  var usersList = JSON.parse(localStorage.getItem("users"));
  usersList.find(x => x.username === getCurrentUser())[attribute] = changed;

  console.log(usersList);
  localStorage.setItem("users", JSON.stringify(usersList));

  window.location.reload();
}

function logoff() {
  localStorage.removeItem("CurrentUser");
  window.location.reload();
}

function navSelected(key) {

  if (isSignedIn() == false) {
    alert(`You're not signed in, Please head back and sign in/register`);
  }
  
}

function isSignedIn() {
  var signedIn = localStorage.getItem("CurrentUser");
  if (!signedIn || 0 === signedIn.length)
      return false;
  return true;
}

function getCurrentUser() {
  var signedIn = localStorage.getItem("CurrentUser");
  if (!signedIn || 0 === signedIn.length)
      alert("Not Logged In!");
  return signedIn;
}

function checkIfUserExists(mail, password) {
  var usersList = JSON.parse(localStorage.getItem("users"));
  var i = 0;

  while (i < usersList.length) {
      if (usersList[i].mail === mail && usersList[i].password === password) {
          return true;
      }
      i++;
  }
  return false;
}

function loadCourseData(courseCode) {
  var currentUser = getCurrentUser();
  var courseBoolString = localStorage.getItem(currentUser + "-" + courseCode);
  if (!courseBoolString || 0 === courseBoolString.length)
      return false;
  else {
      let courseBool = JSON.parse(courseBoolString) === true;
      return courseBool;
  }

}

function getCourseRegisterText(courseBool) {
  if (courseBool)
	return "Registered";
  else
    return "Not Registered";
}

function getCourseRegisterButtonText(courseBool) {
  if (courseBool)
	return "Unregister";
  else
    return "Register";
}
export default App;