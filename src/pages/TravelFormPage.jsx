export default function TravelFormPage() {
	return (
		<div className="container">
			<form className="mt-5" onSubmit={""}>
				<div className="mb-3">
					<label className="form-label">Città</label>
					<input
						name="destinazione"
						value={""}
						onChange={""}
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Immagine</label>
					<input
						name="destinazione"
						value={""}
						onChange={""}
						type="text"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Nazione</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Luogo di culto</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Data di inizio</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Data di Fine</label>
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
