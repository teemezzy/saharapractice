import { Sahara } from "./pages";
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function App() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Sahara/>
    </div>
  );
}

export default App;
