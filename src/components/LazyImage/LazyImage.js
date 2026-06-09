import { useEffect, useRef, useState } from "react";
import "./LazyImage.css";

export default function LazyImage({ alt = "", className = "", loading = "lazy", decoding = "async", ...props }) {
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [props.src]);

  return (
    <img
      {...props}
      alt={alt}
      ref={imageRef}
      className={`${className} lazy-image ${isLoaded ? "lazy-image-loaded" : ""}`.trim()}
      loading={loading}
      decoding={decoding}
      onLoad={() => setIsLoaded(true)}
    />
  );
}
