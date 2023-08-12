import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1450px; /* Adjust this value based on your design */
  margin: 0 auto; /* Center the container horizontally */
  padding: 0px 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px -20px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  color: white;
 
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 120px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 40px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  background-color: black;
  color: white;
  border: solid;
  border-radius: 15px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
