import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';


export function Projects() {
  const [filter, setFilter] = useState('all');

 const projects = [
  {
    title: "Full Stack Note Taking App",
    category: "fullstack",
    description:
      "Secure note-taking system with CRUD functionality and user-based data management.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Mongodb", "Postgres", "REST Api"],
    githubLink: "https://github.com/Yaya1200/My-Full-Stack-App",
    liveLink: "https://my-full-stack-app-nu.vercel.app/",
  },
  {
    title: "Full Stack Blog Website",
    category: "fullstack",
    description:
      "Blog platform with user authentication, post creation, editing and dynamic content rendering.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Mongodb", "Postgres", "REST Api"],
    githubLink: "https://github.com/Yaya1200/my-blog-with-next",
    liveLink: "https://my-blog-with-next-w61v.vercel.app/",
  },
  {
    title: "Planner App",
    category: "fullstack",
    description:
      "Productivity planner application with authentication and task scheduling system.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML", "CSS", "Next.js", "Node.js", "Express.js", "Mongodb", "Postgres", "REST Api"],
    githubLink: "https://github.com/Yaya1200/planner",
    liveLink: "https://planner-teal-iota.vercel.app/",
  },
  {
    title: "Mental Health Support Platform",
    category: "fullstack",
    description:
      "A psychology-focused platform where individuals who feel lonely can talk, share ideas, express emotions, and receive supportive responses in a safe environment.",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "Mongodb", "Postgres", "REST Api"],
    githubLink: "https://github.com/Yaya1200/Health-Care-Project",
    liveLink: "https://health-care-project-dun.vercel.app/",
  },
  {
    title: "Todo List App",
    category: "web",
    description:
      "Task management application with full CRUD operations and local storage persistence.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Mongodb", "Postgres", "REST Api"],
    githubLink: "https://github.com/Yaya1200/todo-list",
    liveLink: "https://simple1-todolist.netlify.app/",
  },
  {
    title: "Mini E-Commerce App",
    category: "fullstack",
    description:
      "Lightweight online store with cart functionality and product listing.",
    image: "https://plus.unsplash.com/premium_photo-1670863088251-500151f2117b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Yaya1200/My-Mini-E-commerce-App",
    liveLink: "https://my-mini-e-commerce-app.vercel.app/",
  },
];

  const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "web", label: "Web Apps" },
];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work across web development, mobile apps, and design
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-cyan-500'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

     
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      
                    <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Card */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden group-hover:border-cyan-500/50 transition-all">
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors"
                  aria-label={`Open GitHub for ${project.title}`}
                >
                  <Github size={20} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
