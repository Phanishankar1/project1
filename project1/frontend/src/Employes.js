import React, { useState } from 'react';
import Employeedata from './Employeedata';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Employes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
    filterData(event.target.value);
  };

  // Function to filter data based on search query
  const filterData = query => {
    const filtered = Employeedata.filter(employee =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Row className='mainEmp' style={{padding:"60px"}}>
        <div className='row bg-light'>
          <div className='col-md-5'></div>
          <div className='col-md-2 bg-light p-4 '>
            <input
              type="search"
              className='text-center'
              placeholder='Search here'
              onChange={handleSearchInputChange}
            />
          </div>
          <div className='col-md-1 p-4'>
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
        {filteredData.length > 0 ? (
          filteredData.map(employee => (
            <Col key={employee.name} xs={12} sm={6} md={4} className='mb-4'>
              <Link to={`/employes/${employee.name}`} className='p1 un'>
                <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
                  <Card.Img variant="top" src={employee.photo} />
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>{employee.name}</h4>
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          Employeedata.map(employee => (
            <Col key={employee.name} xs={12} sm={6} md={4} className='mb-4'>
              <Link to={`/employes/${employee.name}`} className='p1 un'>
                <Card style={{ width: '18rem' }} id="o" className='enlarge-image  image-container' >
                  <Card.Img variant="top" src={employee.photo} />
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>{employee.name}</h4>
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default Employes;
