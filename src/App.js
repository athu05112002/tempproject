import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Components/HeaderContainer';
import DiscoverAvailableServicesContainer from './Components/DiscoverAvailableServicesContainer';
import RecommendedServicesContainer from './Components/RecommendedServicesContainer';
import FooterContainer from './Components/FooterContainer';

function App() {
  return (
    <div>
      <HeaderContainer />
      <DiscoverAvailableServicesContainer />
      <RecommendedServicesContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
