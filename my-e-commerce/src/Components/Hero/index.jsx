import heroImage from "../../assets/images/colouredcottonspiral.jpg";

export const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Different Coloured cotton twisted in a spiral"
          />
        </div>
        <div className="hero-info-container">
          <h2>MOMENTS IN COTTON</h2>
          <div>
            <p>STYLISH,COMFORTABLE,SUSTAINABLE.</p>
            <p className="bigger-screen-paragraphs">CRAFTED FOR LIFE.</p>
            <p className="bigger-screen-paragraphs">SHOP NEW ARRIVALS</p>
          </div>
          <button>EXPLORE NOW</button>
        </div>
      </section>
    </>
  );
};
