import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PopularCardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map(item=>
    <div  style={{lineHeight:1}} className='w-full bg-white border relative  border-darkGreen scale-75 h-80 rounded-lg shadow'>
        <Skeleton height={250}/>
        <div className="p-5 backdrop-blur-lg absolute bottom-0 right-0   z-20 h-auto w-full">
            <Skeleton style={{marginBottom:5
            }}
            />
            <Skeleton width={80} />
        </div>
    </div>
    )
  )
}

export default PopularCardSkeleton
