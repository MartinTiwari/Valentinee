import { useState, useEffect, useRef } from "react"

import image1 from "../assets/timeline/image1.jpeg"
import image2 from "../assets/timeline/image2.jpeg"
import image3 from "../assets/timeline/image3.jpeg"
import image4 from "../assets/timeline/image4.jpeg"

/* ================= SCROLL ANIMATION HOOK ================= */

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

/* ================= CONFETTI ================= */

function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-pink-400 rounded-full animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            backgroundColor: ["#fb7185", "#f472b6", "#facc15"][i % 3],
          }}
        />
      ))}
    </div>
  )
}

/* ================= MAIN ================= */

export default function Home() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [celebrate, setCelebrate] = useState(false)

  function handleYes() {
    setCelebrate(true)
    setTimeout(() => setStep(4), 1200)
  }

  return (
    <div className="min-h-screen">
      {celebrate && <Confetti />}
      {step === 1 && <Intro onNext={() => setStep(2)} />}
      {step === 2 && <Timeline onNext={() => setStep(3)} />}
      {step === 3 && <Question onYes={handleYes} />}
      {step === 4 && <Final />}
    </div>
  )
}

/* ================= PAGE 1 : INTRO ================= */

function Intro({ onNext }: { onNext: () => void }) {
  return (
    <div className="intro-wrapper">
      <div className="intro-card">
        <h1 className="intro-title">Sun Gajedi 💖</h1>

        <p className="intro-text">
          aba aruko dekhda dekhda banauna manlagyo so
           let’s begin 🌸
        </p>

        <button className="intro-btn" onClick={onNext}>
          Yaha thich 💌
        </button>
      </div>
    </div>
  )
}



/* ================= PAGE 2 : TIMELINE ================= */

function Timeline({ onNext }: { onNext: () => void }) {
  const items = [
    { image: image1, title: "The day we first met 💫", date: "2024/05/07" },
    { image: image2, title: "Moments that changed everything ❤️", date: "Sukenass" },
    { image: image3, title: "Memories I’ll never forget ✨", date: "Always" },
    { image: image4, title: "Our story continues 💖", date: "Forever" },
  ]

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-title">Our Story</h2>

      <div className="timeline-container">
        <div className="timeline-line" />

        {items.map((item, index) => {
          const { ref, visible } = useInView()
          const isLeft = index % 2 === 0

          return (
            <div key={index} ref={ref} className="timeline-item">
              <div className="timeline-dot" />

              <div
                className={`timeline-card ${
                  isLeft ? "timeline-left" : "timeline-right"
                } ${visible ? "timeline-visible" : "timeline-hidden"}`}
              >
                <div className="timeline-image-box">
                  <img src={item.image} alt="memory" />
                </div>

                <h3 className="timeline-title-text">{item.title}</h3>
                <p className="timeline-date">{item.date}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="timeline-next-wrapper">
        <button className="timeline-next-btn" onClick={onNext}>
          One Last Question 💖
        </button>
      </div>
    </div>
  )
}

/* ================= PAGE 3 : QUESTION ================= */

function Question({ onYes }: { onYes: () => void }) {
  const [style, setStyle] = useState({})

  function moveNo() {
    const x = Math.random() * 300 - 150
    const y = Math.random() * 200 - 100
    setStyle({
      transform: `translate(${x}px, ${y}px)`
    })
  }

  return (
    <div className="question-wrapper">
      <div className="question-card">
        <h2 className="question-title">
          Chatak ta dekhauna parihalyo hallayeraa
          SO, Will you be my Valentine? 💘
        </h2>

        <div className="question-buttons">
          <button className="question-yes" onClick={onYes}>
            YES 💖
          </button>

          <button
            className="question-no"
            onMouseEnter={moveNo}
            style={style}
          >
            NO 🙃
          </button>
        </div>
      </div>
    </div>
  )
}

  



/* ================= PAGE 4 : FINAL ================= */

function Final() {
  return (
    <div className="final-wrapper">
      {/* CONFETTI */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 3}s`,
            backgroundColor: ["#fff", "#fde68a", "#fecaca"][i % 3],
          }}
        />
      ))}

      {/* CARD */}
      <div className="final-card">
        <h1 className="final-title">YAYYYYYYYY 💖🎉</h1>

        <p className="final-text">
          Thichesi ta YES bhaihalyoni 😂  
          Teinii, Thank you for being my Valentine.  
          This moment means more to me than you know ra 2 barsa ni huna lagyoo ✨
        </p>
      </div>
    </div>
  )
}


