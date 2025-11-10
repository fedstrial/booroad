const PersonsSearchBar = ({ search, onSearch }) => {
	const handleChange = (e) => {
		const value = e.target.value;
		onSearch(value);
	};

	return (
		<div className="container-wide input-group flex-nowrap mb-5 mt-5">
			<span className="input-group-text" id="addon-wrapping">
				🔎
			</span>
			<input
				value={search}
				onChange={handleChange}
				type="text"
				className="form-control"
				placeholder="Cerca partecipante..."
				aria-label="Search"
				aria-describedby="addon-wrapping"
			/>
		</div>
	);
};

export default PersonsSearchBar;
