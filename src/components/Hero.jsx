import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [ready, setReady] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  })

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col relative transition-colors duration-700 overflow-hidden">

      <div className="w-full p-0">
        <h1
          ref={titleRef}
          className="font-[gaia] py-1 text-black dark:text-white leading-none tracking-wider w-full"
          style={{
            fontSize: "21.4vw",
            ...anim(0),
          }}
        >
          Portfolio
        </h1>
      </div>

      <div className="flex-1 flex items-center px-8">
        <div
          className="text-left font-sans leading-relaxed"
          style={{
            fontSize: "clamp(1.3rem, 1.8vw, 1.4rem)",
            maxWidth: "520px",
            lineHeight: "1.8",
            ...anim(0.5),
          }}
        >
          I create web designs and web development work.
          I search for new concepts which I test through
          my work in each project.
          <br /><br />
          I develop my skills through every project I complete
          while constructing products which reach the market.
        </div>
      </div>

      <div className="w-full flex items-end justify-between px-4 pb-8">
        <div
          className="font-[gaia]"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            ...anim(0.2),
          }}
        >
          Mubashira Suroor
        </div>
        <div
          className="font-[gaia]"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            ...anim(0.35),
          }}
        >
          Designer and Developer
        </div>
      </div>

    </section>
  )
}