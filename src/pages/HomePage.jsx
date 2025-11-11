import { useState } from "react";
import TravelList from "../components/TravelList";
import HomeSearchBar from "../components/searchcomponents/HomeSearchBar";

const HomePage = () => {
	const [search, setSearch] = useState("");

	return (
		<div className="container-wide">
			<h1 className="pt-3 text-center">Viaggi disponibili</h1>
			<HomeSearchBar search={search} onSearch={setSearch} />
			<TravelList search={search} />
		</div>
	);
};

export default HomePage;
