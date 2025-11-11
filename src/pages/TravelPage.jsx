import { useState } from "react";
import PersonList from "../components/PersonList";
import PersonsSearchBar from "../components/searchcomponents/PersonsSearchBar";

const TravelPage = () => {
	const [search, setSearch] = useState("");

	return (
		<>
			<div className="container-wide d-flex flex-wrap justify-content-center">
				<h1 className="pt-3">Partecipanti al viaggio</h1>
				<PersonsSearchBar search={search} onSearch={setSearch} />
				<PersonList search={search} />
			</div>
		</>
	);
};

export default TravelPage;
