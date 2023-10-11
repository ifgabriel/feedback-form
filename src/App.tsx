import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List, Form } from "./screens";
import { Header } from "./components";

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <div className="py-20">
        <Routes>
          <Route path="/" Component={List} />
          <Route path="/form" Component={Form} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;
