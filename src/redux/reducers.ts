import { combineReducers } from "redux";
import product, { ProductState } from "./products";
import user, { UserState } from "./user";
import cart, { CartState } from "./cart";

export interface IRootState {
  readonly user: UserState;
  readonly product: ProductState;
  readonly cart: CartState;
}

const rootReducer = combineReducers<IRootState>({
  user,
  product,
  cart
});

export default rootReducer;
