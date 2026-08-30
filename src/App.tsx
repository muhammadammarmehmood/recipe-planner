import './App.css'
import { Recipes } from './components/Recipes/Recipes'
import CuisineOnboarding from './components/UserCuisinePreference/CuisineOnBoarding';
import { useCuisinePreference } from './components/UserCuisinePreference/UserCuisinePreference';

function App() {
  const { preference, savePreference } = useCuisinePreference();
  if (preference == null) {
    return <CuisineOnboarding onSelect={savePreference}></CuisineOnboarding>
  }

    return (
      <>
        <Recipes></Recipes>
      </>
    )
}

export default App
