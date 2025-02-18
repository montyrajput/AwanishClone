import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import VideoEdit from '../../images/video edit.jpg'
import Filmaking from '../../images/film making.jpg'
import Adobe from '../../images/adobe.png'

import './index.css'
const Skill = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 150
      sections.forEach(section => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPosition >= top && scrollPosition <= top + height) {
          // Do something if needed
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' styled-node', {
      origin: 'top',
    })
    ScrollReveal().reveal('.skill-styled', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.styled-react, .styled-python ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' .styled-express ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      
      <div className="skill-container">
        <h1 className="skills-heading">
          Front-End <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology skill-styled">
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472157/Search_results_for__html5___Page__1_uigmf7.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">HTML</h4>
            <p className="skills-technology-paragraph">
              Proficient in creating semantic <br />
              and accessible web pages.
            </p>
          </div>
          <div className="skills-text-content styled-node">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472157/download_1_ijhedh.jpg"
              alt="save"
              className="css"
            />
            <h4 className="skills-technology-heading">CSS</h4>
            <p className="skills-technology-paragraph">
              Experienced in designing responsive <br />
              layouts and styling web pages.
            </p>
          </div>
          <div className="skills-text-content">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472156/Bootstrap_lude5v.jpg"
              alt="save"
              className=" bootstrap"
            />
            <h4 className="skills-technology-heading ">Bootstrap</h4>
            <p className="skills-technology-paragraph">
              Utilized Bootstrap for creating responsive, <br />
              mobile-first web designs efficiently.
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472943/Learn_Java_Script_Along_With_Asp_Net_http___www.slideshare_xof95m.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">JavaScript</h4>
            <p className="skills-technology-paragraph">
              Skilled in writing dynamic and <br />
              interactive web applications.
            </p>
          </div>
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472153/Unconfirmed_961666_y0t6jn.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading ">React</h4>
            <p className="skills-technology-paragraph">
              Experienced in building single- <br />
              page applications using React.
            </p>
          </div>
        </div>
        
          
        
          
        <h1 className="skills-heading">
          Other <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology">
          <div className="skills-text-content styled-react">
            <img
              src={VideoEdit}
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Video Editing</h4>
            <p className="skills-technology-paragraph">
            Video Editing is the art of refining raw <br/>footage into a compelling visual story
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src={Filmaking}
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Film Making</h4>
            <p className="skills-technology-paragraph">
            Filmmaking is the creative process of bringing<br/>
             stories to life through visual storytelling
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src={Adobe}
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Adobe Premiere Pro</h4>
            <p className="skills-technology-paragraph">
            Adobe Premiere Pro is a
             professional <br/>video editing software used for 
             cutting,  color grading, and adding effects to create high-quality videos
            </p>
          </div>
        </div>
       
      </div>
    </>
  )
}
export default Skill