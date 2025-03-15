"use client";
import { outfit } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Articles from "./articles";

export default function AuthoredArticles() {
  // All the articles
  const articles = [
    {
      link: "https://www.forbes.com/councils/forbesbusinesscouncil/2025/02/03/5-trends-shaping-preschool-language-education-in-2025/",
      src: "/articles/nina_article3.png",
      title: "5 Trends Shaping Preschool Language Education In 2025",
    }, 
    {
      link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/11/26/how-the-preschool-education-industry-can-apply-storyfication-to-language-learning/",
      src: "/articles/nina_article2.png",
      title: "How The Preschool Education Industry Can Apply Storyfication To Language Learning",
    }, 
    {
      link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/10/21/trends-and-strategies-for-business-leaders-in-language-education/",
      src: "/articles/nina_article1.png",
      title: "Trends And Strategies For Business Leaders In Language Education",
    },  
    // {
    //   link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/09/23/from-classrooms-to-boardrooms-ais-transformative-role/",
    //   src: "/articles/nina_article1.png",
    //   title: "From Classrooms To Boardrooms: AI's Transformative Role",
    // },
    // {
    //   link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/09/11/how-leaders-can-cultivate-emotional-intelligence/",
    //   src: "/articles/nina_article2.png",
    //   title: "How Leaders Can Cultivate Emotional Intelligence",
    // },
    
  ];

  const [visibleArticles, setVisibleArticles] = useState(8); // Initially show 8 articles

  // Function to load more articles
  const showMoreArticles = () => {
    setVisibleArticles((prev) => prev + 8); // Show 8 more articles
  };

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="space-y-5">
      <motion.h1 ref={ref3} initial={{ opacity: 0, y: 20 }} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`text-4xl font-bold ${outfit.className}`}>
        Authored Articles
      </motion.h1>

      {/* <motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`${outfit.className} text-foreground-secondary`}
			>
				Authored insightful articles on AI-driven healthcare innovations,
				entrepreneurship, and leadership.
			</motion.p> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {articles.slice(0, visibleArticles).map((article, index) => (
          <Articles article={article} index={index} key={index} />
        ))}
      </div>

      {/* Show More Button */}
      {visibleArticles < articles.length && (
        <div className="flex justify-center">
          <button onClick={showMoreArticles} className="z-30 flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover">
            <Image src="/icons/sparkles.png" alt="" width={18} height={18} /> Show More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
