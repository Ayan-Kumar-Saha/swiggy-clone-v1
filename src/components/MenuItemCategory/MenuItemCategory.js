import MenuItem from '../MenuItem/MenuItem';
import './MenuItemCategory.css';
import { LuChevronDown } from 'react-icons/lu';
import { ShimmerMenuItem } from '../MenuItem/MenuItem';


export const ShimmerMenuItemCategory = () => {
    return (
        <div className='bg-white py-4 animate-pulse'>
            <div className='flex justify-between items-center mb-4'>
                <span className='h-4 w-1/3 bg-gray-200'></span>
                <span className='h-4 w-1/3'></span>
            </div>

            <div className='flex flex-col gap-4'>
                {
                    Array.from({ length: 4 }, (_, index) => <ShimmerMenuItem key={index} />)
                }
            </div>
        </div>
    );
}


const MenuItemCategory = (itemCategory) => {

    const { title, itemCards } = itemCategory;

    return (
        <div className='bg-white py-4'>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-lg font-bold'>{title} ({itemCards?.length})</span>
                <LuChevronDown className='text-2xl cursor-pointer' />
            </div>

            <div className='flex flex-col gap-4'>
                {
                    itemCards?.map(item => <MenuItem key={item?.card?.info?.id} {...item?.card?.info} />)
                }
            </div>
        </div>
    );
}


export default MenuItemCategory;