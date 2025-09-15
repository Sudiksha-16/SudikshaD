'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Download, Sun, Moon, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode as per reference
  const [activeSkillTab, setActiveSkillTab] = useState('programming-languages')
  const [activeResumeTab, setActiveResumeTab] = useState('education')
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skillsData = {
    'programming-languages': ['Python', 'Java', 'C++', 'C', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    'databases': ['MySQL', 'MongoDB'],
    'Web Technologies': ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Node.js', 'Express.js', 'React', 'REST API'],
    'ai-machine-learning': ['Tensorflow', 'PyTorch', 'Scikit-learn', 'Keras', 'Transformers', 'NLP Frameworks'],
    'data-analysis': ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'SciPy'],
    'cloud-infrastructure': ['AWS', 'Git', 'Github', 'Docker', 'Jenkins'],
  }

  const educationData = [
    {
      degree: 'Bachelor of Engineering In Computer Science and Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      university: 'Keshav Memorial Institute of Technology, Hyderabad, India',
      period: 'June - 2026 (Expected)',
      cgpa: '8.47',
      coursework: ['Data Structures & Algorithms', 'NLP', 'Web Technologies', 'Object Oriented Programming', 'Software Engineering', 'Operating Systems', 'Artificial Intelligence', 'Machine Learning']
    }
  ]

  const projects = [
    {
      title: 'Cricket LLM',
      description: 'Developed an advanced LLM tailored for cricket match summaries, player profiling, and cricket news aggregation. Analyzed player strategies and provided historical comparisons, identifying emerging talents and profiling legendary players. Designed and implemented an interactive cricket quiz feature.',
      tech: ['Hugging Face Transformer', 'React', 'BeautifulSoup', 'APIs', 'MongoDB', 'Node.js', 'Web Scraping'],
      period: 'Apr 2024',
      github: 'https://github.com/Sudiksha-16/Cricket-LLM', // Placeholder
      live: '#', // Placeholder
      image: '/cricket.png?height=300&width=500'
    },
    {
      title: 'Desktop Voice Assistant',
      description: 'Designed and developed an AI-driven voice assistant that understands and responds to natural language voice commands, transforming user interaction with technology. Developed a hands-free, intuitive interface to streamline task execution, improve information retrieval, and empower users to accomplish tasks more conveniently. Integrated a language translation feature.',
      tech: ['Python', 'Pyttsx3', 'Speech Recognition', 'Wikipedia API', 'Webbrowser', 'Pyautogui'],
      period: 'Oct 2023 - Dec 2023',
      github: 'https://github.com/Sudiksha-16/Desktop-Voice-Assistant', // Placeholder
      live: '#', // Placeholder
      image: '/voice.png?height=300&width=500'
    },
    {
      title: 'NLP News Analyzer',
      description: 'A full-stack NLP web application for real-time sentiment analysis and news category classification using React, Flask, and machine learning.',
      tech: ['React', 'Flask', 'FetchAPI', 'CSS', 'Python', 'TextBlob', 'ML'],
      period: 'May 2025',
      github: 'https://github.com/Sudiksha-16/NLP-News-Analyzer', // Placeholder
      live: '#', // Placeholder
      image: '/News.png?height=300&width=500'
    },
    {
      title: 'Real Estate Market Place',
      description: 'A comprehensive real estate marketplace application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This app allows users to log in, search for properties, list their own properties, and participate in auctions.',
      tech: ['React', 'Node.js', 'Express.js', 'CSS', 'HTML', 'MongoDB'],
      period: 'Mar 2024',
      github: 'https://github.com/Sudiksha-16/Real-Estate-Marketplace', // Placeholder
      live: '#', // Placeholder
      image: '/Real Estate.avif?height=300&width=500'
    },
    {
      title: 'TypeGo (MonkeyType Clone)',
      description: 'Built a full-stack web application inspired by MonkeyType to test and improve users\' typing speed and accuracy in real time. Implemented WPM, accuracy, character-level tracking, and real-time feedback with dynamic word generation and timer-based sessions. Enabled user authentication, personal score history, and a global leaderboard.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'CSS', 'JWT', 'Axios'],
      period: 'Mar 2025',
      github: 'https://github.com/Sudiksha-16/TypeGo', // Placeholder
      live: '#', // Placeholder
      image: '/monkey.png?height=300&width=500'
    },
    

  ]

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsProjectModalOpen(true)
  }

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 dark:bg-gray-950/60 border-b border-gray-800 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* REPLACE "YOUR_RESUME_PDF_LINK_HERE" WITH YOUR ACTUAL RESUME PDF URL */}
          <Button variant="outline" size="sm" className="rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700" asChild>
            <a href="/Sudiksha_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              RESUME
            </a>
          </Button>
        </div>
          <div className="flex items-center gap-6 text-sm font-medium uppercase text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#resume" className="hover:text-white transition-colors">RESUME</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium uppercase text-gray-400">Sudiksha D</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-400 hover:text-white"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight relative z-10">
            <span className="block text-gray-300">Hello, I'm</span>
            <span className="block text-white">
              Sudiksha D.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
            A Computer Science and Engineering student specializing in AI & ML, 
            passionate about crafting intelligent solutions and building impactful applications.
          </p>
          <div className="flex justify-center items-center gap-6 text-gray-400 flex-wrap relative z-10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:sudiksha1604@gmail.com" className="hover:text-white transition-colors">
                sudiksha1604@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9247987727</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-gray-800 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2">
            <ChevronRight className="w-6 h-6" /> ABOUT
          </h2>
          <div className="max-w-4xl text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              I am a Computer Science and Engineering student at Keshav Memorial Institute of Technology, 
              specializing in Artificial Intelligence and Machine Learning with a strong foundation in core CS principles, including programming, data structures, algorithms, and software development. My academic journey has equipped 
              me with strong foundational skills in prompt engineering, natural language processing, and data analysis.
            </p>
            <p>
              My passion lies in building AI-driven applications that are not only innovative but also practical and impactful. 
              I have hands-on experience in crafting, optimizing, and evaluating prompts for Large Language Models, 
              performing complex data preprocessing, and developing full-stack solutions.
            </p>
            <p>
            I am Adept at applying problem-solving skills to develop efficient and scalable solutions. I am always eager to learn new technologies and apply my knowledge to challenging projects. 
              My goal is to contribute to the advancement of AI and create solutions that enhance user experiences and solve real-world problems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 border-t border-gray-800 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2">
            <ChevronRight className="w-6 h-6" /> SKILLS
          </h2>
          <Tabs defaultValue="programming-languages" onValueChange={setActiveSkillTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto bg-gray-800 border border-gray-700 rounded-lg p-1">
              {Object.keys(skillsData).map((key) => (
                <TabsTrigger key={key} value={key} className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                  {key.replace(/-/g, ' ').toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(skillsData).map(([key, skillsList]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-300 uppercase">{key.replace(/-/g, ' ')}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skillsList.map((skill, index) => (
                    <Card key={index} className="bg-gray-800 border border-gray-700 text-center py-4 px-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <CardContent className="p-0 text-gray-200 text-base font-medium">
                        {skill}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Resume Section (Interactive) */}
        <section id="resume" className="py-16 border-t border-gray-800 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2">
            <ChevronRight className="w-6 h-6" /> RESUME
          </h2>
          <div className="flex justify-end mb-6">
            <Button
            variant="outline"
            className="rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700"
            >
              <a
              href="/Sudiksha_Resume.pdf"
              target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2"
               >
                <Download className="w-4 h-4" />
                DOWNLOAD PDF
                </a>
                </Button>
                </div>

          <Card className="bg-gray-900 border border-gray-800 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white">SD</div>
              <div>
                <h3 className="text-2xl font-bold text-white">D SUDIKSHA</h3>
                <p className="text-gray-400">Computer Science and Engineering Student</p>
                <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                  <MapPin className="w-3 h-3" /> Hyderabad
                  <Mail className="w-3 h-3" /> sudiksha1604@gmail.com
                  <Phone className="w-3 h-3" /> +91 9247987727
                </div>
              </div>
            </div>

            <Tabs defaultValue="education" onValueChange={setActiveResumeTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-gray-800 border border-gray-700 rounded-lg p-1 mb-6">
                <TabsTrigger value="education" className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                  EDUCATION
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                  SKILLS
                </TabsTrigger>
                <TabsTrigger value="languages" className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                  LANGUAGES
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education">
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <Card key={index} className="bg-gray-800 border border-gray-700 p-4">
                      <CardHeader className="p-0 mb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl font-semibold text-white">{edu.degree}</CardTitle>
                            <p className="text-gray-400 text-sm">{edu.specialization}</p>
                            <p className="text-gray-500 text-xs mt-1">{edu.university}</p>
                          </div>
                          <div className="text-right">
                            <Badge className="text-xs px-2 py-1 bg-gray-700 text-gray-300">{edu.period}</Badge>
                            <p className="text-base font-bold text-green-400 mt-1">CGPA: {edu.cgpa}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <h4 className="font-semibold text-sm text-gray-300 mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course, cIndex) => (
                            <Badge key={cIndex} variant="outline" className="text-xs bg-gray-700 text-gray-300 border-gray-600">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="flex flex-wrap gap-2">
                  {Object.values(skillsData).flat().map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="awards">
                <p className="text-gray-400">No awards listed on resume.</p>
              </TabsContent>
              <TabsContent value="languages">
                <p className="text-gray-400">Languages: English, Hindi, Telugu</p>
              </TabsContent>
            </Tabs>
          </Card>
        </section>

        {/* Hire Me Section */}
        <section id="hire-me" className="py-16 border-t border-gray-800 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2">
            <ChevronRight className="w-6 h-6" /> HIRE ME
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-gray-300">WHY HIRE ME?</h3>
          <div className="max-w-4xl text-lg text-gray-300 leading-relaxed space-y-4">
            <p>
              With expertise in AI & ML, prompt engineering, natural language processing, and full-stack development, 
              I bring a unique blend of technical skills and problem-solving acumen to every project. My attention to detail 
              and commitment to excellence ensure that I deliver high-quality results that exceed expectations.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Strong analytical skills with experience in data-driven decision making</li>
              <li>Proficient in multiple programming languages and frameworks</li>
              <li>Experience in developing and implementing AI/ML models and applications</li>
              <li>Excellent communication and collaboration skills</li>
            </ul>
          </div>
          <Button
          asChild
          className="mt-8 bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
          >
            <a href="#contact">
              GET IN TOUCH <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
              </Button>
              </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-gray-800 scroll-mt-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2 relative z-10">
            <ChevronRight className="w-6 h-6" /> PROJECTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => openProjectModal(project)}>
                <CardHeader className="p-4 pb-0">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4 border border-gray-700" />
                  <CardTitle className="text-xl font-semibold text-white mb-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12 gap-4 relative z-10">
            <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-gray-800 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-gray-400 flex items-center gap-2">
            <ChevronRight className="w-6 h-6" /> CONTACT
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-300 uppercase">CONTACT INFORMATION</h3>
              <div className="space-y-6">
                <Card className="bg-gray-800 border border-gray-700 p-4 flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-gray-500 text-sm">PHONE</p>
                    <p className="text-white text-lg">+91 9247987727</p>
                  </div>
                </Card>
                <Card className="bg-gray-800 border border-gray-700 p-4 flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-gray-500 text-sm">EMAIL</p>
                    <p className="text-white text-lg">sudiksha1604@gmail.com</p>
                  </div>
                </Card>
                <Card className="bg-gray-800 border border-gray-700 p-4 flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-gray-500 text-sm">LINKEDIN</p>
                    <a href="https://linkedin.com/in/sudiksha-d" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:underline">linkedin.com/in/sudiksha-d</a>
                  </div>
                </Card>
                <Card className="bg-gray-800 border border-gray-700 p-4 flex items-center gap-4">
                  <Github className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="text-gray-500 text-sm">GITHUB</p>
                    <a href="https://github.com/Sudiksha-16" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:underline">github.com/Sudiksha-16</a>
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <Tabs defaultValue="message" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto bg-gray-800 border border-gray-700 rounded-lg p-1 mb-6">
                  <TabsTrigger value="message" className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                    MESSAGE
                  </TabsTrigger>
                  <TabsTrigger value="schedule-call" className="text-gray-400 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium">
                    SCHEDULE A CALL
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="message">
                  <form className="space-y-4">
                    <input type="text" placeholder="Your name" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <input type="email" placeholder="Your email" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <textarea placeholder="Your message" rows={5} className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                    <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-700">
                      SEND MESSAGE
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="schedule-call">
                  <form className="space-y-4">
                    <input type="text" placeholder="Your name" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <input type="email" placeholder="Your email" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <input type="Date" placeholder="Preffered Date" className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <textarea placeholder="Topic" rows={5} className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                    <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-700 border border-gray-700">
                      SCHEDULE CALL
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600">
        <p>&copy; 2026 Sudiksha D. All rights reserved.</p>
        <p className="text-xs mt-2">Built with v0</p>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
          <DialogContent className="sm:max-w-[800px] bg-gray-900 border border-gray-700 text-white p-6 rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold mb-2">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-gray-400 text-lg">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} className="w-full h-64 object-cover rounded-md mb-4 border border-gray-700" />
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech: string, techIndex: number) => (
                  <Badge key={techIndex} variant="secondary" className="text-sm bg-gray-700 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedProject.github && (
                  <Button variant="outline" size="sm" asChild className="border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.live && selectedProject.live !== '#' && (
                  <Button variant="outline" size="sm" asChild className="border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
