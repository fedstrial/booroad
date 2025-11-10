import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import viaggi from "../data/viaggi";

export default function PersonFormPage() {
	const arrayID = useParams();
	const listaPartecipanti = viaggi[arrayID.id - 1].partecipanti;

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		id: listaPartecipanti[listaPartecipanti.length - 1].id + 1,
		nome: "",
		cognome: "",
		email: "",
		telefono: "",
		CF: "",
	});

	function handleFormData(e) {
		const value = e.target.value;
		setFormData({ ...formData, [e.target.name]: value });
	}

	function formSubmit(e) {
		e.preventDefault();
		viaggi[arrayID.id - 1].partecipanti.push(formData);
		navigate(-1);
	}

	return (
		<>
			<div className="container">
				<form className="mt-5" onSubmit={formSubmit}>
					<div className="mb-3">
						<label className="form-label">Nome</label>
						<input
							name="nome"
							value={formData.nome}
							onChange={handleFormData}
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Cognome</label>
						<input
							name="cognome"
							value={formData.cognome}
							onChange={handleFormData}
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input
							name="email"
							value={formData.email}
							onChange={handleFormData}
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Telefono</label>
						<input
							name="telefono"
							value={formData.telefono}
							onChange={handleFormData}
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">CF</label>
						<input
							name="CF"
							value={formData.CF}
							onChange={handleFormData}
							type="text"
							className="form-control"
							aria-describedby="emailHelp"
							required
						/>
					</div>
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
