import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import PersonFormPage from "./pages/PersonFormPage";
import TravelFormPage from "./pages/TravelFormPage";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/users/:id" element={<TravelPage />} />
						<Route path="/travel/add" element={<TravelFormPage />} />
						<Route path="/users/:id/add" element={<PersonFormPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
