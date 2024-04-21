import Image from "next/image";
import mainCss from "./main.module.css"
import SearchBox  from "@/components/Searchbox";
import DonutChart from "@/components/DonutChart/DonutChart";

export default function Home() {
  return (
    
    
    
    <main className={mainCss.space}>
      <br></br>
      <h2>Enter Station to Continue:</h2>
      <SearchBox />
      <br /><br />
      <DonutChart/>

      <br></br>
      <br></br>
      <br></br>
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
