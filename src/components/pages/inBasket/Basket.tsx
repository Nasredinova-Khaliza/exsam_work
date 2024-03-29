import { useNavigate } from "react-router-dom";
import scss from "./Basket.module.scss";
import { useGetBasketQuery } from "../../../redux/api/basket";
import { useBuyProductMutation } from "../../../redux/api/history";
const Basket = () => {
	const { data, refetch } = useGetBasketQuery();
	const navigate = useNavigate();
	const [buyProducts] = useBuyProductMutation();

	const buyProduct = async (id: number) => {
		const newData = {
			buyQuantity: 1,
		};
		await buyProducts({ newData, id });
		refetch();
	};

	return (
		<div className={scss.Basket}>
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
					<div className={scss.productBasket}>
						{data?.results.map((item) => (
							<div className={scss.card} key={item.id}>
								<h1>{item.title}</h1>
								<img src={item.photo} alt="" />
								<div className={scss.card_content}>
									<div className={scss.left}>
										<h3> Цена: {item.price}</h3>
										<p> Количество: {item.quantity}</p>
									</div>
								</div>
								<button onClick={() => buyProduct(item.id)}>Купит</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Basket;
