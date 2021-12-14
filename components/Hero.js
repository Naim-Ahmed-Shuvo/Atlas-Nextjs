
import {useTheme} from 'next-themes'
import { useStateValue } from '../store/StateProvider'
const Hero = () => {
    const {theme, setTheme} = useTheme()
    const [{count},dispatch] = useStateValue()
    return (
        <section className=" bg-cover bg-no-repeat py-52 xs:py-44" style={{
            backgroundImage: `url(${theme=="dark"? '/hero-dark.svg':'/hero.svg'})`
        }}>
            <div className='container mx-auto xs:px-2  text-center'>
                <div className="hero_info px-8">
                    <h5 className="text-sm text-blue-400 uppercase">welcome to my blog</h5>
                    <h2 className=" text-6xl xs:text-4xl font-semibold text-gary-700 capitalize  my-5 dark:text-gray-300">we all owe death a life</h2>
                    <p className=" text-gray-400 text-lg xs:text-sm capitalize max-w-sm mx-auto">
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    </p>
                </div>
                <div className=" bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-400 flex rounded overflow-hidden p-1 mt-7 max-w-sm mx-auto">
                    <input placeholder="Email" type={"email"} className=" outline-none border-0 bg-transparent p-2 w-full placeholder:text-sm"/>
                    <button className=" bg-blue-500 border border-blue-500 px-7 xs:px-5 rounded text-gray-100 dark:text-gray-100">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Hero
