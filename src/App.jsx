import Background from "./components/Background";
import ExecuteJS from "./components/ExecuteJS";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#000] min-h-screen text-white   relative">
      <Background />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <ExecuteJS />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
