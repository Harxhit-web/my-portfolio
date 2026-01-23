// src/pages/about.js

import { Code, Brain, Rocket, Award } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: Brain,
      title: 'Leetcode Enthusiast',
      description:
        'Dedicated to enhancing problem-solving skills through regular practice on LeetCode and competitive programming platforms.',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description:
        'Building modern web applications with React, Next.js, Node.js, and cloud technologies.',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Passionate about creating cutting-edge solutions that solve real-world problems.',
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description:
        'Always staying updated with the latest technologies and best practices in the industry.',
    },
  ];

  return (
    <div id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 pt-28">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate Full Stack Developer with a strong foundation in MERN stack, deep learning, and modern web technologies.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a Computer Science student with a strong focus on competitive programming and full-stack development. I actively solve problems on platforms like LeetCode to strengthen my data structures and algorithms skills, and I enjoy tackling complex challenges that improve my logical thinking.
          </p>
          <p className="text-gray-300 leading-relaxed">
            On the development side, I work with modern technologies such as React, Tailwind CSS, and Node.js to build practical, scalable applications. From creating projects like my React Todo App to exploring backend concepts, I'm continuously expanding my expertise as a full-stack developer.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 hover:border-blue-400 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Resume Download */}
        <div className="text-center mt-12">
          <a
            href="/My_Resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}

