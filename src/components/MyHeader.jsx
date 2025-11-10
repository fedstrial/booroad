import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MyHeader() {
	const location = useLocation();
	const isHomepage = location.pathname === "/";
	const isTravelPage = /^\/users\/\d+$/.test(location.pathname);
	const isAddPage = location.pathname.endsWith("add");
	const navigate = useNavigate();
	return (
		<header className="bg-light">
			<div className="container-wide py-1 d-flex justify-content-between align-items-center">
				<Link to="/">
					<img
						src={logo}
						alt="BooRoad"
						style={{ height: "300px", width: "300px" }}
					/>
				</Link>
				<div>
					{isHomepage && (
						<div>
							<Link to="travel/add" className="btn btn-primary m-5">
								Aggiungi un viaggio
							</Link>
						</div>
					)}
					{isTravelPage && (
						<div>
							<Link to="users/add" className="btn btn-primary m-5">
								Aggiungi un partecipante
							</Link>
							<Link to="/" className="btn btn-primary">
								Torna alla Homepage
							</Link>
						</div>
					)}
					{isAddPage && (
						<div>
							<button onClick={() => navigate(-1)} className="btn btn-primary">
								Torna indietro
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
