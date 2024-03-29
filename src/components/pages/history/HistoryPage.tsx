import { useGetHistoryQuery } from "../../../redux/api/history";
import scss from "./HistoryPage.module.scss";

const HistoryPage = () => {
	const { data } = useGetHistoryQuery();
	console.log(data);

	return (
		<div className={scss.History}>
			<div className="container">
				<div className={scss.Content}>
					<div className={scss.navBar}>
						<button
							onClick={() => {
								window.location.href = "/";
							}}>
							Назад
						</button>
					</div>
					<div className={scss.productHistory}>
						{data?.results.map((item, index) => (
							<div className={scss.card}>
								<div>
									<h3>buyer: {item.buyer.name}</h3>
									<h4>buy at: {item.buyer.buyAt}</h4>
									<h4>buyer login: {item.buyer.login}</h4>
								</div>
								<div className={scss.productCard} key={index}>
									<img src={item.product.photo} alt="" />
									<h4>product name: {item.product.title}</h4>
									<p>product price: {item.product.price}</p>
									<p>quantity: {item.product.quantity}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistoryPage;
