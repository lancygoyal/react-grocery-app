import { cartCollection } from "../config/firebase";

const initialState = {
  data: {}
};
let unsubscribe = null;

export type CartState = Readonly<typeof initialState>;

export const Types = {
  FETCH_CART: "FETCH_CART",
  RESET: "RESET"
};

// REDUCERS
export default (state: CartState = initialState, action): CartState => {
  switch (action.type) {
    case Types.FETCH_CART:
      return { data: action.payload };
    case Types.RESET: {
      unsubscribe = null;
      return initialState;
    }
    default:
      return state;
  }
};

// ACTIONS
export const setCart = payload => {
  return { type: Types.FETCH_CART, payload };
};

export const fetchCart = () => async (dispatch, getState) => {
  const { user } = getState();
  unsubscribe =
    !unsubscribe &&
    cartCollection.doc(user.data.uid).onSnapshot(doc => {
      let data = doc.data();
      if (data) {
        data.id = doc.id;
        dispatch(setCart(data));
      }
    });
};
