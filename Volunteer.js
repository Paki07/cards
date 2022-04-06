import React, { useState } from "react";

import {
  Button,
  Collapse,
  Card,
  Form,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  FormControl,
  // Check,
  InputGroup

} from "react-bootstrap";

// import FormList from src/forms/FormList



const FORMS_LIST = [
  // {
  //   id: "1",
  //   title: "Apply for organization",
  //   expiredAt: "0000-00-00",
  //   link: "",
  // },
  { id: "2", title: "Volunteer", expiredAt: "0000-00-00", link: "" },
  // { id: "3", title: "Donate for Cause", expiredAt: "0000-00-00", link: "" },
  // { id: "4", title: "Be a speaker", expiredAt: "0000-00-00", link: "" },
];

function Volunteer() {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    firstname: "",
    lastName: "",
    DaysAvailable: "",
    TimeAvailable: "",
    Skillset: "",
  });

  // const [firstname, setFirstname] = useState('');
  // const [lastName, setLastname] = useState('');
  // const [clubType, setClubType] = useState('');
  // const [major, setMajor] = useState('');
  // const [studentId, setStudentId] = useState('');
  // const [email, setEmail] = useState('');

  const isNullOrEmpty = (val) => {
    if (val.trim() === "" || val === null || val === undefined) {
      return true;
    }
    return false;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // console.log(event);
    setState({ ...state, [name]: value });
  };


  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const submitClubHandler = (event) => {
    event.preventDefault();

    const formVal = state;

    console.log("submitting", state);

    if (
      isNullOrEmpty(formVal.firstname) ||
      isNullOrEmpty(formVal.lastName) ||
      isNullOrEmpty(formVal.DaysAvailable) ||
      isNullOrEmpty(formVal.TimeAvailable) ||
      isNullOrEmpty(formVal.Skillset) 
      
    ) {
      alert("Please complete all the form field");
      return;
    }
  };

  return (
    <div>
      {/* <h2 className="basic-title-styles"></h2> */}
      {FORMS_LIST.map((f) => (
        <Card style={{ margin: "1%" }} key={f.id}>
          <Card.Body>
            <h2>{f.title}</h2>
            <div>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                
                Apply
              </Button>
              <Collapse in={open}>
                <Form onSubmit={submitClubHandler} style={{ margin: "1%" }}>
                  <Row>
                    <Form.Group className="mb-3" controlId="clubType">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Select Club"
                        name="clubType"
                        onChange={handleChange}
                      >
                        <Dropdown.Item href="#/action-1" value="ChessClub">
                          Chess Club
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" value="AccAssociate">
                          Accounting Association
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" value="UTA Coders">
                          UTA Coders Society
                        </Dropdown.Item>
                      </DropdownButton>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          name="firstname"
                          onChange={handleChange}
                        />
                        <Form.Text>Please enter Your FirstName</Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          name="lastName"
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Please enter Your LastName
                        </Form.Text>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="TimeAvailable">
                        <Form.Label> Time Available: </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="MM-DD-YYYY"
                          name="TimeAvailable"
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Please enter the Date
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                  <Col md={4}>
                  <Form.Group className="mb-3" controlId="DaysAvailable">
                    <Form.Label>Days Available: </Form.Label>
                      {/* <Form.Check
                      label="Sunday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check> 
                      <Form.Check
                      label="Monday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check> 
                      <Form.Check
                      label="Tuesday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check> 
                      <Form.Check
                      label="Wednesday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check> 
                      <Form.Check
                      label="Thursday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check>
                      <Form.Check
                      label="Friday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check>
                      <Form.Check
                      label="Saturday"
                      name="DaysAvailable"
                      type="checkbox"
                      onChange={handleChange}>
                      </Form.Check> */}


                    
                      <Form.Check
                        label="Sunday"
                        value={checkedOne}
                        onChange={handleChangeOne}
                      />
                      <Form.Check
                        label="Monday"
                        value={checkedTwo}
                        onChange={handleChangeTwo}
                      />
                       <Form.Check
                        label="Tuesday"
                        value={checkedTwo}
                        onChange={handleChangeTwo}
                      />
                       <Form.Check
                        label="Wednesday"
                        value={checkedTwo}
                        onChange={handleChangeTwo}
                      />
                       <Form.Check
                        label="Value 2"
                        value={checkedTwo}
                        onChange={handleChangeTwo}
                      />
                   



                      

                    </Form.Group>
                    </Col>
                    
                    
                  
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="Skillset">
                        <Form.Label>Skillset: </Form.Label>
                        <InputGroup>
                        <FormControl 
                        type="text"
                        placeholder="Enter Your Skill"
                        name="Skillset"
                        onChange={handleChange} 
                        />
                        </InputGroup>
                        <Form.Text className="text-muted">
                          Please enter Your intrest
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    // onClick={submitClubHandler}
                  >
                    Submit
                  </Button>
                </Form>
              </Collapse>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Volunteer;








