// TravelList.jsx
import { useState, useEffect } from "react";
import viaggi from "../data/viaggi";
import SingleTravel from "./SingleTravel";

const TravelList = ({ search }) => {
	const [visibleCount, setVisibleCount] = useState(10);

	useEffect(() => {
		setVisibleCount(10);
	}, [search]);
	const query = (search || "").toLowerCase().trim();
	const filteredViaggi = viaggi.filter((t) =>
		`${t.nazione} ${t.destinazione}`.toLowerCase().includes(query),
	);
	const displayedViaggi = filteredViaggi.slice(0, visibleCount);

	return (
		<div className="container-wide d-flex flex-wrap gap-5 pb-5 justify-content-center align-items-stretch">
			{displayedViaggi.length === 0 ? (
				<p>Nessun viaggio trovato corrispondente alla tua ricerca.</p>
			) : (
				<>
					{displayedViaggi.map((trav) => (
						<SingleTravel key={trav.id} trav={trav} />
					))}
					{filteredViaggi.length > visibleCount && (
						<div className="w-100 d-flex justify-content-center mt-2 pb-5">
							<button
								className="btn btn-danger"
								onClick={() => setVisibleCount((prev) => prev + 10)}
							>
								Carica altri
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default TravelList;
