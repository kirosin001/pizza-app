import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import {
  Link,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Menu } from "./pages/menu/Menu";
import { Cart } from "./pages/cart/Cart";
import { Error } from "./pages/error/Error";
// import { Menu } from './pages/menu/Menu'
// import { Cart } from './pages/cart/Cart'
// import { Error } from './pages/error/Error'


function App() {
  const [counter, setCounter] = useState<number>(0);
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="Email" />
      
      {/* <Routes>
        <Route path='/' element={<Menu/>} /> ///старая версия , также убрать в main.tsx brouserRouter
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />

      </Routes> */}
    </>
  );
}

export default App;
