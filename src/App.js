import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import vishalImage from "./images/vishal.jpg";
import Education from './components/Education'
import { FaYoutube } from "react-icons/fa6";
import Skill from './components/Skill'
import Experience from "./components/Experience";
import certificate1 from './images/Screenshot 2025-02-13 234108.png'
import certificate2 from './images/vishal certificate.jpg'


import "./App.css";

const App = () => {
  useEffect(() => {
    let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".navbar-container");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector(`header nav a[href*='${id}']`)
                    .classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-container, heading", {
    origin: "top"
});
ScrollReveal().reveal(
    ".home-img, .services-container, .project-card, .skills-container img, .certificates-card img", {
        origin: "bottom"
    }
);
ScrollReveal().reveal(".home-container h1, .about-img, .contact form", {
    origin: "left",
});
ScrollReveal().reveal(".home-container p, .about-container", {
    origin: "right",
});
  }, []);

  return (
    <div>
       <header class="header">
        <a href="#home" class="portfolio-logo">Portfolio</a>
        <i class="fa-solid fa-bars" id="menu-bar-icone"></i>
        <nav class="navbar-container">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#project">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-container">
            <h3>Hello, I am</h3>
            <h1>Vishal Mishra</h1>
            <h1>I'm a <span>Frontend Developer</span></h1>
            <p>
                Building Bridges Between Front-End, Transforming Ideas
                into Web Reality
            </p>
            <div class="socila-media-profile">
                <a href="https://www.linkedin.com/in/vishal-mishra-b3733b204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/hustler025" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="mailto:vishalmishra0525@gmail.com" aria-label="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="https://www.youtube.com/factopower" target="_blank" rel="noreferrer">
                <FaYoutube />
                </a>
            </div>
            <a href={`${process.env.PUBLIC_URL}/vishalResumr.pdf`} download class="button">Download Resume <i class="fa-solid fa-download"></i></a>
        </div>
        <div class="home-img">
        <img src={vishalImage} alt="my-profile"  className="profile-image"/>
        </div>
    </section>

    {/* About Section  */}

    <section class="about" id="about">
        <div class="about-container">
            <h2 class="heading">About <span>Me</span></h2>
            <p>
            Hello, I'm Vishal Mishra, a passionate and dedicated Digital Solutions. I am  from Dhanbad, 
            Jharkhand. Currently, I am pursuing my B.Tech in Computer Science and Engineering at Bhabha University,
             Bhopal, and I hold a diploma in Mechanical Engineering from Government Polytechnic Sahibganj. </p>
             <p>
            I am currently working at Aditya Birla Opus Paint, where I contribute to 
           innovative digital solutions that enhance user experiences. My expertise lies
            in crafting clean, efficient code and transforming ideas into reality through intuitive
            and impactful designs.</p>
           <p>
           I thrive on collaborating with forward-thinking individuals and organizations to 
           create dynamic digital experiences. With a strong foundation in both software development 
           and problem-solving, I am always eager to learn, adapt, and push the boundaries of technology.
            </p>
        </div>
    </section>

    {/* Skill Section */}

    <section  id="skills" class="skills">
    
    <h2 class="heading">Technical<span> Skills</span></h2>
        <Skill/>
        
    </section>

    {/* Education Section */}


    <section class="Education" id="education">
    <h2 class="heading">Edu<span>cation</span></h2>
        <Education/>

    </section>

     {/* Service Section */}

    <section class="service" id="services">
        <h2 class="heading">My<span> Services</span></h2>
        <div class="services-container">
            <div class="service-card">
                <i class="fa-solid fa-code"></i>
                <h3>Web Development</h3>
                <p>
                    As a web developer, I create dynamic and functional websites using a
                    combination of front-end and back-end technologies. I specialize in
                    building responsive, user-friendly interfaces that enhance the user
                    experience. Whether it’s an e-commerce site, a blog, or a custom web
                    application, I bring ideas to life through code.
                </p>
            </div>

            <div class="service-card">
                <i class="fa-solid fa-code"></i>
                <h3>UI Development</h3>
                <p>
                    UI (User Interface) development focuses on creating the visual
                    elements of a website or application. I specialize in turning design
                    mockups into interactive interfaces using HTML, CSS, and JavaScript.
                    My goal is to ensure that users have a seamless and enjoyable
                    experience while interacting with your product.
                </p>
            </div>

            <div class="service-card">
                <i class="fa-solid fa-palette"></i>
                <h3>UI Designing</h3>
                <p>
                    UI design is all about aesthetics and usability. As a UI designer, I
                    craft visually appealing layouts, choose color schemes, and create
                    intuitive navigation. I pay attention to details like typography,
                    spacing, and consistency. My designs aim to enhance the overall look
                    and feel of your digital product.
                </p>
            </div>
        </div>
    </section>

    {/* Experience Section */}

    <section  id="experience" class="skills">
    
    <h2 class="heading">Experi<span>ence:</span></h2>
        <Experience/>
        
    </section>

    {/* Project Section*/}

    <section class="projects" id="project">
        <h2 class="heading">My<span> Projects</span></h2>
        <div class="project-container">
            <div class="project-card">
                <img src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380058/Download_Rock_Paper_Scissors_Neon_Icons_for_free_vngpjq.jpg" alt="project3" class="project-image" />
                <div class="project-content">
                    <h4>Rock Paper Scissor</h4>
                    <p>
                        Rock Paper Scissor is an user friendly game developed using
                        ReactJS.
                    </p>
                    <a href="https://babbugames.ccbp.tech/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>

            <div class="project-card">
                <img src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380059/%D9%85%D8%A7_%D9%87%D9%8A_%D9%85%D8%B5%D9%81%D9%88%D9%81%D8%A9_%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D9%88%D9%82%D8%AA_%D9%88%D9%83%D9%8A%D9%81_%D8%AA%D8%B3%D8%A7%D8%B9%D8%AF%D9%83_%D8%B9%D9%84%D9%89_%D8%A3%D9%86_%D8%AA%D9%83%D9%88%D9%86_%D8%A3%D9%83%D8%AB%D8%B1_%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%D9%8A%D8%A9_r6khwk.jpg" alt="project4" class="project-image" />
                <div class="project-content">
                    <h4>Task Managing App</h4>
                    <p>
                        Task Managing App was created using ReactJS which allows user to
                        manage their tasks.
                    </p>
                    <a href="https://taskmanaging.ccbp.tech/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>

            

            <div class="project-card">
                <img src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380071/38833_1_apfnyy.jpg" alt="project7" class="project-image" />
                <div class="project-content">
                    <h4>Food Much</h4>
                    <p>
                        Food Much was built using HTML, CSS, Flex-box. Food Much is a
                        Responsive Food Delivery App.
                    </p>
                    <a href="https://foodhubmunch.ccbp.tech/" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </section>

     {/* Certificate Section*/}

    <section class="certificates-container" id="certificates">
        <h2 class="heading">My<span> Certificates</span></h2>
        <div class="certificates-card">
            <img src={certificate1} alt="value1"/>
            <img src={certificate2} alt="value1"/>
        </div>
    </section>

    {/* Contact Section*/}

    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>

        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="e6ae98d0-1e73-4541-8436-b33134e4aee8" />
            <div class="input-card">
                <input type="text" name="name" placeholder="Enter Your Name" required />
                <input type="email" name="email" placeholder="Enter Your Mail Id" required />
            </div>

            <div class="input-card">
                <input type="number" placeholder="Enter Your Mobile Number" required name="number" />
                <input type="text" name="subject" placeholder="Enter Subject Of The Mail" required />
            </div>

            <textarea name="message" cols="30" rows="10" placeholder="Enter Your Message Here..."></textarea>
            <button type="submit" class="button">Submit</button>
        </form>
    </section>

    <footer class="footer">
        <div class="footer-container">
        <p>© 2025 Awanish Kumar Singh. All Rights Reserved. | Designed and Developed by Awanish Kumar Singh.</p>
            
        </div>

        <div class="footer-icons">
            <a href="#home"><i class="fa-solid fa-angle-up"></i></a>
        </div>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>

    <script src="index.js"></script>


    

      </div>
  );
};

export default App;
