import React from 'react'

const Tickets = () => {
    return (
        <div className='py-16 px-3'>

            <h1 className='text-3xl font-extrabold flex'>Tickets</h1>

            <div className='pt-10'>
                <form >
                    <div className=" z-0 w-full flex items-center mb-6 group">
                        <label className="block w-32 mr-10 max-h-max text-lg font-semibold text-black">Select Movie</label>
                        <input type="text" className="block py-3.5 px-0 w-full text-sm 
                        bg-transparent border-0 border-b-2 border-gray-300  text-black dark:border-gray-600
                         focus:outline-none  " placeholder=" " required />
                    </div>

                    <div className=" z-0 w-full flex items-center mb-6 group">
                        <label className="block w-32 mr-10 max-h-max text-lg font-semibold text-black">Ticket Count</label>
                        <input type="text" className="block py-3.5 px-0 w-full text-sm 
                        bg-transparent border-0 border-b-2 border-gray-300  text-black dark:border-gray-600
                         focus:outline-none  " placeholder=" " required />
                    </div>

                    <div className='pt-24'>
                        <button type="submit" className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4
                     focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full
                      sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700
                       dark:focus:ring-green-800">Submit</button>

                    </div>
                </form>
            </div>



        </div>
    )
}

export default Tickets