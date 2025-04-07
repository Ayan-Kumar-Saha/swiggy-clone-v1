import { useSelector } from "react-redux";
import MenuItem from '../MenuItem/MenuItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <>
            <h1 className='text-3xl font-bold mb-4'>Cart</h1>
            <div className='flex flex-col gap-4'>
                {
                    cartItems?.map(item => <MenuItem key={item?.id} {...item} />)
                }
            </div>
        </>

    )
}

export default Cart;