import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function FirstSection() {
  // useInView for scroll-triggered animation
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Start animation when 10% of the element is visible
  });

  // Parent motion variants with staggered animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation by 300ms
      },
    },
  };

  // Children motion variants
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref1} // Attach ref to the motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView1 ? "visible" : "hidden"} // Only animate when in view
      className="px-5 md:px-40 pt-5 md:py-10 md:min-h-screen relative md:grid grid-cols-1 md:grid-cols-2"
    >
      {/* Title with staggered animation */}
      <div className="flex flex-col justify-center gap-5 md:gap-10 z-20">
        <motion.h1 className={`text-3xl md:text-5xl font-bold text-foreground z-20`} variants={childVariants}>
          Nina Greenwood
        </motion.h1>
        <motion.p className="text-foreground  z-20" variants={childVariants}>
          Nina Greenwood is the founder and CEO of Happy Plum, an EdTech startup revolutionizing the language learning space. A lifelong educator and passionate teacher, she has worked with students of all ages, from preschool to high school.

          <br />
          <br />Nina possesses a strong foundation in education, having attended a private school and subsequently working as an elementary and middle school teacher. This experience provided her with valuable insights into the learning needs of students and the challenges within the U.S. education system. Motivated by her classroom experiences, she pursued graduate studies in education with the goal of driving meaningful innovation in the sector.

          <br />
          Recently, Nina gained recognition through a column in Forbes magazine, highlighting the impact of her work in the EdTech industry. She focuses on creating engaging and effective language learning solutions for preschool students. Additionally, Nina's background in competitive diving and gymnastics has instilled in her a commitment to discipline and excellence, which she brings to her educational initiatives. Specializing in individualized, in-home instruction, she offers personalized learning experiences tailored to each student’s unique needs and goals. Her approach fosters greater engagement and accelerates language acquisition, as she closely monitors progress and adjusts teaching strategies to maximize learning outcomes.
        </motion.p>
      </div>
      {/* Image with staggered animation */}
      <motion.div variants={childVariants} className="flex items-center justify-center mt-5">
        <Image src="/nina.jpg" alt="Nina Greenwood" width={400} height={400} priority className="z-10 rounded-full" />
      </motion.div>
      {/* Paragraph with staggered animation */}
    </motion.div>
  );
}
