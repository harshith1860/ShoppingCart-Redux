import "./ProductCard.css";

// Import Redux actions from cartSlice
// These actions will be dispatched to update the Redux store
import { add, remove } from "../store/cartSlice";

// useDispatch is used to send actions to Redux store
import { useDispatch } from "react-redux";

// useSelector is used to read data from Redux store
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  // dispatch allows this component to trigger Redux actions
  const dispatch = useDispatch();

  // Reading cartList from Redux store
  // state.cartState comes from the key used in configureStore
  const products = useSelector(state => state.cartState.cartList);

  // Local state to check whether the product exists in cart or not
  // This is UI-related state, not global Redux state
  const [isInCart, setIsInCart] = useState(false);

  // Whenever cartList or product id changes,
  // we check if the current product is present in Redux cart state
  useEffect(() => {
    let productInCart = products.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, product.id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>

      <div className="action">
        <p>${price}</p>

        {/* 
          If product is already in cart:
          - dispatch REMOVE action to Redux store

          If product is not in cart:
          - dispatch ADD action to Redux store
        */}
        {isInCart ? (
          <button
            onClick={() => dispatch(remove(product))}
            className="remove"
          >
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
