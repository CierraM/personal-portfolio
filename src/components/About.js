
const About = () => {

    return (
        <div id="About" class=" about bg-purple relative px-5 shadow-md">
            <div className="flex flex-col flex-col-reverse items-center content-center mx-auto max-w-2xl p-4">
                <div>
                    <header className=' text-2xl font-bold my-2 text-center text-white'>
                        <h2 className="mx-auto py-2">About Me</h2>
                    </header>
                    <section className='mx-auto'>
                        <div className=''>
                            <div className="text-white mb-2 md:leading-7 md:text-lg">
                                <p className="mb-4">
                                My name is Cierra Morris. In grade school, I was a math whiz and musician. Now, I am a full stack web developer with a passion for learning and problem solving. I discovered programming in college and fell in love with it because it let me work through mind-bending logic puzzles, while being creative at the same time. I am introverted and observant, detail-oriented and motivated. 
                                </p>
                                <p className="mb-4">
                                In my free time, I like reading, patio gardening, and trying new foods! The weirdest thing I have ever eaten is raw whale. My favorite food is freshly baked chocolate chip cookies.

                                </p>
                                <p className="mb-4">
                                I build software to solve real problems. I believe in teamwork built on mutual respect, laughter, and great communication. If I sound like someone you want on your team, contact me using the form below, or send me an email at <a href="mailto: cierramorris09@gmail.com" class="border-b-2 mt-3 inline border-purple-200">cierramorris09@gmail.com</a> 😊.
                                </p>


                            </div>

                        </div>
                    </section>
                </div>
                <div className="bg-white rounded-full w-48 h-48 m-4 shrink-0 border-white border-4">
                    <img src="./images/profile.jpg" className=" w-full rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default About