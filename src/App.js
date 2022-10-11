import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { RouterProvider } from 'react-router-dom';
import router from './utils/Routs';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
