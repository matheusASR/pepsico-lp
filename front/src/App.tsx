import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './globalStyle';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <GlobalStyles />
      <ToastContainer/>
    </>
  )
}

export default App
