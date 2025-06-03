import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | EventNest`;
  }, [title]);

  return null;
};

export default Title;