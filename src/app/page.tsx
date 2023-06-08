import Header from "@/app/Sections/Header"
import Hero from "@/app/Sections/Hero"
import Promotions from "./Sections/Promotions"
import Features from "./Sections/Features"
import NewsLetter from "./Sections/NewsLetter"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Promotions />
      <Features />
      <NewsLetter />
    </>
  )
}
