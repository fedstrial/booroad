import { useLocation, Link, useNavigate } from "react-router-dom";
import logoBig from "../assets/BoolRoad.png";
import logoSmall from "../assets/BR-favicon.png";

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
			<div className="container-wide py-4 py-1 d-flex justify-content-between align-items-center">
				<Link to="/">
					<img src={logoBig} alt="BooRoad" id="logo" className="d-none d-md-block img-fluid logo-desktop"/>
					<img src={logoSmall} alt="BooRoad" id="logo" className="d-block d-md-none img-fluid logo-mobile"/>
				</Link>
				<div>
					{isHomepage && (
						<div>
							<Link to="travel/add" className="btn btn-danger">
								Aggiungi un viaggio
							</Link>
						</div>
					)}
					{isTravelPage && (
						<div className="d-flex gap-3">
							<Link to={idPageAdd} className="btn btn-danger">
								Aggiungi un partecipante
							</Link>
							<Link to="/" className="btn btn-danger">
								Torna alla Homepage
							</Link>
						</div>
					)}
					{isAddPage && (
						<div>
							<button onClick={() => navigate(-1)} className="btn btn-danger">
								Torna indietro
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
