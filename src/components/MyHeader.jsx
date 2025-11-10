import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MyHeader() {
	const location = useLocation();
	const isHomepage = location.pathname === "/";
	const isTravelPage = /^\/users\/\d+$/.test(location.pathname);
	const idPageAdd =
		"users/" + location.pathname.substring("/users/".length) + "/add";

	const isAddPage = location.pathname.endsWith("add");
	const navigate = useNavigate();
	return (
		<header>
			<div className="container-wide py-1 d-flex justify-content-between align-items-center">
				<Link to="/">
					<img src={logo} alt="BooRoad" id="logo" />
				</Link>
				<div>
					{isHomepage && (
						<div>
							<Link to="travel/add" className="btn btn-success m-5">
								Aggiungi un viaggio
							</Link>
						</div>
					)}
					{isTravelPage && (
						<div className="d-flex gap-3">
							<Link to={idPageAdd} className="btn btn-success">
								Aggiungi un partecipante
							</Link>
							<Link to="/" className="btn btn-success">
								Torna alla Homepage
							</Link>
						</div>
					)}
					{isAddPage && (
						<div>
							<button onClick={() => navigate(-1)} className="btn btn-success">
								Torna indietro
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
