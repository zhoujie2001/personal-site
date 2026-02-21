// Minimal Personal Intro Website
// Deploy-ready with Vite + GitHub Pages
// 1. npm create vite@latest personal-site -- --template react
// 2. Replace src/App.jsx with this file
// 3. npm install framer-motion
// 4. Set base:'/your-repo-name/' in vite.config.js
// 5. npm run build && deploy to GitHub Pages

import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="h-screen flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-light mb-4"
        >
          Zhou Jie
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500"
        >
          Travel · Reading · Observation
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-light mb-12"
        >
          Photography
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="aspect-square bg-gray-100 rounded-2xl"
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-light mb-12"
          >
            Video Journal
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="aspect-video bg-gray-200 rounded-2xl"
          />
        </div>
      </section>

      <footer className="py-16 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zhou Jie
      </footer>
    </div>
  );
}
