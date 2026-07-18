import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../pages/Courses"; // adjust path to wherever `courses` array lives

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // course ids in your array are numbers, but params from the URL are always strings
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="p-16 text-center text-(--color-text)">
        <p>Course not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-(--color-primary) underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-(--color-bg) transition-colors duration-300 px-6 md:px-16 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-(--color-primary) font-medium hover:underline"
        >
          ← Back
        </button>

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-2xl mb-6"
        />

        <h1 className="text-3xl font-bold text-(--color-text)">{course.title}</h1>
        <p className="text-(--color-text-muted) mt-3">{course.description}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-(--color-text-muted)">
          <span>Instructor: {course.instructor}</span>
          <span>Duration: {course.duration}</span>
          <span>Level: {course.level}</span>
          <span>⭐ {course.rating}</span>
        </div>

        <p className="text-2xl font-bold text-(--color-accent) mt-6">{course.price}</p>
      </div>
    </section>
  );
}

export default CourseDetails;