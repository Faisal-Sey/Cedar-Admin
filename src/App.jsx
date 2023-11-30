import {Route, Routes} from "react-router-dom";

import LoginPage from "./screens/login/index.jsx";
// import Home from "./screens/home/index.jsx";
import Invoices from "./screens/invoices/index.jsx";
import AddInvoice from "./screens/invoices/addInvoice.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
        <Route path="/add-invoice" element={<AddInvoice/>}/>
        {/*<Route path="/reports" element={<Reports/>}/>*/}
        {/*<Route path="/profile" element={<Home/>}/>*/}
      </Routes>
  )
}

export default App
