import { useState, useEffect } from "react";

function Home() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime({ hours, minutes, seconds });
    }

    const intervalId = setInterval(updateTime, 1000); // Save interval ID
    updateTime(); 

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="home" id="home">
      <div className="background">
        <div className="container text-center mx-auto" id="homeContent">
          <div className="row g-3 justify-content-around">
            <div className="col col-md-2 col-12">
              <div class="text-white text-center time-box">
                <div className="row small-screen-digit">
                  <div className="col digit col-md-12" id="digit1">
                    {time.hours}
                  </div>
                </div>
                <div className="row small-screen-digit">
                  <div className="col digit col-md-12" id="digit2">
                    {time.minutes}
                  </div>
                </div>
                <div className="row small-screen-digit">
                  <div className="col digit col-md-12" id="digit3">
                    {time.seconds}
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-white col-md-8 col-12">
              <h2 className="sign-1 my-0">WELCOME TO</h2>
              <h1 className="sign-2 my-0">GAME STORE</h1>
              <p className="my-5 home-text">
                Whether you're here to browse or to buy, we have everything you
                could ever wish for. We have games that have recently dropped,
                some popular games around the world, and even some classics, so
                don't miss out!
              </p>
            </div>

            <div className="col col-md-2 col-12 emoji-box">
              <div className="row mb-5 small-screen-emoji">
                <div className="col emoji">
                  <i
                    className="fa-brands fa-x-twitter fa-2xl"
                    style={{ color: "#c20000" }}
                  ></i>
                </div>
              </div>
              <div className="row mb-5 small-screen-emoji">
                <div className="col emoji">
                  <i
                    className="fa-brands fa-facebook fa-2xl"
                    style={{ color: "#c20000" }}
                  ></i>
                </div>
              </div>
              <div className="row mb-5 small-screen-emoji">
                <div className="col emoji">
                  <i
                    class="fa-brands fa-youtube fa-2xl"
                    style={{ color: "#c20000" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn button-home">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
