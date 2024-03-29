import { useNavigate } from "react-router-dom";
import { useGetFavoriteQuery } from "../../../redux/api/favorite";
import scss from "./Favorite.module.scss";
const Favorite = () => {
	const { data } = useGetFavoriteQuery();
	const navigate = useNavigate();

	return (
		<div className={scss.Favorite}>
			<div className="container">
				<div className={scss.Content}>
					<div className={scss.navBar}>
						<button
							onClick={() => {
								navigate("/");
							}}>
							Назад
						</button>
					</div>
					<div className={scss.productFavorite}>
						{data?.results.map((item) => (
							<div className={scss.card} key={item.id}>
								<h1>{item.title}</h1>
								<img src={item.photo} alt="" />
								<div className={scss.card_content}>
									<div className={scss.left}>
										<h3>{item.price}</h3>
										<p>{item.quantity}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorite;
