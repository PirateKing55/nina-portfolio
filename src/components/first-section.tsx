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
  <br />My connection to building in edtech is deeply personal and purpose-driven. As a Chinese adoptee raised in the U.S., I experienced firsthand the power of education to bridge cultures and identities. Relearning Mandarin as a second language wasn’t just about words—it was about reconnecting with family, heritage, and self. That experience shaped my belief that education should be deeply human, accessible, and personalized.
As a former teacher, I saw how traditional systems often fail to support the diverse needs of students—especially neurodiverse learners and English language learners. I built my edtech company to change that. I’m combining AI with real classroom insight to create tools that empower educators, support individual learning journeys, and close equity gaps. 
For me, edtech isn’t about replacing teachers or chasing trends. It’s about building tools that amplify what great educators already do and make transformative learning accessible at scale.

  <br /><br />As a former teacher and lifelong educator, I’m deeply excited to be building in the edtech space. My classroom experience taught me that the right tools can transform a student’s confidence, curiosity, and long-term success—but too often, those tools don’t exist or aren’t designed with real educators in mind.
That’s why I’ve committed myself to creating technology that’s grounded in real-world classroom needs. Now, at the Harvard Graduate School of Education, I’m continuing this work through research and development in generative AI—exploring how it can personalize learning, support neurodiverse students, and reduce the administrative burden on teachers.
This isn’t just a field I’m working in—it’s a mission I believe in. I’m building solutions that merge cutting-edge AI with the empathy and adaptability of great teaching.
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
