import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MyHeader() {
	const location = useLocation();

	return (
		<header className="bg-light">
			<div className="container-wide py-1 d-flex justify-content-between align-items-center">
					<Link to="/"><img src={logo} alt="BooRoad" style={{ height: '300px', width: '300px' }} /></Link>
				{location.pathname === "/users" && (
					<Link to="/" className="btn btn-primary">
						Torna alla Homepage
					</Link>
				)}
			</div>
		</header>
	);
}
