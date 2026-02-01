import { Github, Linkedin, Mail, Phone, MapPin, Briefcase } from 'lucide-react'

export default function Home() {
  const roles = [
    'Full Stack Developer',
    'Competitive Programmer',
    'AI Enthusiast',
    'Deep Learner',
    'Developer'
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Harxhit-web', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harshit-bhardwaj-75691a31b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bhardwajharshit931@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919015202536', label: 'Phone' },
  ]

  return (
    <div id="dashboard" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20">
              <img
                src="harshit-pf-pic.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-blue-400">Harshit Bhardwaj</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer | PR Head of Comptech Scientia
            </p>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12">
              {roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 hover:border-blue-400 transition-all cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-red-400 transition-all">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <MapPin size={20} />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-gray-300">Delhi, India</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-pink-400 transition-all">
                <div className="flex items-center gap-2 text-pink-400 mb-2">
                  <Briefcase size={20} />
                  <span className="font-semibold">Expertise</span>
                </div>
                <p className="text-gray-300">Full Stack Development, Problem solving</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-purple-400 transition-all">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Mail size={20} />
                  <span className="font-semibold">Contact</span>
                </div>
                <p className="text-gray-300 text-sm break-all">bhardwajharshit931@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center lg:text-left ml-24 text-white py-4">Connect</h3>
              <div className="flex gap-6 justify-center lg:justify-start">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-blue-400 hover:text-blue-400 text-gray-300 transition-all hover:scale-110"
                    >
                      <Icon size={30} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
