import { CLOUDINARY_IMAGE_BASE_URL } from '../../utils/constants';
import './MenuItem.css';
import { HiStar } from 'react-icons/hi'

const MenuItem = (info) => {
    const { name, description, price, itemAttribute, ratings, imageId } = info;
    return (
        <>
            <div className='w-full flex justify-between items-center my-8'>
                <div className='flex flex-col justify-items-start items-start max-w-[60%]'>
                    <span>{itemAttribute?.vegClassifier}</span>
                    <p className='font-bold text-lg'>{name}</p>
                    <p className='font-bold'>&#8377; {price / 100}</p>
                    <p className='flex justify-items-start items-center text-sm'>
                        <HiStar />{ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCountV2})
                    </p>
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