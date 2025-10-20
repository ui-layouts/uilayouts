import * as React from 'react';
export default function useMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0, pixelRatio: 0 });

  const mouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    setMouse({
      x: clientX,
      y: clientY,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mouse;
}