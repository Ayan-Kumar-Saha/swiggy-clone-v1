import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './MenuItemCategory.css';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
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


const MenuItemCategory = ({ itemCategory, expand, setExpand }) => {

    const { title, itemCards } = itemCategory;

    return (
        <div className='bg-white my-4'>
            <div className='flex justify-between items-center my-2'>
                <span className='text-lg font-bold mt-4'>{title} ({itemCards?.length})</span>
                {
                    expand
                        ? <LuChevronUp className='text-2xl cursor-pointer' onClick={setExpand} />
                        : <LuChevronDown className='text-2xl cursor-pointer' onClick={setExpand} />
                }
            </div>

            <div className='flex flex-col gap-4'>
                {
                    expand && itemCards?.map(item => <MenuItem key={item?.card?.info?.id} {...item?.card?.info} />)
                }
            </div>
        </div>
    );
}


export default MenuItemCategory;