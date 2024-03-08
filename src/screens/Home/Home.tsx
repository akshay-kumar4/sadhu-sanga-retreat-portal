import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100 ">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
