import { CLOUDINARY_IMAGE_BASE_URL } from '../../utils/constants';
import './MenuItem.css';
import { HiStar } from 'react-icons/hi'


export const ShimmerMenuItem = () => {
    return (
        <>
            <div className='w-full flex justify-between items-center my-4 animate-pulse'>
                <div className='flex flex-col justify-items-start items-start w-[60%] gap-2'>
                    <span className='w-1/5 h-4 bg-gray-200'></span>
                    <p className='w-2/3 h-4 bg-gray-200'></p>
                    <p className='w-1/3 h-4 bg-gray-200'></p>
                    <p className='w-1/3 h-4 bg-gray-200'></p>
                </div>
                <div className='flex items-center w-[150px] h-[150px] bg-gray-200'>
                </div>
            </div>
            <div className='h-[0.5px] border-b-2'></div>
        </>
    );
}

const MenuItem = (info) => {
    const { name, description, price, itemAttribute, ratings, imageId } = info;
    return (
        <>
            <div className='w-full flex justify-between items-center my-4'>
                <div className='flex flex-col justify-items-start items-start max-w-[60%] gap-2'>
                    <span>{itemAttribute?.vegClassifier}</span>
                    <p className='font-bold text-lg'>{name}</p>
                    <p className='font-bold'>&#8377; {price / 100}</p>
                    {
                        ratings?.aggregatedRating?.rating && (
                            <p className='flex justify-items-start items-center text-sm'>
                                <HiStar />{ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCountV2})
                            </p>
                        )
                    }
                    <p>{description}</p>
                </div>
                <div className='flex items-center w-[150px] h-[150px]'>
                    {
                        imageId && <img className='w-full h-full object-cover rounded-xl'
                            src={CLOUDINARY_IMAGE_BASE_URL + imageId} />
                    }
                </div>
            </div>
            <div className='h-[0.5px] border-b-2'></div>
        </>
    );
}


export default MenuItem;