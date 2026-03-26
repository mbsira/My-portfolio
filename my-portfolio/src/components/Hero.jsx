import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [ready, setReady] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex items-center justify-center relative transition-colors duration-700 overflow-hidden">

      <div className="top-0 p-4 absolute w-full">
        <h1
          ref={titleRef}
          className="text-[20rem] md:text-[21rem] sm:text-[10rem] font-[gaia] text-black dark:text-white leading-none tracking-wider transition-colors duration-500"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Portfolio
        </h1>
      </div>

      <div className="text-black dark:text-white text-[1.5rem] font-[gaia] absolute w-full h-full flex items-end justify-between p-8 pointer-events-none">

        <div
          className="pointer-events-auto"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          Mubashira Suroor
        </div>

        <div
          className="mr-4 pointer-events-auto"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s",
          }}
        >
          Designer and Developer
        </div>

        <div
          className="pointer-events-auto text-left font-sans text-[1.5rem] opacity-80"
          style={{
            opacity: ready ? 0.8 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          I design and build for the web.<br />
          Balancing aesthetics and logic,<br />
          I focus on interfaces that feel simple<br />
          and work the way people expect.<br /><br />
          I am exploring new ideas,<br />
          improving with every project,<br />
          and building things that actually ship.
        </div>

      </div>
    </section>
  )
}