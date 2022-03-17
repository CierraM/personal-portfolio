import { Fragment } from 'react/cjs/react.production.min'
import './style.ex.css'

const Education = () => {
    return (
        <Fragment>
            
            <div id="Education" class="education bg-gradient-to-r from-blue-100 to-red-300 h-96 flex flex-col mt-44">
            <header className='text-2xl font-bold mb-2 text-center'>
                <h2>Education</h2>
            </header>
                <section className='my-28 p-5 mx-auto max-w-screen-md '>

                    <div className='flex'>
                        <div>
                            <h3>Brigham Young University - Idaho</h3>
                            <h4>BS, Web Design & Development</h4>
                            <h4 className='text-base pt-2'>Jan 2020 <span className="text-2xl">-</span> Apr 2023  </h4>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Education