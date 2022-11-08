import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

//crumb
//ZX4i8xtDwvBR2tMp


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
