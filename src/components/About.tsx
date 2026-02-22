import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';


export function About() {
  const features = [
    {
      Icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      Icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces',
    },
    {
      Icon: Rocket,
      title: 'Performance',
      description: 'Building fast and optimized web applications',
    },
    {
      Icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      
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
              About Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block group" style={{marginLeft:"100px"}}>
              <img
                src="./yaredImage.jpg"
                className="w-24 h-24 object-cover rounded-2xl "
                style={{
                  width:"400px",
                  height:"350px",
                  
                }}
                alt="Yared"
              />

              <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-2xl group-hover:border-cyan-400 transition-colors" />
            </div>
          </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building the future, one line at a time
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm a creative developer with a passion for building innovative web applications
              that combine stunning design with powerful functionality. With expertise in modern
              web technologies, I transform ideas into reality.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              My journey in development started with curiosity and evolved into a career dedicated
              to crafting exceptional user experiences. I believe in writing clean code, embracing
              new technologies, and continuously learning to stay at the forefront of web development.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl group-hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.Icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
