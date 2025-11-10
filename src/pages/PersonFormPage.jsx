export default function PersonFormPage() {
	return (
		<div className="container">
			<form className="mt-5">
				<div className="mb-3">
					<label className="form-label">Nome</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Cognome</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Numero di telefono</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Codice Fiscale</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
