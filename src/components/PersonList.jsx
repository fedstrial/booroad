import { useParams } from "react-router-dom";
import viaggi from "../data/viaggi";
import SinglePerson from "./SinglePerson";

const PersonList = ({ search }) => {
	const { id } = useParams();
	const viaggio = viaggi.find((v) => v.id === Number(id));
	const partecipanti = viaggio ? viaggio.partecipanti || [] : [];
	const query = (search || "").toLowerCase().trim();
	const filteredPartecipanti = partecipanti.filter((t) =>
		`${t.nome} ${t.cognome}`.toLowerCase().includes(query),
	);
	return (
		<div className="container-wide">
			{filteredPartecipanti.map((person) => (
				<SinglePerson key={person.id} person={person} />
			))}
		</div>
	);
};

export default PersonList;
