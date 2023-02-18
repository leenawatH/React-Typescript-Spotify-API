import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SetStateAction, useEffect , useState} from 'react';
import Card from './component/Card';
import Auth from './component/auth';
import SearchResults from './component/Item_list_artist'

const CLIENT_ID = 'c9229c368b5f4a95bab7b83236096d97';
const SECRET_ID = '53cd4795d5ee468a970982ffe1c371d7';



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

