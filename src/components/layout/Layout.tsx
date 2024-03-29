import Favorite from "../pages/favorite/Favorite";
import HistoryPage from "../pages/history/HistoryPage";
import Home from "../pages/home/Home";
import Basket from "../pages/inBasket/Basket";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/history" element={<HistoryPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
