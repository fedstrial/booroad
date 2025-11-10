import { useState } from "react";

export default function SinglePerson({ person }) {
	const [isOpen, setIsOpen] = useState(false);

	function showDetails() {
		setIsOpen(!isOpen);
	}

	const telLink = `tel:${person.telefono}`; // link diretto alla chiamata
	const mailLink = `mailto:${person.email}`; // link diretto alla chiamata

	return (
		<div
			onClick={showDetails}
			className="gap-3 mb-3 p-3 bg-light border rounded pointer"
		>
			<h2>
				{person.nome} {person.cognome}
			</h2>
			{isOpen && (
				<div className="accordion-appear">
					<h5>
						<a href={mailLink}>
							Email: <span className="text-info">{person.email}</span>
						</a>
					</h5>
					<h5>
						<a href={telLink}>
							Telefono: <span className="text-info">{person.telefono}</span>
						</a>
					</h5>
					<h5>CF: {person.CF}</h5>
				</div>
			)}
		</div>
	);
}
