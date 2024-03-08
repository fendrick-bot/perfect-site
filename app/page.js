import Image from "next/image";
import mainCss from "./main.module.css"

export default function Home() {
  return (
    <main className={mainCss.space}>
      <div className={mainCss.image}></div>
      <div className={mainCss.text}></div>
      <div className={mainCss.text2}></div>
      <div className={mainCss.text3}></div>

      <div className={mainCss.image}></div>
      <div className={mainCss.text}></div>
      <div className={mainCss.text2}></div>
      <div className={mainCss.text3}></div>

      <div className={mainCss.image}></div>
      <div className={mainCss.text}></div>
      <div className={mainCss.text2}></div>
      <div className={mainCss.text3}></div>
      
    </main>
  );
}
