import './App.css';
import { ReactBingmaps } from 'react-bingmaps';
import Input from '@material-ui/core/Input';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
          <h3>
          Coordinates form
            </h3>
        <span>
          Add by cords
        </span>
        <Input/>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
          <ReactBingmaps 
              id = "one"
              bingmapKey = "AjanoEGdVcD_Kj5XrRqHydJa2dOVszqIyvIJ9_yZBE-KWg17TNqyRixe9n2sltX4"
              center = {[13.0827, 80.2707]}
              zoom = {4}
              className = "customClass"
            > 
            </ReactBingmaps>
          </Col>
          </Row>
    </div>
  );
}

export default App;
