import { FaCube, FaGlobe, FaRegSmile } from "react-icons/fa";

import service1 from './images/image4.jpeg';
import service2 from "./images/image5.jpeg";
import service3 from "./images/image6.jpeg";
import service4 from './images/image7.jpeg'
import service5 from './images/image2.jpeg'
import service6 from './images/image3.jpeg'



export const servicesData = [
  {
    title: "Dermal Fillers",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaCube className="text-2xl" />,
    img: service1,
  },
  {
    title: "Chemical Peels",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaGlobe className="text-2xl" />,
    img: service2,
  },
  {
    title: "Acne Treatment",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaRegSmile className="text-2xl" />,
    img: service3,
  },
  {
    title: "Acne Treatment",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaRegSmile className="text-2xl" />,
    img: service4,
  },
  {
    title: "Acne Treatment",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaRegSmile className="text-2xl" />,
    img: service5,
  },
  {
    title: "Acne Treatment",
    desc: "From preventive care to specialized treatments, our wide range.",
    icon: <FaRegSmile className="text-2xl" />,
    img: service6,
  },
];

export const blogsData = [
  {
    title: "How to Care for Your Skin After a Botox Treatment",
    image: "/assets/images/image10.jpeg",
    content:
      "After receiving Botox, your skin needs gentle care to ensure optimal results. Avoid touching the treated areas, skip intense workouts for 24 hours, and use mild skincare products.",
    points: [
      "Avoid massaging the treated areas for at least 24 hours.",
      "Stay upright for 4 hours post-treatment.",
      "Use gentle cleansers and moisturizers.",
      "Avoid excessive sun exposure for a few days."
    ]
  },
  {
    title: "Understanding the Causes of Acne and How to Treat It",
    image: "/assets/images/image11.jpeg",
    content:
      "Acne can result from hormonal changes, diet, or skin care products. Treatment depends on severity and may include topical creams, oral medications, or professional procedures.",
    points: [
      "Cleanse your face twice daily.",
      "Avoid harsh scrubs and over-washing.",
      "Consult a dermatologist for persistent acne.",
      "Maintain a balanced diet to support skin health."
    ]
  },
  {
    title: "Why Regular Skin Cancer Screenings Are Important",
    image: "/assets/images/image12.jpeg",
    content:
      "Regular skin cancer screenings help detect early signs of melanoma and other skin cancers. Early detection can save lives and prevent complications.",
    points: [
      "Check your skin monthly for new or changing moles.",
      "Schedule yearly dermatology visits.",
      "Protect your skin from UV exposure.",
      "Seek medical advice for suspicious skin changes."
    ]
  },
  {
    title: "Benefits of Using Sunscreen Daily",
    image: "/assets/images/blog1.jpg",
    content:
      "Daily sunscreen protects against harmful UV rays, preventing premature aging, sunburn, and skin cancer. Choose a broad-spectrum SPF 30 or higher.",
    points: [
      "Apply 15 minutes before sun exposure.",
      "Reapply every 2 hours outdoors.",
      "Use SPF even on cloudy days.",
      "Don't forget ears, neck, and hands."
    ]
  },
  {
    title: "Top 5 Tips for Maintaining Healthy Skin",
    image: "/assets/images/image6.jpeg",
    content:
      "Healthy skin is a result of consistent care, balanced nutrition, and protection from external stressors.",
    points: [
      "Follow a consistent skincare routine.",
      "Stay hydrated throughout the day.",
      "Eat a diet rich in antioxidants.",
      "Get enough sleep and manage stress.",
      "Protect skin from sun damage."
    ]
  },
  {
    title: "The Importance of Hydration for Skin Health",
    image: "/assets/images/blog2.jpg",
    content:
      "Proper hydration keeps skin plump, elastic, and glowing. Drinking enough water and using moisturizers can prevent dryness and irritation.",
    points: [
      "Drink at least 8 glasses of water daily.",
      "Use hydrating serums and moisturizers.",
      "Avoid excessive caffeine and alcohol.",
      "Include water-rich foods like fruits and vegetables."
    ]
  },
];
