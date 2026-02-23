import { useEffect, useRef } from "react";
import { Mail, ExternalLink } from "lucide-react";

export default function App() {
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

  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            video.classList.add("fade-in");
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

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
          <p>第三象限的悲观主义者，但热爱运动。现居成都。</p>
        </section>

        <section id="reading">
          <h2>Reading</h2>
          <ul className="hanging-list">
            {books.map((book, index) => (
              <li key={index}>
                <span className="year">{book.year}</span>
                {book.title}
              </li>
            ))}
          </ul>
        </section>

        <section id="travel">
          <h2>Travel</h2>
          <p>城市观察、徒步、远行。旅行是我理解世界的方式。</p>

          <div className="travel-video-row">
            {[1, 2, 3].map((num, index) => (
              <div className="video-wrapper" key={num}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={`/videos/travel${num}.mp4`}
                  muted
                  loop
                  playsInline
                />
                <div className="play-overlay">▶</div>
              </div>
            ))}
          </div>
        </section>

        <section id="photography">
          <h2>Photography</h2>
          <div className="photo-grid">
            <img src="../public/videos/travel1.mp4" alt="" />
            <img src="../public/videos/travel2.mp4" alt="" />
            <img src="../public/videos/travel3.mp4" alt="" />
            <img src="../public/videos/travel4.mp4" alt="" />
          </div>
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
              <a href="https://v.douyin.com/VWYUIrtxV2Y/" target="_blank" rel="noreferrer">
                Douyin
              </a>
            </li>
            <li>
              <ExternalLink size={16} />
              <a href="https://www.douban.com/people/269994208/" target="_blank" rel="noreferrer">
                Douban
              </a>
            </li>
            <li>
              <ExternalLink size={16} />
              <a href="https://xhslink.com/m/39qXQZqVMys" target="_blank" rel="noreferrer">
                Xiaohongshu
              </a>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}