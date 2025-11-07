import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/users" element={<TravelPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
