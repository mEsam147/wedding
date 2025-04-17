import AuthPart from "./AuthPart";
import MidHeader from "./MidHeader";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7 }}
    >
      <AuthPart />
      <MidHeader />
    </motion.div>
  );
}
