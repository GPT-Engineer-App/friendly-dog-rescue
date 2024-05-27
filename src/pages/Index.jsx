import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaDog, FaHome, FaInfo, FaPhone, FaHeart, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <Container centerContent>
    <Heading>Welcome to Dog Rescue</Heading>
    <Text>We help find loving homes for dogs in need.</Text>
    <Image src="https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3MTY4MTEyMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Dog" />
  </Container>
);

const About = () => (
  <Container centerContent>
    <Heading>About Us</Heading>
    <Text>We are a non-profit organization dedicated to rescuing dogs.</Text>
    <Image src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2clMjByZXNjdWUlMjB0ZWFtfGVufDB8fHx8MTcxNjgxMTIyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dog Rescue Team" />
  </Container>
);

const Dogs = () => (
  <Container centerContent>
    <Heading>Our Dogs</Heading>
    <Text>Meet the dogs available for adoption.</Text>
    <Image src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2dzJTIwZm9yJTIwYWRvcHRpb258ZW58MHx8fHwxNzE2ODExMjI0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dogs for Adoption" />
  </Container>
);

const Volunteer = () => (
  <Container centerContent>
    <Heading>Volunteer</Heading>
    <Text>Join our team and help us rescue more dogs.</Text>
    <Image src="https://images.unsplash.com/photo-1541532108062-73f2181a08c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB3aXRoJTIwZG9nc3xlbnwwfHx8fDE3MTY4MTEyMjR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Volunteer with Dogs" />
  </Container>
);

const Contact = () => (
  <Container centerContent>
    <Heading>Contact Us</Heading>
    <Text>Get in touch with us for more information.</Text>
    <Image src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzE2ODExMjI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Contact Us" />
  </Container>
);

const Donate = () => (
  <Container centerContent>
    <Heading>Donate</Heading>
    <Text>Your donations help us save more dogs.</Text>
    <Image src="https://images.unsplash.com/photo-1550206574-42cfa61e2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb25hdGUlMjBmb3IlMjBkb2dzfGVufDB8fHx8MTcxNjgxMTIyNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Donate for Dogs" />
  </Container>
);

const Navbar = () => (
  <HStack spacing={4} padding={4} bg="teal.500" color="white">
    <IconButton as={Link} to="/" aria-label="Home" icon={<FaHome />} />
    <IconButton as={Link} to="/about" aria-label="About" icon={<FaInfo />} />
    <IconButton as={Link} to="/dogs" aria-label="Dogs" icon={<FaDog />} />
    <IconButton as={Link} to="/volunteer" aria-label="Volunteer" icon={<FaHeart />} />
    <IconButton as={Link} to="/contact" aria-label="Contact" icon={<FaPhone />} />
    <IconButton as={Link} to="/donate" aria-label="Donate" icon={<FaEnvelope />} />
  </HStack>
);

const Index = () => {
  return (
    <Router>
      <Navbar />
      <Container maxW="container.md" py={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Index;
