import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

function App() {
  return (
    <div className="mx-auto py-4 container flex flex-col items-center justify-center min-h-screen">
      <Tooltip>
        <TooltipTrigger>
          <a href="mailto:mail@cybervoid.my">
            <h1>CyberVoid</h1>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <small>Email me</small>
        </TooltipContent>
      </Tooltip>

      <p className="text-center leading-none">
        Email:{' '}
        <a className="hover:underline" href="mailto:mail@cybervoid.my">
          mail@cybervoid.my
        </a>
      </p>
    </div>
  )
}

export default App
