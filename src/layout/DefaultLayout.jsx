import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";

export default function DefaultLayout() {
	return (
		<>
			<MyHeader />
			<main className="mb-5">
				<Outlet />
			</main>
		</>
	);
}
