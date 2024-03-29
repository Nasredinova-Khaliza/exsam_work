import { useGetMeQuery } from "../../../redux/api/auth";
import scss from "./Header.module.scss";
import favorite from "../../../assets/favorite-svgrepo-com.svg";
import basket from "../../../assets/bg_basket.svg";
import history from "../../../assets/history.png";
import { Link } from "react-router-dom";
const Header = () => {
	const { data } = useGetMeQuery();
	console.log(data);

	const GoogleLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/google`,
			"_self"
		);
	};
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.Content}>
					<nav>
						<div className={scss.left}></div>
						<div className={scss.Right}>
							<Link to={"/favorite"}>
								<img src={favorite} alt="" />
							</Link>
							<Link to={"/basket"}>
								<img src={basket} alt="" />
							</Link>
							<Link to={"/history"}>
								<img src={history} alt="" />
							</Link>
						</div>
					</nav>
					<button onClick={GoogleLogin}>GoogleAuth</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
