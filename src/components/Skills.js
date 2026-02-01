'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 95 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "Django", level: 70 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Pandas", level: 60 },
        { name: "NumPy", level: 65 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 75 },

        { name: "MySQL", level: 70 },

      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 83 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "REST APIs", "GraphQL", "WebSockets", "JWT", "NextAuth", "Jest", "Postman",
              "Webpack", "npm", "yarn", "GitHub", "git"
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-blue-400 hover:text-blue-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}