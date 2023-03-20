import { Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Auth from './component/auth';
import SearchResults from './component/Item_list_artist'





function App() {
  const [input  , setInput] = useState('');
  const [accesstoken , setAccesstoken] = useState('');

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };



  return (
    <>
    <Auth setAccessToken={setAccesstoken}  />
    <Container style={{ margin: '5%' }}>
      <Form>
        <Row className="mb-3" style={{ margin: '5%' }}>
          <Form.Group as={Col}>
            <Form.Label>Artist</Form.Label>
            <Form.Control
            id="artistInput"
            placeholder="Enter Artist name"
            onChange={handleKeyPress}
        /> 
          </Form.Group>
        </Row>
        
      </Form>
      {accesstoken && input && (
        <SearchResults accessToken={accesstoken} query={input} />
      )}
        
    </Container>
    </>
  );
}

export default App;

