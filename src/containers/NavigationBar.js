import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeCategoryName } from '../redux/itemDetailsReducer';

const NavigationBar = () => {
  const dispatch = useDispatch();
  return (
    <Navbar sticky="top" bg="dark" expand="lg" className="my-3" variant="dark">
      <Navbar.Brand href="/" className="text-info">
        SIBYMeals
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => dispatch(changeCategoryName('Breakfast'))}
            href={'\\categories\\Breakfast'}
          >
            Breakfast
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeCategoryName('Dessert'))}
            href={'\\categories\\Dessert'}
          >
            Dessert
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeCategoryName('Starter'))}
            href={'\\categories\\Starter'}
          >
            Starter
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(changeCategoryName('Pasta'))}
            href={'\\categories\\Pasta'}
          >
            Pasta
          </Nav.Link>
          <NavDropdown title="Filter by Category" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Beef'))}
              href={'\\categories\\Beef'}
            >
              Beef
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Chicken'))}
              href={'\\categories\\Chicken'}
            >
              Chicken
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Pork'))}
              href={'\\categories\\Pork'}
            >
              Pork
            </NavDropdown.Item>

            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Miscellaneous'))}
              href={'\\categories\\Miscellaneous'}
            >
              Miscellaneous
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Lamb'))}
              href={'\\categories\\Lamb'}
            >
              Lamb
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Seafood'))}
              href={'\\categories\\Seafood'}
            >
              Seafood
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Side'))}
              href={'\\categories\\Side'}
            >
              Side
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Vegan'))}
              href={'\\categories\\Vegan'}
            >
              Vegan
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Vegetarian'))}
              href={'\\categories\\Vegetarian'}
            >
              Vegetarian
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => dispatch(changeCategoryName('Goat'))}
              href={'\\categories\\Goat'}
            >
              Goat
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
