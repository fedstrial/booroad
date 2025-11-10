const HomeSearchBar = ({ search, onSearch }) => {
	const handleChange = (e) => {
		const value = e.target.value;
		onSearch(value);
	};

	return (
		<div className="container-wide input-group flex-nowrap mb-4 mt-4">
			<span className="input-group-text" id="addon-wrapping">
				🔎
			</span>
			<input
				value={search}
				onChange={handleChange}
				type="text"
				className="form-control"
				placeholder="Cerca Viaggio.."
				aria-label="Search"
				aria-describedby="addon-wrapping"
			/>
		</div>
	);
};

export default HomeSearchBar;
