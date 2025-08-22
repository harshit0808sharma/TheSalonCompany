import { FaCheck, FaPlay } from "react-icons/fa";
import { GiLipstick, GiFeather, GiEyeTarget } from "react-icons/gi";

export const servicesData = [
  {
    category: "Permanent Makeup (PMU) 💄",
    description: "Because makeup should be the last thing you worry about.",
    services: [
      {
        title: "Lip Blushing",
        desc: "A soft wash of color for lips that always look naturally perfect.",
        img: "/assets/images/lip-blushing.jpg",
      },
      {
        title: "Microblading",
        desc: "Feather-light strokes for brows that frame your face beautifully.",
        img: "/assets/images/microblading.jpg",
      },
      {
        title: "Eyeliner Tattoo",
        desc: "Timeless, smudge-proof eyeliner that lasts from morning to midnight.",
        img: "/assets/images/eyeliner.jpg",
      },
    ],
    cta: "✨ Wake up flawless. Save time. Look amazing without effort.",
  },
  {
    category: "Beauty Treatments 🌸",
    description: "Your skin deserves more than quick fixes—it deserves real care.",
    services: [
      {
        title: "Luxury Facials",
        desc: "Tailored rituals to hydrate, renew, and brighten.",
        img: "/assets/images/facial.jpg",
      },
      {
        title: "Eyebrow Lamination",
        desc: "Fuller, sculpted brows for that editorial finish.",
        img: "/assets/images/eyebrow-lamination.jpg",
      },
      {
        title: "BB Glow",
        desc: "Semi-permanent foundation for smooth, even-toned skin all day.",
        img: "/assets/images/bb-glow.jpg",
      },
    ],
    cta: "✨ Glowing skin = unstoppable confidence.",
  },
  {
    category: "Eyelash Extensions 👁",
    description: "Because your eyes deserve to do the talking.",
    services: [
      { title: "Classic", desc: "Subtle elegance, your lashes but better.", img: "/assets/images/classic-lash.jpg" },
      { title: "Hybrid", desc: "A perfect blend of natural and dramatic.", img: "/assets/images/hybrid-lash.jpg" },
      { title: "Volume", desc: "Bold, statement lashes for a striking look.", img: "/assets/images/volume-lash.jpg" },
    ],
    cta: "✨ From natural to glam, we’ve got your lash mood covered.",
  },
  {
    category: "Hair | Makeup | Nails 💇",
    description: "From everyday glam to special occasions, we bring precision and creativity to every service.",
    services: [
      { title: "Hair", desc: "Chic cuts, glossy blowouts, and transformations.", img: "/assets/images/hair.jpg" },
      { title: "Makeup", desc: "From bridal to party looks, perfectly tailored to your style.", img: "/assets/images/makeup.jpg" },
      { title: "Nails", desc: "Extensions, art, and polish that complete your look.", img: "/assets/images/nails.jpg" },
    ],
    cta: "✨ One destination for everything beauty.",
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

export const teamMembersData = [
  {
    slug: "kristin-watson",
    name: "Kristin Watson",
    position: "Senior Hair Stylist",
    email: "kristin@salon.com",
    phone: "+91 9876543210",
    experience: "12 years",
    image: "/assets/images/salon-person2.jpg",
    about: [
      "Kristin Watson has over a decade of experience in hair styling and salon treatments.",
      "She specializes in bridal hairstyles, advanced coloring, and modern trends.",
    ],
    knowAbout:
      "Kristin is dedicated to giving clients the perfect look with her creative hairstyling expertise.",
    expertise: [
      { label: "Hair Styling", value: 90 },
      { label: "Hair Coloring", value: 92 },
      { label: "Bridal Looks", value: 88 },
    ],
  },
  {
    slug: "jacob-jones",
    name: "Jacob Jones",
    position: "Makeup Artist",
    email: "jacob@salon.com",
    phone: "+91 9123456780",
    experience: "10 years",
    image: "/assets/images/salon-person1.jpg",
    about: [
      "Jacob Jones is a professional makeup artist with a passion for transforming looks.",
      "He offers customized makeup solutions for weddings, parties, and special occasions.",
    ],
    knowAbout:
      "Jacob combines artistry with modern techniques to create flawless makeup looks.",
    expertise: [
      { label: "Bridal Makeup", value: 95 },
      { label: "Party Makeup", value: 90 },
      { label: "Skin Glow", value: 85 },
    ],
  },
  {
    slug: "emily-clark",
    name: "Emily Clark",
    position: "Beauty & Skin Specialist",
    email: "emily@salon.com",
    phone: "+91 9988776655",
    experience: "8 years",
    image: "/assets/images/salon-person4.jpg",
    about: [
      "Emily Clark is passionate about skin care and salon beauty treatments.",
      "Her friendly approach makes clients feel relaxed and confident.",
    ],
    knowAbout:
      "Emily focuses on skincare, facials, and natural beauty enhancements.",
    expertise: [
      { label: "Facials", value: 85 },
      { label: "Skin Treatments", value: 88 },
      { label: "Beauty Care", value: 80 },
    ],
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    position: "Nail & Aesthetic Specialist",
    email: "priya@salon.com",
    phone: "+91 9876001234",
    experience: "9 years",
    image: "/assets/images/salon-person3.jpg",
    about: [
      "Priya Sharma is a nail and aesthetics expert known for her creativity and precision.",
      "She ensures clients always leave the salon with confidence and style.",
    ],
    knowAbout:
      "Priya specializes in nail art, extensions, and aesthetic salon treatments.",
    expertise: [
      { label: "Nail Art", value: 95 },
      { label: "Aesthetic Care", value: 87 },
      { label: "Client Experience", value: 92 },
    ],
  },
];

export const galleryData = [
  { src: "/assets/images/galleryImage1.jpg", caption: "Makup" },
  { src: "/assets/images/galleryImage2.jpg", caption: "Hair Dry"},
  { src: "/assets/images/galleryImage3.jpg", caption: "Hair ponytail"},
  { src: "/assets/images/galleryImage4.jpg", caption: "Hair Wash" },
  { src: "/assets/images/galleryImage5.jpg", caption: "Hair Cutting" },
  { src: "/assets/images/galleryImage6.jpg", caption: "Hair Cutting" },
  { src: "/assets/images/galleryImage7.jpg", caption: "Hair cutting" },
  { src: "/assets/images/galleryImage8.jpg", caption: "Beard Seving" },
  { src: "/assets/images/galleryImage9.jpg", caption: "Beard Seving" },
]

export const galleryVideoData = [
  {
    src: "",
    fallback: "/assets/images/galleryImage1.jpg",
    caption: "Makeup",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage2.jpg",
    caption: "Hair Dry",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage3.jpg",
    caption: "Hair Ponytail",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage4.jpg",
    caption: "Hair Wash",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage5.jpg",
    caption: "Hair Cutting",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage6.jpg",
    caption: "Hair Cutting",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage7.jpg",
    caption: "Hair Cutting",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage8.jpg",
    caption: "Beard Shaving",
  },
  {
    src: "",
    fallback: "/assets/images/galleryImage9.jpg",
    caption: "Beard Shaving",
  },
];


export const faqs = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we recommend booking your appointment 1–2 weeks in advance to secure your preferred time slot, especially for weekends and bridal services.",
  },
  {
    question: "Which hair treatments do you offer?",
    answer:
      "We provide a wide range of treatments including keratin, smoothening, coloring, hair spa, and advanced styling to suit every hair type.",
  },
  {
    question: "Are the products used safe for my skin and hair?",
    answer:
      "Absolutely! We only use high-quality, dermatologist-tested, and salon-grade products to ensure safe and long-lasting results.",
  },
  {
    question: "Do you provide bridal and party makeup?",
    answer:
      "Yes! Our expert artists specialize in bridal, engagement, and party makeup tailored to your style, ensuring a flawless look for every occasion.",
  },
  {
    question: "Can I get multiple services in one visit?",
    answer:
      "Definitely. Many clients book a combination of services such as hair styling, facials, nail extensions, and makeup in a single appointment.",
  },
  {
    question: "How long does a typical salon session take?",
    answer:
      "The duration depends on the service — haircuts may take 30–45 minutes, facials 45–60 minutes, and bridal packages 3–5 hours.",
  },
  {
    question: "Do you offer men’s grooming services?",
    answer:
      "Yes, we also provide services for men including haircuts, beard styling, facials, and hair treatments.",
  },
  {
    question: "What hygiene standards do you follow?",
    answer:
      "We maintain the highest hygiene protocols with sanitized tools, fresh linens, and safe single-use products wherever possible.",
  },
];

export const steps = [
  {
    num: "01",
    title: "Book Your Appointment",
    desc: "Easy, flexible, and hassle-free. Schedule your session online, via phone, or WhatsApp — we work around your schedule.",
  },
  {
    num: "02",
    title: "Arrive & Relax",
    desc: "Step into luxury. From soothing music to comfy seating, every detail ensures your experience begins with calm and comfort.",
  },
  {
    num: "03",
    title: "Consultation & Custom Plan",
    desc: "Your goals guide our artistry. Our expert artists recommend treatments tailored to your style, lifestyle, and personality.",
  },
  {
    num: "04",
    title: "Service Execution with Precision",
    desc: "Expert hands, flawless results. PMU, lashes, facials, hair, or nails — we combine skill, premium products, and attention to detail.",
  },
  {
    num: "05",
    title: "Reveal & Feedback",
    desc: "Admire your new look! We walk you through the results, provide aftercare tips, and ensure you leave radiant and confident.",
  },
  {
    num: "06",
    title: "Stay Connected",
    desc: "Ongoing care & tips. Follow-ups, reminders, and guidance ensure your results last longer and you continue feeling fabulous.",
  },
];

export const proocessSteps = [
  {
    title: "Personalized Consultation",
    desc: "Our experts take the time to understand your style, preferences, and goals, ensuring the results match your personality and lifestyle.",
    icon: <FaPlay className="text-xl" />
  },
  {
    title: "Expert Recommendations",
    desc: "We suggest the best treatments, techniques, and products for your unique needs. One-size-fits-all doesn’t exist in beauty.",
    icon: <GiLipstick className="text-xl" />
  },
  {
    title: "Precision & Care",
    desc: "Certified artists bring years of experience and meticulous attention to detail to every service, crafted to perfection.",
    icon: <GiFeather className="text-xl" />
  },
  {
    title: "Relax & Enjoy",
    desc: "Sit back in our luxurious, calming environment and enjoy the experience as indulgent as the results themselves.",
    icon: <GiEyeTarget className="text-xl" />
  },
  {
    title: "Walk Out Radiant",
    desc: "Leave the salon confident, glowing, and ready to conquer your day. Our work fits effortlessly into your life.",
    icon: <FaCheck className="text-xl" />
  },
  {
    title: "Continuous Care",
    desc: "From aftercare tips to follow-up consultations, we ensure your results last longer and look better over time.",
    icon: <FaCheck className="text-xl" />
  }
];

export const testimonials = [
  {
    name: "Riya",
    role: "Noida – Brow Transformation",
    text: "The best decision of my life—I never thought my brows could look this perfect. Waking up confident is priceless.",
    avatar: "/assets/images/person5.png",
  },
  {
    name: "Aditi",
    role: "Noida – Luxury Facial",
    text: "I’ve had facials before, but nothing compares to how luxurious and relaxing this was. My skin feels brand new!",
    avatar: "/assets/images/person6.jpg",
  },
  {
    name: "Shruti",
    role: "Noida – Lash Extensions",
    text: "The lashes gave me such a confidence boost. Everyone kept asking if I had mascara on—it felt amazing!",
    avatar: "/assets/images/person6.jpg",
  },
  {
    name: "Priya",
    role: "Noida – Hair & Makeup",
    text: "From consultation to the final look, the team made me feel special. My bridal makeup was flawless and lasted all day!",
    avatar: "/assets/images/person5.png",
  },
  {
    name: "Sneha",
    role: "Noida – PMU & Nails",
    text: "The results were beyond my expectations. The attention to detail is incredible—I can’t recommend The Salon Company enough!",
    avatar: "/assets/images/person5.png",
  },
];

export const features = [
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Expert Artists',
      desc: 'Certified professionals with years of experience delivering flawless results.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Luxury Experience',
      desc: 'A space designed to pamper, relax, and delight you every visit.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Personalized Care',
      desc: 'Every service is customized to your unique needs and style.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Premium Products',
      desc: 'Only the finest pigments, tools, and techniques for lasting results.',
    },
    {
      icon: <FaCheck className="text-xl" />,
      title: 'Results That Last',
      desc: 'Flawless beauty that stays from morning to night.',
    },
  ];