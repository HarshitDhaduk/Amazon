import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id, 
    title, 
    rating,
    price, 
    description,
    category, 
    image, 
    hasPrime, 
}) {
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        // Remove item from REDUX
        dispatch(removeFromBasket({id}))
    }

    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            rating,
            price, 
            description,
            category, 
            image, 
            hasPrime,
        }
        // Push item to Basket
        dispatch(addToBasket(product))
    }
  return (
    <div className='grid grid-col-5'>
        <Image src={image} height={200} width={200} objectFit='contain' />

        {/* Middle section */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className='h-5 text-yellow-500' />

                ))}
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <Currency quantity={price} currency="INR" />

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img 
                    loading='lazy'
                    className='w-12'
                    src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}
        </div>

        {/* Right add/remove button */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct