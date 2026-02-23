// import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react"; 
import {useState } from "react";

export default function App() {
    const sliderRef = useRef(null);

  useEffect(() => {
        const slider = sliderRef.current;
        const handleEsc = (e) => {
        if (e.key === "Escape") {
          setActivePhoto(null);
        }
      };
        if (!slider) return;

        let scrollAmount = 0;
        let animationFrame;

        const speed = 0.5;

        const scroll = () => {
          scrollAmount += speed;
          slider.scrollLeft = scrollAmount;

          if (scrollAmount >= slider.scrollWidth / 2) {
            scrollAmount = 0;
            slider.scrollLeft = 0;
          }
          // console.log(slider.scrollLeft);
          animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        const stop = () => cancelAnimationFrame(animationFrame);
        const start = () => {
          animationFrame = requestAnimationFrame(scroll);
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
        

        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);

        return () => {
          cancelAnimationFrame(animationFrame);
          slider.removeEventListener("mouseenter", stop);
          slider.removeEventListener("mouseleave", start);
        };
  }, []); 


  const [activePhoto, setActivePhoto] = useState(null);
  
  const books = [
    { title: "霍乱时期的爱情", year: "2022" },
    { title: "花街往事", year: "2023" },
    { title: "献给阿尔吉侬的花束", year: "2021" },
    { title: "花开不败", year: "2020" },
    { title: "挪威的森林", year: "2022" },
    { title: "麦田里的守望者", year: "2019" },
    { title: "1988：我想和这个世界谈谈", year: "2023" },
    { title: "草民", year: "2024" },
    { title: "命运", year: "2024" },
    { title: "少年巴比伦", year: "2021" },
    { title: "追随她的旅程", year: "2022" },
  ];

  return (
    <div className="layout">
      
      {/* 左侧目录 */}
      <aside className="sidebar">
        <h2>周杰 / Dylan</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#reading">Reading</a>
          <a href="#travel">Travel</a>
          <a href="#photography">Photography</a>
          <a href="#links">Links</a>
        </nav>
      </aside>

      {/* 主体内容 */}
      <main className="content">

        <section id="about">
          <h1>周杰 / Dylan</h1>
          <p className="subtitle">
            A pessimist in the third quadrant, yet passionate about movement.
          </p>
          <p>
            第三象限的悲观主义者，但热爱运动。现居成都。
          </p>
        </section>

        <section id="reading">
          <h2>Reading_recently</h2>
          <div className="div_books" >
            <ul className="hanging-list">
              {books.map((book, index) => (
                <li key={index}>
                  <span className="year">{book.year}</span>
                  {book.title}
                </li>
              ))}
            </ul>
          </div>
        </section>

            
              
        <section id="travel">

          <h2>Travel</h2>
          <p>
            城市观察、徒步、远行。旅行是我理解世界的方式。
          </p>

          <div className="slider-wrapper" ref={sliderRef}>
            <div className="video-track">
              {[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10].map((num, index) => (
                <video
                  key={index}
                  src={`videos/travel${num}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ))}
            </div>
          </div>
          
        </section>

        <section id="photography">
          <h2>Photography</h2>
          <section id="photography">
            <h2>Photography</h2>

            <div className="photo-grid">
              {[
                { src: "images/photo1.jpg", title: "星星上开满了花", desc: "成都 · 2023" },
                { src: "images/photo2.jpg", title: "平潭一角", desc: "平潭 · 2024" },
                { src: "images/photo3.jpg", title: "嘿，抬头", desc: "成都 · 2023" },
                { src: "images/photo4.jpg", title: "马里冷旧", desc: "峨眉 · 2024" },
                { src: "images/photo5.jpg", title: "风车&海田", desc: "平潭 · 2024" },
                { src: "images/photo6.jpg", title: "沉思", desc: "平潭 · 2024" },
                { src: "images/photo7.jpg", title: "你看那边", desc: "平潭 · 2024" },
                { src: "images/photo8.jpg", title: "风车", desc: "平潭 · 2024" },
                { src: "images/photo9.jpg", title: "修狗们", desc: "成都 · 2022" },
                { src: "images/photo10.jpg", title: "日落", desc: "成都 · 2023" },
                { src: "images/photo11.jpg", title: "你谁？", desc: "成都 · 2018" },
                { src: "images/photo12.jpg", title: "傍晚", desc: "昆明 · 2024" },
                { src: "images/photo13.jpg", title: "群山", desc: "川西 · 2024" },
                { src: "images/photo14.jpg", title: "矮油，不错哦", desc: "海口 · 2024" },
              ].map((item, index) => (
                <div 
                className="photo-card" 
                key={index} 
                onClick={() => setActivePhoto(item)}>
                  <div className="photo-img-wrapper">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <div className="photo-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {activePhoto && (
            <div className="lightbox" onClick={() => setActivePhoto(null)}>
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="lightbox-close"
                  onClick={() => setActivePhoto(null)}
                >
                  ×
                </button>

                <img src={activePhoto.src} alt={activePhoto.title} />

                <div className="lightbox-caption">
                  <h3>{activePhoto.title}</h3>
                  <p>{activePhoto.desc}</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="links">
          <h2>Links</h2>
          <ul className="links">
            <li>
              <Mail size={16} />
              <a href="mailto:zhou.1900@jiyunhudong.com">
                zhou.1900@jiyunhudong.com
              </a>
            </li>
            <li>
              <ExternalLink size={16} />
              <a href="https://v.douyin.com/VWYUIrtxV2Y/" target="_blank">
                Douyin
              </a>
            </li>
            <li>
              <ExternalLink size={16} />
              <a href="https://www.douban.com/people/269994208/" target="_blank">
                Douban
              </a>
            </li>
            <li>
              <ExternalLink size={16} />
              <a href="https://xhslink.com/m/39qXQZqVMys" target="_blank">
                Xiaohongshu
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  )
  
}
