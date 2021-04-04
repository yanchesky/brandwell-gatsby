import { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

export function usePathTranslation(friendID) {
  const [isOnline, setIsOnline] = useState(0);

  useEffect(() => {
    setIsOnline(2);
  });

  return isOnline;
}
