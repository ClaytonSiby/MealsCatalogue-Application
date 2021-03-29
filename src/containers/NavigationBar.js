import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeCategoryName } from '../redux/itemDetailsReducer';

const NavigationBar = () => {
  const [CATEGORIES] = useState([
    'Breakfast',
    'Dessert',
    'Starter',
    'Pasta',
  ]);
  const [DROPDOWNCATEGORIES] = useState([
    'Beef',
    'Chicken',
    'Pork',
    'Miscellaneous',
    'Lamb',
    'Seafood',
    'Side',
    'Vegan',
    'Vegetarian',
    'Goat',
  ]);
  const dispatch = useDispatch();
  return (
    <Navbar sticky="top" bg="dark" expand="lg" className="my-3" variant="dark">
      <Navbar.Brand href="/" className="text-info">
        SIBYMeals
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {CATEGORIES.map((category) => (
            <Nav.Link
              key={Math.floor(Math.random() * 100)}
              onClick={() => dispatch(changeCategoryName(category))}
              href={`\\categories\\${category}`}
            >
              {category}
            </Nav.Link>
          ))}
          <NavDropdown title="Filter by Category" id="basic-nav-dropdown">
            {DROPDOWNCATEGORIES.map((category) => (
              <NavDropdown.Item
                key={Math.floor(Math.random() * 100)}
                onClick={() => dispatch(changeCategoryName(category))}
                href={`\\categories\\${category}`}
              >
                {' '}
                {category}
                {' '}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/feedback">Feedback</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
