import { useEffect, useRef } from "react";

export const useAutoResize = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    element.style.height = "auto";

    element.style.height = `${element.scrollHeight}px`;
  }, [value]);

  return ref;
};
