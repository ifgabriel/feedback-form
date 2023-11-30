import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List, Form } from "./screens";
import { Header } from "./components";
import { QueryClientProvider, QueryClient } from  "react-query"

const queryCLient = new QueryClient
const App = () => (
  <QueryClientProvider client={queryCLient}>
    <BrowserRouter>
      <Header />
      <div className="py-20">
        <Routes>
          <Route path="/" Component={List} />
          <Route path="/form" Component={Form} />
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
