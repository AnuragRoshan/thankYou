"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ConfettiPiece = ({ delay }: { delay: number }) => {
  const randomColor = () => {
    const colors = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <motion.div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: randomColor(),
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1, 1, 0],
        y: [0, -100, 100],
        x: [0, -50, 50],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  );
};

const ConfettiExplosion = () => {
  // Use React.ReactNode[] instead of JSX.Element[]
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newPieces = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push(<ConfettiPiece key={i} delay={i * 0.02} />);
    }
    setPieces(newPieces);
  }, []);

  return <div className="fixed inset-0 pointer-events-none">{pieces}</div>;
};

export default ConfettiExplosion;
