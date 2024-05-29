import logo from './logo.svg';
import './App.css';
import Notification from './chapter_06/Notification';
// import Counter from './Counter';
//import FocusButton from './FocusButton';
import FocusButton from './FocusButton';
import LandingPage from './LandingPage';
import NumberList from './NumberList';
import AttendanceBook from './AttendanceBook';
import SignUp from './SignUp';
import BoilingVerdict from './BoilingVerdict';

function App() {
  return (
    <div className="App">
      <BoilingVerdict celsius="109" />
    </div>
  );
}

export default App;
