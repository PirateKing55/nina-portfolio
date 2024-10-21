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
          Nina Greenwood is the founder and CEO of Happy Plum, an Ed-Tech startup revolutionising the language learning space. A lifelong educator and passionate teacher and entrepreneur who's worked with students of all ages ranging from 1-high school.
          <br />
          <br />I hold a strong foundation in education, having studied at a private school and worked as an elementary and middle school teacher, where I gained valuable insights into the learning needs of students and the challenges within the US education system. My experience in the classroom directly informed my decision to pursue graduate studies in education, with the goal of driving meaningful innovation in the sector.
          <br />
          Recently, I have a column in one of the major media channels. This recognition highlights the impact of my work in the ed-tech industry, where I am focused on creating engaging and effective language learning solutions for Prek students. I specialize in providing individualized, in-home instruction, offering a personalized learning experience tailored to each student’s unique needs and goals. My approach ensures that students receive focused attention in a comfortable, familiar environment, fostering greater engagement and accelerated language acquisition. Through these one-on-one
          sessions, I am able to closely monitor progress and adjust teaching strategies to maximize learning outcomes.
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
