import {BiMailSend} from 'react-icons/bi'

const NewsLetter = () => {
    return (
        <section className=' my-16 xs:px-2'>
             <div className="container mx-auto border dark:bg-slate-700 dark:border-slate-700 rounded">
                 <div className="main py-10 p-10 grid lg:grid-cols-2 xs:grid-cols-1">
                     <div className="left flex items-center xs:justify-center lg:justify-start">
                         <div className="icondiv mr-4">
                             <div className=' bg-blue-600 text-white h-14 w-14 rounded-full flex justify-center items-center'>
                                 <BiMailSend className='text-xl'/>
                             </div>
                         </div>
                         <div>
                             <p className='font-semibold text-gray-700 max-w-xs xs:w-full xs:text-sm dark:text-gray-200'>Join the news letter and read the new posts first</p>
                         </div>
                     </div>
                     <div className="right">
                            <div className=" bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-400 flex rounded overflow-hidden p-1 mt-7 max-w-sm mx-auto">
                            <input placeholder="Email" type={"email"} className=" outline-none border-0 bg-transparent p-2 w-full placeholder:text-sm"/>
                            <button className=" bg-blue-500 border border-blue-500 px-7 xs:px-2 rounded text-gray-100 dark:text-gray-100 xs:text-sm">Subscribe</button>
                        </div>
                     </div>
                 </div>
             </div>
        </section>
    )
}

export default NewsLetter
