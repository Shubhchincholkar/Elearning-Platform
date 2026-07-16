import { useRef, useState } from "react";

// Wraps any card content and tilts it based on mouse position.
// rotateAmplitude controls how strong the tilt feels.
function TiltWrapper({ children, rotateAmplitude = 8, scaleOnHover = 1.03 }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.2s ease-out" }}
      className="w-full h-full"
    >
      {children}
    </div>
  );
}

export default TiltWrapper;