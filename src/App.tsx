import './App.css'
import { Home } from './components/Home';
import CuisineOnboarding from './components/UserCuisinePreference/CuisineOnBoarding';
import { useCuisinePreference } from './components/UserCuisinePreference/UserCuisinePreference';

function App() {
  const { preference, savePreference } = useCuisinePreference();
  if (preference == null) {
    return <CuisineOnboarding onSelect={savePreference}></CuisineOnboarding>
  }

    return (
      <>
        <Home></Home>
      </>
    )
}

export default App
