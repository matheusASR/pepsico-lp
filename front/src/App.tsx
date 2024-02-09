import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './globalStyle';
import "react-toastify/dist/ReactToastify.css";
import LandingPage from './LandingPage';

function App() {

  return (
    <>
      <LandingPage/>
      <ToastContainer/>
      <GlobalStyles/>
    </>  
  )

}

export default App
