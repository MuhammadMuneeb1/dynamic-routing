import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SwitchComp from './SwitchComp';

function App(){
      const [users, setUsers] = useState([]);
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
        result.json().then((res) => {
          setUsers(res);
        });
      });
      }, []);
      return(
      <div className="App bg-dark">
        <h1>Get Method Api - React</h1><br /> 
        <SwitchComp />
        <Table bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
            </thead>
            <tbody>
            {
              users.map((curVal, index) => {
                return(
                <React.Fragment key={index}>
                <tr>
                  <td>{curVal.id}</td>
                  <Link to={`/user/${curVal.id}/${curVal.name}/${curVal.username}/${curVal.email}/${curVal.address.street + " " + curVal.address.suite + " " + curVal.address.city + " " + curVal.address.zipcode + " " + curVal.address.geo.lat + " " + curVal.address.geo.lng}/${curVal.phone}/${curVal.website}/${curVal.company.name + " " + curVal.company.catchPhrase + " " + curVal.company.bs}`}><td>{curVal.name}</td></Link>
                  <td>{curVal.username}</td>
                  <td>{curVal.email}</td> 
                  <td>
                        <Table responsive striped variant="dark">
                            <thead>
                              <tr>
                                <th>Street</th>
                                <th>Suite</th>
                                <th>City</th>
                                <th>Zipcode</th>
                                <th>
                                          <thead>
                                              <tr>
                                                  <th>Geolocation</th>  
                                              </tr>
                                          </thead>
                                          <Table striped bordered variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th>Latitude</th>
                                                        <th>Longitude</th>
                                                    </tr>      
                                                </thead>
                                          </Table>
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{curVal.address.street}</td>
                                    <td>{curVal.address.suite}</td>
                                    <td>{curVal.address.city}</td>
                                    <td>{curVal.address.zipcode}</td>
                                    <td>
                                        <Table responsive striped variant="dark">
                                            <tbody>
                                                  <tr>
                                                      <td>{curVal.address.geo.lat}</td>
                                                      <td>{curVal.address.geo.lng}</td>
                                                  </tr>
                                            </tbody>
                                        </Table> 
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                  </td> 
                  <td>{curVal.phone}</td>
                  <td>{curVal.website}</td>
                  <td>
                      <Table responsive striped variant="dark">
                              <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>CatchPhrase</th>
                                          <th>bs</th>
                                      </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                        <td>{curVal.company.name}</td>
                                        <td>{curVal.company.catchPhrase}</td>
                                        <td>{curVal.company.bs}</td>
                                    </tr>
                              </tbody>
                      </Table>
                  </td>
                </tr>
                </React.Fragment>
                )
              })
            }
          </tbody>  
        </Table>    
      </div>
      );
    };

export default App;    