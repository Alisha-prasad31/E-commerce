import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventdefault()

    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 30% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis?
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required></input>
                <button type='submit'
                    className='bg-black text-white text-xs px-10 py-4' >Subsrcibe</button>
            </form>

        </div>
    )
}

export default NewsLetterBox