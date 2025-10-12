import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {


  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <Header />
         <Home />
      <Footer />
    </div>
  );
}

export default App;
