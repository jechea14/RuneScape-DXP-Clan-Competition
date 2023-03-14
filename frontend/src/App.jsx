import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
