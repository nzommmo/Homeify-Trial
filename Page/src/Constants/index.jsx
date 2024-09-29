import { Home, Search, Camera, MapPin, LayoutDashboard, CheckCircle } from "lucide-react";
import user1 from "../assets/Images/Profiles/user1.jpg";
import user2 from "../assets/Images/Profiles/user2.jpg";
import user3 from "../assets/Images/Profiles/user3.jpg";
import brand1 from "../assets/Images/google.png";
import brand2 from "../assets/Images/KnightFrank.png";
import brand3 from "../assets/Images/RE-Max.png";



export const features = [
  {
    icon: <Home />,
    text: "Comprehensive Property Listings",
    description:
      "We offer an extensive range of property listings that cater to all types of needs, whether you're looking to rent, buy, or sell. Our platform is designed to help you find the perfect property with ease.",
  },
  {
    icon: <Search />,
    text: "Advanced Search and Filters",
    description:
      "Our robust search engine allows users to filter properties based on location, price range, property type, and specific amenities. This ensures that you find exactly what you're looking for without wasting time.",
  },
  {
    icon: <Camera />,
    text: "High-Quality Property Photos & Virtual Tours",
    description:
      "Each listing comes with high-resolution photos, and many include 360° virtual tours to give you an immersive experience before you visit the property in person.",
  },
  {
    icon: <MapPin />,
    text: "Interactive Map Integration",
    description:
      "We've integrated interactive maps that allow users to explore property locations and neighborhoods in detail, providing a clear understanding of the surrounding area.",
  },
  {
    icon: <LayoutDashboard />,
    text: "User-Friendly Interface",
    description:
      "Our platform is intuitive and easy to use, ensuring that users of all levels can browse, compare, and shortlist properties effortlessly.",
  },
  {
    icon: <CheckCircle />,
    text: "Verified Listings",
    description:
      "We work hard to verify all listings to maintain trust and ensure that users are only presented with legitimate property opportunities.",
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  
];

export const partnerships = [
  {
    name: "Brand One",
    image: brand1,
  },
  {
    name: "Brand Two",
    image: brand2,
  },
  {
    name: "Brand Three",
    image: brand3,
  },
];