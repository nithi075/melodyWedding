import { motion } from "framer-motion";
import "./StoryTelling.css";

// Import your images
import maternityMain from "../../assets/img1.jpg";
import maternityFloat from "../../assets/img2.jpg";

import newbornMain from "../../assets/img3.jpg";
import newbornFloat from "../../assets/img4.jpg";

const photographyData = [
  {
     id: 1,
  mini: "Bride Photography",
  title: "THE ELEGANCE OF A BRIDE",
  desc: "I capture the grace, beauty, and emotions of a bride’s most unforgettable moments, turning every glance, smile, and detail into timeless memories filled with love and elegance.",
    
    imageMain: maternityMain,
    imageFloat: maternityFloat,
  },

{
  id: 2,

  mini: "Pre Wedding Shoot",

  title: "BEFORE THE FOREVER",

  desc: "Every glance, every laugh, and every stolen moment before the wedding day is captured beautifully, turning your love story into timeless memories filled with romance and emotion.",

  imageMain: newbornMain,
  imageFloat: newbornFloat,
}
];

const StoryBlock = ({ item, isReverse }) => (
  <motion.div
    className={`story-block ${isReverse ? "reverse" : ""}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    
    {/* Images */}
    <div className="story-image">

      <img src={item.imageMain} alt={item.title} />

  

    </div>

    {/* Text */}
    <div className="story-text">
      <div className="story-mini">
        {item.mini}
      </div>

      <h2>{item.title}</h2>

      <p>{item.desc}</p>

      <a href="/contact" className="book-btn">
        Book Your Session
      </a>
    </div>

  </motion.div>
);

const Storytelling = () => {
  return (
    <section className="storytelling-section">
      {photographyData.map((item, index) => (
        <StoryBlock
          key={item.id}
          item={item}
          isReverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default Storytelling;