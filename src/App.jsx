import Hero from "./components/HeroModal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<main>
				<Hero />
			</main>
		</>
	);
}

export default App;
