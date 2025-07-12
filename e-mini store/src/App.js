import Header from "./components/Header";
import Home from "./pages/Home";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Home />
      </div>
    </StoreProvider>
  );
}

export default App;
