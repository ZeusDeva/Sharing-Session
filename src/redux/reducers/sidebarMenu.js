export const initialState = {selectedKey: "1"}; // to init value sidebar menu to first menu

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_MENU_SIDEBAR":
			return { ...state, selectedKey: action?.payload};

		default:
			return state;
	}
};
export default reducer;