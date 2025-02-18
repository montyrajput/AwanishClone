import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'

import './index.css'
const Experience = () => {
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
    ScrollReveal().reveal('.experience-styled1', {
      origin: 'top',
    })
    ScrollReveal().reveal('.experience-styled4', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.experience-styled2 ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal('.experience-styled3 ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      
      <div className="experience-main-container">
        <div className="experience-container">
          <h1 className="experience-heading experience-styled1">
          AE (Associate Engineer)
          </h1>
          <p className="experience-company experience-styled2">
            <strong className="experience-company1">Company : </strong>Birla Opus, Aditya Birla Group,
            <span className="experience-address"> (Maharashtra)</span>
          </p>
          <p className="experience-company experience-styled3">
            <strong className="experience-company2">Duration : </strong> October
            14, 2024 - Present{' '}
            
          </p>
          <p className="experience-paragraph experience-styled4">
          As an Associate Engineer at Aditya Birla Opus Paint Group, 
          I play a pivotal role in driving operational excellence and ensuring 
          the highest standards of quality within the production environment.
          </p>
          <p className="experience-paragraph experience-styled2">
          Collaborating closely with cross-functional teams, 
          I proactively optimize processes to enhance efficiency and 
          reduce operational costs. My commitment to continuous improvement 
          and innovative problem-solving enables me to swiftly resolve technical 
          challenges, minimizing downtime and maximizing productivity. 
          </p>
          <p className="experience-paragraph experience-styled3">
          By supporting the integration of advanced technologies,
           I contribute to the organization's pursuit of industry-leading 
           production capabilities.
          </p>
          <p className="experience-paragraph experience-styled4">
          My role is not just about maintaining standards 
          but elevating them, ensuring the company's legacy of excellence 
          and leadership in the market.
          </p>
        </div>
       
      </div>
    </>
  )
}
export default Experience