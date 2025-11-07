import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
function App() {
	return (
		<>
			<BrowserRouter>
				<Router>
					<Route element={<DefaultLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/users" element={<TravelPage />} />
					</Route>
				</Router>
			</BrowserRouter>
		</>
	);
}

export default App;
