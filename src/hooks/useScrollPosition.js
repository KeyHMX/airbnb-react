import { useEffect, useState } from "react";
import { throttle } from "underscore";
//追踪滚动的位置
export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(function handleScroll() {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      //卸载组件时将监听器移除从而防止一些安全问题 如内存泄漏
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollX,
    scrollY,
  };
}
