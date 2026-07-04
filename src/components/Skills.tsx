import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Html5' },
        { name: 'Css3' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js / Express'},
        { name: 'PostgreSQL'},
        { name: 'MongoDB' },
        { name: 'Supabase' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub'},
        { name: 'Docker'},
        { name: 'AWS / Cloud' },
        { name: 'Figma / Design' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl group-hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}/>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

    
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl group-hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'REST APIs',
                  'WebSockets',
                  'Redux',
                  'CI/CD',
                  'Agile',
                  'Scrum',
                  'UI/UX',
                  'Responsive Design',
                  'Performance Optimization',
                ].map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-cyan-400 rounded-full border border-cyan-500/30 text-sm font-medium hover:border-cyan-500 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  name: string;
  delay: number;
}

function SkillBar({ name, delay }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${name}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [name]);

  return (
    <div id={`skill-${name}`}>
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium">{name}</span>
      </div>
      
    </div>
  );
}
