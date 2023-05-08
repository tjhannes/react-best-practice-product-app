const CartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return [...state, action.payload];

    case "remove_from_cart":
      return [...state.filter((item) => item.id !== action.payload.id)];

    default:
      return state;
  }
};

export default CartReducer;
