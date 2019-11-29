import { productsCollection } from "../config/firebase";

const initialState = {
  data: []
};
let unsubscribe = null;

export type ProductState = Readonly<typeof initialState>;

export const Types = {
  FETCH_PRODUCT: "FETCH_PRODUCT",
  RESET: "RESET"
};

// REDUCERS
export default (state: ProductState = initialState, action): ProductState => {
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      return { data: [...state.data, action.payload] };
    case Types.RESET: {
      unsubscribe = null;
      return initialState;
    }
    default:
      return state;
  }
};

// ACTIONS
export const setProduct = payload => {
  return { type: Types.FETCH_PRODUCT, payload };
};

export const fetchProducts = () => async dispatch => {
  unsubscribe =
    !unsubscribe &&
    productsCollection.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        dispatch(setProduct(data));
      });
    });
};
