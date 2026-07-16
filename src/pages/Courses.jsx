import React from "react";
import TiltWrapper from "../components/TiltedCard";
import BorderGlow from "../components/BorderGlow";
import GridMotion from "../components/GridMotion";

export const courses = [
  {
    id: 1,
    title: "UI/UX Design",
    category: "Design",
    description:
      "Learn to design intuitive, user-first digital experiences. Covers wireframing, prototyping, and usability testing using Figma.",
    image:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D",
    instructor: "Aisha Verma",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.7,
    students: 12500,
    price: "₹1,499",
  },
  {
    id: 2,
    title: "Web Development",
    category: "Development",
    description:
      "Build modern, responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS from scratch.",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
    instructor: "Rohan Mehta",
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 21300,
    price: "₹1,999",
  },
  {
    id: 3,
    title: "Digital Marketing",
    category: "Marketing",
    description:
      "Master SEO, social media strategy, paid ads, and content marketing to grow any brand online.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    instructor: "Sneha Kapoor",
    duration: "5 Weeks",
    level: "Beginner",
    rating: 4.5,
    students: 9800,
    price: "₹1,299",
  },
  {
    id: 4,
    title: "Data Science",
    category: "Data",
    description:
      "Analyze real-world data and build predictive models using Python, Pandas, and core machine learning concepts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    instructor: "Karan Singh",
    duration: "12 Weeks",
    level: "Advanced",
    rating: 4.9,
    students: 15200,
    price: "₹2,499",
  },
  {
    id: 5,
    title: "Graphic Design",
    category: "Design",
    description:
      "Create compelling visuals, brand identities, and marketing assets using Adobe Illustrator and Photoshop.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    instructor: "Priya Nair",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.6,
    students: 8700,
    price: "₹1,399",
  },
  {
    id: 6,
    title: "Mobile App Development",
    category: "Development",
    description:
      "Build cross-platform iOS and Android apps using React Native, from setup to app store deployment.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    instructor: "Aditya Rao",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 11400,
    price: "₹1,899",
  },
  {
    id: 7,
    title: "Cloud Computing",
    category: "Technology",
    description:
      "Get hands-on with AWS, deployment pipelines, and cloud infrastructure fundamentals for modern applications.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    instructor: "Neha Joshi",
    duration: "9 Weeks",
    level: "Advanced",
    rating: 4.8,
    students: 7600,
    price: "₹2,199",
  },
];

function Courses() {
  return (
    <section className="relative overflow-hidden bg-(--color-bg) py-16">
      <div className="relative z-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text) text-center mb-12">
            Our <span className="text-(--color-accent)">Courses</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <BorderGlow
                key={course.id}
                glowColor="var(--color-primary)"
                className="rounded-2xl"
              >
                <TiltWrapper rotateAmplitude={8} scaleOnHover={1.03}>
                  <div className="bg-(--color-bg) rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />

                      <span className="absolute top-3 left-3 bg-(--color-primary) text-white text-xs px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-(--color-primary-light) text-(--color-primary) px-2 py-1 rounded-full">
                          {course.level}
                        </span>

                        <span className="text-sm text-(--color-text-muted)">
                          ⭐ {course.rating}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-(--color-text)">
                        {course.title}
                      </h3>

                      <p className="mt-2 text-sm text-(--color-text-muted) line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex justify-between mt-4 text-xs text-(--color-text-muted)">
                        <span>{course.instructor}</span>
                        <span>{course.duration}</span>
                      </div>

                      <div className="flex justify-between mt-4">
                        <span className="text-xs text-(--color-text-muted)">
                          {course.students.toLocaleString()} students
                        </span>

                        <span className="text-lg font-bold text-(--color-accent)">
                          {course.price}
                        </span>
                      </div>

                      <button className="mt-5 w-full py-3 rounded-full bg-(--color-primary) text-white font-semibold hover:opacity-90 transition">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </TiltWrapper>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
