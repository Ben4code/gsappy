import { useState, useEffect } from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsintersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsintersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin,
        threshold: 0.5,
      }
    );
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);
  return isIntersecting
}

// export default function useOnScreen(ref, rootMargin = "0px") {
//   // State and setter for storing whether element is visible
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Update our state when observer callback fires
//         setIntersecting(entry.isIntersecting || false);
//       },
//       {
//         rootMargin,
//         threshold: 0.5,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => {
//       observer.unobserve(ref.current);
//     };
//   }); // Empty array ensures that effect is only run on mount and unmount
//   return isIntersecting
// }
