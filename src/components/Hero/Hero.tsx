import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-label">
            BUGÜN NE İÇİYORUZ?
          </p>

          <h1 className="hero-title">
            Kahveni
            <span className="hero-title-accent">
              keşfet<span className="hero-dot">.</span>
            </span>
          </h1>

          <p className="hero-description">
            Espresso mu, filtre mi, yoksa buz gibi bir kahve mi?
            <br />
            Seçim senin.
          </p>

          <button className="hero-button" type="button">
            <span>KAHVEMİ SEÇ</span>
            <span className="hero-button-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
