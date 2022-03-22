import { Carousel } from '3d-react-carousal';
import projects from '../projectData';
import { GITHUB_USERNAME } from '../root.link';
import { useState } from 'react'
import Project from './Project';

const ProjectSlider = () => {
    const [listView, setListView] = useState(true)

    const toggleListView = () => {
        setListView(prev => {
            return !prev;
        })
    }
    let slides = projects.map((project, index) => (
        <article className='flex flex-col h-max  bg-white ' key={index} >
            <img src={project.image} alt={project.title} className="portfolio-img" />

            <div className='flex flex-col overflow-visible  space-y-3  w-full p-2'>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2 '>
                    {project.tools.map((disc, index) => (
                        <span className='border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm' key={index}>
                            {disc}
                        </span>
                    ))}
                </div>
                <div className='w-auto flex space-x-5 relative '>
                    <a href={project.github} target='_blank' rel='noreferrer'>
                        <img src='./images/icons/github.svg' alt='link to github page' width='24px' height='24px' />
                    </a>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                        <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                    </a>
                </div>
            </div>
        </article>
    ))



    return (
        <section className={`my-28 px-5  ${!listView && 'projectSlider'}`} id='projects'>
            <header className='text-2xl font-bold pt-10 flex justify-between'>
                <div>
                <h2>Projects</h2>
                <p className='text-sm'>(Swipe to view next)</p>
                </div>
                <button onClick={toggleListView} className="text-sm underline">{listView ? "Carousel View" : "List View"}</button>
            </header>
            <div className='my-7 space-y-24'>
                {!listView && <Carousel slides={slides} autoplay={false} arrows={true} />}
                {listView && <Project />}
            </div>
        </section>
    )
}

export default ProjectSlider