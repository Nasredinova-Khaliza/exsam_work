import { useState } from "react";
import scss from "./Home.module.scss";
import {
  useGetProductsQuery,
  usePostProductMutation,
} from "../../../redux/api/product";
import favorite from "../../../assets/favorite-svgrepo-com.svg";
import bg_favoite from "../../../assets/bg_favorite.svg";
import basket from "../../../assets/basket-svgrepo-com.svg";
import { useFavoriteMutation } from "../../../redux/api/favorite";
import { useBasketPatchMutation } from "../../../redux/api/basket";

const Home = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [favoriteId, setFavoriteId] = useState<null | number>(null);

  const [createProduct] = usePostProductMutation();
  const { data, refetch } = useGetProductsQuery();
  const [favoriteProduct] = useFavoriteMutation();
  const [basketProduct] = useBasketPatchMutation();

  const handleAddProduct = async () => {
    const newData = {
      title,
      photo,
      price,
      quantity,
    };
    await createProduct(newData);
    setTitle("");
    setPrice(0);
    setPhoto("");
    setQuantity(0);
  };

  const handleChangeFavorite = async (id: number) => {
    await favoriteProduct(id);
    refetch();
    setFavoriteId(id);
  };

  const handleChangeBasket = async (id: number) => {
    await basketProduct(id);
  };

  return (
    <div className={scss.Home}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.Forms}>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={price}
              placeholder="price"
              onChange={(e) => setPrice(+e.target.value)}
            />
            <input
              type="text"
              value={photo}
              placeholder="image"
              onChange={(e) => setPhoto(e.target.value)}
            />
            <input
              type="text"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button onClick={handleAddProduct}>add product</button>
          </div>
          <div className={scss.rendering}>
            {data?.results.map((item) => (
              <div className={scss.card} key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.photo} alt="" />
                <div className={scss.card_content}>
                  <div className={scss.left}>
                    <h3>{item.price}</h3>
                    <p>{item.quantity}</p>
                  </div>
                  <div className={scss.right}>
                    {item.isFavorite || item.id === favoriteId ? (
                      <>
                        <img
                          src={bg_favoite}
                          onClick={() => {
                            handleChangeFavorite(item.id);
                            setFavoriteId(null);
                            refetch();
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          onClick={() => {
                            handleChangeFavorite(item.id);
                            setFavoriteId(null);
                            refetch();
                          }}
                          src={favorite}
                          alt=""
                        />
                      </>
                    )}
                    <img
                      src={basket}
                      alt=""
                      onClick={() => {
                        handleChangeBasket(item.id);
                      }}
                    />
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

export default Home;
