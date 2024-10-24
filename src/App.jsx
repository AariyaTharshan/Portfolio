import { useState, useEffect } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, Menu, X, Code, Palette, Server, ChevronLeft, ChevronRight } from 'lucide-react'
Image
const NavItem = ({ href, children }) => (
  <motion.a 
    href={href} 
    className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
)

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    >
      <img 
        src={`/placeholder.svg?height=200&width=300`} 
        alt={`Project ${project}`}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Project {project}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">A brief description of the project and your role in it. Highlight key technologies used and outcomes achieved.</p>
        <motion.a 
          href="#" 
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project →
        </motion.a>
      </div>
    </motion.div>
  )
}
const skills = [
  { name: 'React', level: 50, logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  )},
  { name: 'Node.js', level: 50, logo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  )},

]

const SkillsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <div className="relative h-64">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-primary dark:text-primary-foreground mb-4">{skill.logo}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proficiency: {skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}



const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[Code, Palette, Server].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-white opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Icon size={30 + Math.random() * 40} />
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                ATG
              </motion.span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavItem href="#about">About</NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem href="#about">About</NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <FloatingIcons />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            style={{ opacity, scale }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Aariya Tharshan V
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl text-gray-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer & UI/UX Designer
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
            <img 
                src="./src/pic.jpg" 
                alt="Aariya Tharshan V" 
                width={400} 
                height={400}
                className="rounded-full shadow-lg"
            />
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
  Hello! I'm Aariya, an engineering student specializing in IT with a growing passion for web development and software engineering. 
  I'm currently in my third year and actively exploring modern technologies to enhance my skills in building responsive and intuitive applications.
             </p>
             <p className="text-lg text-gray-700 dark:text-gray-300">
  My focus is on developing solutions that effectively address user needs and provide a seamless experience. 
  I'm dedicated to learning and applying the latest trends in technology to create impactful and user-centric projects.
            </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <SkillsCarousel />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <ProjectCard key={project} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">AariyaTharshanV@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 text-blue-500 mr-2" />
                <a href="https://github.com/AariyaTharshan" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">github.com/AariyaTharshan</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-blue-500 mr-2" />
                <a href="https://linkedin.com/in/AariyaTharshan" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">linkedin.com/in/AariyaTharshan</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
