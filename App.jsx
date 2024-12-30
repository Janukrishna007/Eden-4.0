import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, BarChart2, Users, Layout, Menu } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const smoothScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg p-6 flex justify-between items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center space-x-2"
        >
          <span className="text-3xl font-extrabold text-white">EDEN 4.0</span>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["about", "features", "team", "gallery", "schedule", "faq", "contact"].map((link, i) => (
            <motion.button
              key={i}
              onClick={() => smoothScroll(link)}
              className="text-white hover:text-orange-400 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.3 }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.button>
          ))}
        </div>
        <Menu className="w-6 h-6 cursor-pointer md:hidden text-white" />
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="relative pt-32 pb-24 text-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white overflow-hidden"
        style={{ clipPath: "ellipse(150% 90% at 50% 10%)" }}
      >
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-5xl font-extrabold mb-6"
        >
          Supercharge {" "}
          <span className="underline decoration-yellow-300">Innovation</span>
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          Join us for an exciting journey of creativity, collaboration, and cutting-edge technology!
        </motion.p>
        <motion.button
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="bg-white text-black px-8 py-3 rounded-full flex items-center space-x-2 mx-auto hover:bg-gray-200 transition-colors shadow-lg"
          onClick={() => smoothScroll("features")}
        >
          <span>Explore Features</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900" id="features">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Features
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="mb-4 flex justify-center">
                <BarChart2 className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Innovative Tools
              </h3>
              <p className="text-gray-400">
                Harness advanced technologies and tools to bring your ideas to life.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-900" id="team">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white">Team Member {index + 1}</h3>
              <p className="text-gray-400">Role: Developer</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-900" id="gallery">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Event Gallery
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`https://via.placeholder.com/300?text=Event+Image+${index + 1}`}
                alt={`Event Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-6 bg-gray-800" id="schedule">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Schedule
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {["Day 1", "Day 2", "Day 3"].map((day, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{day}</h3>
              <p className="text-gray-400">Details of activities planned for {day}.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-900" id="faq">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {[{
            question: "What is the hackathon about?", answer: "An exciting event that brings together innovative minds to solve real-world challenges."
          },
          {
            question: "Who can participate?", answer: "Everyone is welcome! Developers, designers, and problem-solvers alike."
          },
          {
            question: "What should I bring?", answer: "Your creativity, laptop, and chargers. We'll provide the rest!"
          }].map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-800" id="contact">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-yellow-400"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
