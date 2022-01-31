import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  ButtonGroup,
  Spinner,
  Row,
  Form,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import MaskInput from "react-maskinput/lib";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser, searchUsers } from "../../../api/admin-user-service";

const Users = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [users, setUsers] = useState([]);
  //Search processs
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSSN, setSearchSSN] = useState("");
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit ici: ");

    console.log(
      searchSSN +
        "-" +
        searchFirstName +
        "-" +
        searchLastName +
        "-" +
        searchEmail
    );

    searchUsers(searchSSN, searchFirstName, searchLastName, searchEmail)
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
        setSearchSSN("");
        setSearchFirstName("");
        setSearchLastName("");
        setSearchEmail("");
      })
      .catch((err) => {
        console.log("search hatasi " + err.message);
      });
  };
  // handleChange for Search Processes
  /* const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }; */

  const handleOnChangeSSN = (e) => {
    console.log(e.target.value);
    setSearchSSN(e.target.value);
  };
  const handleOnChangeFirstName = (e) => {
    console.log(e.target.value);
    setSearchFirstName(e.target.value);
  };
  const handleOnChangelastName = (e) => {
    console.log(e.target.value);
    setSearchLastName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    console.log(e.target.value);
    setSearchEmail(e.target.value);
  };

  //------

  const handleEdit = (userId) => {
    navigate(`/manager/user/${userId}`);
  };

  useEffect(() => {
    getAllUser().then((resp) => {
      setUsers(resp.data);
      console.log(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (
    <>
      <div className="user-list-top">
        {/* <ButtonGroup
          aria-label="Basic example"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <Button
            variant="primary"
            as={Link}
            to="/admin/users/new"
            style={{ width: "200px" }}
          >
            New User
          </Button>
        </ButtonGroup> */}
        <Card style={{ padding: "10px" }}>
          {/* <div className="conteiner-search"> */}
          <form className="search-group" onSubmit={handleOnSubmit}>
            <Container>
              <Row>
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-1">SSN</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    as={MaskInput}
                    maskChar="_"
                    mask="000-00-0000"
                    showMask
                    alwaysShowMask
                    value={searchSSN}
                    onChange={handleOnChangeSSN}
                  />
                </Form.Group>{" "}
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-1">First Name</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    autoFocus="autofocus"
                    placeholder="Search..."
                    value={searchFirstName}
                    onChange={handleOnChangeFirstName}
                  />
                </Form.Group>{" "}
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-1">Last Name</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={searchLastName}
                    onChange={handleOnChangelastName}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  sm={6}
                  md={6}
                  lg={3}
                  className="mb-3"
                  style={{ textAlign: "left" }}
                >
                  <Form.Label className="mb-1">Email</Form.Label>
                  <Form.Control
                    className="p-2"
                    style={{
                      border: "0.25px solid",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    className="search"
                    type="text"
                    placeholder="Search..."
                    value={searchEmail}
                    onChange={handleOnChangeEmail}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Button variant="warning" type="submit">
                  Search
                </Button>
              </Row>
            </Container>
          </form>
          {/* </div> */}
        </Card>
      </div>

      <Table striped bordered hover responsive className="admin-list mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>SSN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {loadingUsers ? (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Users are loading...
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={index}
                onClick={() => handleEdit(user.id)}
                className="cursor-hand"
              >
                <td>{index + 1}</td>
                <td>{user.ssn}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobilePhoneNumber}</td>
                <td>{user.roles.join(" ")}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
