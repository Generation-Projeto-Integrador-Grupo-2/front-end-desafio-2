import { motion, useScroll, useMotionValue, useMotionValueEvent, animate, MotionValue } from "motion/react"
import { useRef } from "react"

const testimonials = [
  {
    nome: "Lorena Belo",
    cidade: "Belém - PA",
    depoimento: "O rebU transformou minha rotina! Seguro, rápido e prático.",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/lorena.jpg?updatedAt=1749063697065"
  },
  {
    nome: "Iago William",
    cidade: "Felício dos Santos - MG",
    depoimento: "Economizei muito compartilhando caronas pelo rebU.",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/iago.jpg?updatedAt=1749064108847",
  },
  {
    nome: "Giulio Gabriel",
    cidade: "São Paulo - SP",
    depoimento: "Conheci pessoas incríveis e ajudo o planeta. Sensacional!",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/giulio.jpg?updatedAt=1749064108839",
  },
  {
    nome: "Elisa Bicudo",
    cidade: "Osasco - SP",
    depoimento: "O rebU deixou meu dia a dia mais leve e o UX design é simplesmente incrível!!",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/elisa.jpg?updatedAt=1749064842627",
  },
  {
    nome: "Geandro Araújo",
    cidade: "Balneário Camboriú - SC",
    depoimento: "Com o rebU, ficou fácil descer pra BC com carona garantida!",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/geandro.jpg?updatedAt=1749064842748",
  },
  {
    nome: "Claudia B.E.",
    cidade: "São Paulo - SP",
    depoimento: "Com o rebU, minha rotina ficou mais leve e meu bem-estar melhorou!.",
    avatarUrl: "https://ik.imagekit.io/6tjnbersb/TestimonialsRebu98/claudia.jpg?updatedAt=1749064842855",
  },
]

export default function TestimonialsCarousel() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <section className="py-16 bg-[#f3f4f6]">
      <h2 className="text-3xl font-bold text-center mb-8">O que dizem sobre o <span className="text-[#84cc16] font-bold">rebU98</span></h2>
      <div id="carousel" className="relative max-w-4xl mx-auto">
        <motion.ul ref={ref} style={{ maskImage }} className="flex gap-4 overflow-x-scroll px-2">
          {testimonials.map((t, i) => (
            <li key={i} className="bg-white shadow-md rounded-xl p-6 w-[250px] flex-shrink-0 text-center">
              <img src={t.avatarUrl} alt={t.nome} className="w-18 h-18 rounded-full mx-auto mb-2" />
              <p className="font-semibold text-[#84cc16]">{t.nome}</p>
              <p className="text-sm text-[#6b7280]">{t.cidade}</p>
              <p className="text-sm text-gray-600 mt-2">"{t.depoimento}"</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>

  )
}

const left = `0%`, right = `100%`, leftInset = `20%`, rightInset = `80%`
const transparent = `#0000`, opaque = `#000`

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`

  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`)
    } else if (value === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`)
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`)
    }
  })

  return maskImage
}
