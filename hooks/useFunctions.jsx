// useFunctions.js

import { useCallback } from "react";

const useFunctions = () => {
  const imageLoader = useCallback(({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  }, []);

  return { imageLoader };
};

export default useFunctions;
