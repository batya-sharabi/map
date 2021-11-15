import './App.css';
import { ReactBingmaps } from 'react-bingmaps';
import Input from '@material-ui/core/Input';

function App() {
  return (
    <div className="App">
        <div className = "map-one">
          
          <h3>
          Coordinates form
            </h3>
        <span>
          Add by cords
        </span>
        <Input/>
        <Input/>
            <ReactBingmaps 
              id = "one"
              bingmapKey = "AjanoEGdVcD_Kj5XrRqHydJa2dOVszqIyvIJ9_yZBE-KWg17TNqyRixe9n2sltX4"
              center = {[13.0827, 80.2707]}
              zoom = {4}
              className = "customClass"
            > 
            </ReactBingmaps>
          </div>
    </div>
  );
}

export default App;
