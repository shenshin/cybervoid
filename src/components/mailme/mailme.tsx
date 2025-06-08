import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion, type Variants, type Transition } from 'motion/react'

const variants = {
  hidden: { y: 50, opacity: 0.0 },
  visible: { y: 0, opacity: 1.0 },
} satisfies Variants

const transition = {
  opacity: {
    duration: 1.9,
    delay: 1.1,
  },
  y: {
    delay: 1,
    duration: 2,
    ease: 'circOut',
  },
} satisfies Transition

export function MailMe() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={transition}>
      <Tooltip>
        <TooltipTrigger>
          <a href="mailto:mail@cybervoid.my">
            <h1>CyberVoid</h1>
            <p className="text-center leading-none">
              Email: <span className="hover:underline">mail@cybervoid.my</span>
            </p>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <small>Email me</small>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  )
}
