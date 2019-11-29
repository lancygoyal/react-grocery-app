const initialState = {
  isLogin: false,
  data: null
};

export type UserState = Readonly<typeof initialState>;

export const Types = {
  SET_USER: "SET_USER",
  RESET: "RESET"
};

// REDUCERS
export default (state: UserState = initialState, action): UserState => {
  switch (action.type) {
    case Types.SET_USER:
      return { isLogin: action.payload ? true : false, data: action.payload };
    case Types.RESET:
      return initialState;
    default:
      return state;
  }
};

// ACTIONS
export const setUser = payload => {
  return { type: Types.SET_USER, payload };
};
