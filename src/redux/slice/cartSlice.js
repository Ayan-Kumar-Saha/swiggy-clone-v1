import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItemAction: (state, action) => {
            const { id, name, imageId, price } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity = (state.items[itemIndex].quantity || 0) + 1;
            } else {
                state.items.push({ id, name, imageId, price, quantity: 1 });
            }
        },
        removeItemAction: (state, action) => {
            const { id, name, imageId, price } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity = state.items[itemIndex].quantity - 1;

                if (state.items[itemIndex].quantity <= 0) {
                    state.items.splice(itemIndex, 1)
                }
            }
        },
        clearCartAction: (state) => {
            state.items = []
        }
    }
})

export const { addItemAction, removeItemAction, clearCartAction } = cartSlice.actions;

export default cartSlice.reducer;