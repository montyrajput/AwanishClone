import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'

import BtechImage from '../../images/bhabha university image.jpg'
import DiplomaImage from '../../images/sahibgang.jpg'
import School from '../../images/10.jpg'

import './index.css'
const Education = () => {
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
    ScrollReveal().reveal('.education-styled3', {
      origin: 'top',
    })
    ScrollReveal().reveal('.education-styled4', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.education-styled1 ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal('.education-styled2 ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
     
      <div className="education-main-container">
        <div className="education-container">
          <img
            src={BtechImage}
            alt="save"
            className="college-image education-styled3"
          />
          <div className="education-styled2">
            <h2 className="education-heading">
              B.Tech IN{' '}
              <span className="education-heading-styled">
                ( Computer Science and Engineering )
              </span>
            </h2>
            <p className="education-paragraph">
              I am currently pursuing my Bachelor of Technology (B.Tech) degree
              in Computer Science and Engineering at Bhabha University, Bhopal,
              having joined in 2023 through Lateral Entry. Over the past One
              years, I have completed 4th semesters with a cumulative grade
              point average{' '}
              <span className="education-paragraph-styled">
                (CGPA) of 8.
              </span>{' '}
              My academic journey in Computer Science and Engineering has been
              both challenging and enriching, providing me with a solid
              foundation in programming, algorithms, and system design. I am on
              track to graduate in 2026, and I look forward to leveraging my
              education and skills in future professional endeavors.
            </p>
          </div>
        </div>
        <div className="education-container">
          <img
            src={DiplomaImage}
            alt="save"
            className="college-image1 education-styled2"
          />
          <div className="education-styled1">
            <h2 className="education-heading">
              DIPLOMA IN{' '}
              <span className="education-heading-styled1">
                ( MECHANICAL 
                    ENGINEERING  )
              </span>
            </h2>
            <p className="education-paragraph">
              I have completed a Diploma in MECHANICAL 
              ENGINEERING 
              from Government Polytechnic Sahibganj, Jharkhand. My academic
              journey began in 2019 and culminated in 2022, during which I
              achieved a{' '}
              <span className="education-paragraph-styled">
                final percentage of 70%.
              </span>{' '}
              The diploma program provided me with a strong technical foundation
              and practical skills in computer science, including programming,
              network management, and system administration. This experience has
              been instrumental in shaping my technical abilities and preparing
              me for further studies and professional endeavors in the field of
              engineering.
            </p>
          </div>
          <img
            src={DiplomaImage}
            alt="save"
            className="college-image2 education-styled2"
          />
        </div>
        <div className="education-container">
          <img
            src={School}
            alt="save"
            className="college-image education-styled4"
          />
          <div className="education-styled1">
            <h2 className="education-heading">
              10th{' '}
              <span className="education-heading-styled2">
                ( Matriculation ){' '}
              </span>
            </h2>
            <p className="education-paragraph">
              I completed my 10th matriculation at DAV Public School, 
              Mahuda  in
              Dhanbad, Jharkhand, graduating in 2019 with a{' '}
              <span className="education-paragraph-styled">
                percentage of 82%.
              </span>
              My time at DAV Public School, 
              Mahuda laid the groundwork for my
              academic journey, fostering my interest in technology and
              engineering. The foundational knowledge and skills I gained during
              these formative years have been crucial in preparing me for
              further studies and shaping my career aspirations.
            </p>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default Education