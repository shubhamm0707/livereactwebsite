import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2021/01/logo-white-1.png"
            alt="logo"
          ></img>

          <ul type="none">
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Our Services</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
              
            </li>
          </ul>
        </nav>

        <section>
          <div className="container1">
            <h1>Bespoke Branding Solutions For Your Online Business</h1>
            <p>
              Quis ipsum gravida. Accumsan lacus vel facilisis dolore ipsum
              dolor sit amet, consectetur adipiscing.
            </p>

            <div className="buttons">
              <div className="button1 button">
                <a href="#">Get Started</a>
              </div>

              <div className="button2 button">
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
          <div className="container2">
            <img
              src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/banner-image.png"
              alt="image"
            ></img>
          </div>
        </section>
      </header>

      <div className="second">
        <div className="box1 box">
          <h3>Personalized support & SEO service</h3>

          <p>
            Quis ipsum gravida. Accumsan lacus faci dolor sit amet, consectetur.
          </p>

          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/home-16-seo@2x.png"
            alt="image"
          ></img>
        </div>

        <div className="box22 box">
          <h3>Personalized support & SEO service</h3>

          <p>
            Quis ipsum gravida. Accumsan lacus faci dolor sit amet, consectetur.
          </p>

          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/home-16-research@2x.png"
            alt="image"
          ></img>
        </div>

        <div className="box3 box">
          <h3>Personalized support & SEO service</h3>

          <p>
            Quis ipsum gravida. Accumsan lacus faci dolor sit amet, consectetur.
          </p>

          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2021/01/home-16-global@2x.png"
            alt="image"
          ></img>
        </div>
      </div>

      <div className="part2">
        <h3>We are business boosters and trusted partners</h3>

        <p>
          We provide top-notch technology services by providing simple solutions
          for your complex business problems. If you are looking to make a
          substantial impact over your competitors? Our services can give your
          business a much-needed boost.
        </p>
      </div>

      <div className="part3">
        <div className="part31">
          <div className="part3a p31 p3">
            <img src={require("../src/Assets/onep.png")} />

            <h3>Web Development</h3>
            <p>
              It encompasses developing beautiful and responsive frontend and
              backend supported web applications to fulfill real world client
              requirements.
            </p>
          </div>

          <div className="part3b p31 p3">
            <img src={require("../src/Assets/onepp.png")} />
            <h3>App Development</h3>
            <p>
              It encompasses developing native and cross platform applications
              that work dynamically with phones, tablets, smart watches, and all
              other kinds of wearable devices.
            </p>
          </div>

          <div className="part3c p31 p3">
            <img src={require("../src/Assets/oneppp.png")} />
            <h3>Seo</h3>
            <p>
              We will help you to increase the search visibility of your website
              on google which results in increasing your brand reach and
              simultaneously generating more leads.
            </p>
          </div>
        </div>

        <div className="part31">
          <div className="part3a p31 p3">
            <img src={require("../src/Assets/onepppp.png")} />

            <h3>Social Media Marketing</h3>
            <p>
            We build products and ensure they reach the desired customers.
            </p>
          </div>

          <div className="part3b p31 p3">
            <img src={require("../src/Assets/oneppppp.png")} />
            <h3>UI/UX Design</h3>
            <p>
            Everything great built seems futile, if it does not have a likeable design.
            </p>
          </div>

          <div className="part3c p31 p3">
            <img src={require("../src/Assets/onepppppp.png")} />
            <h3>Digital Marketing</h3>
            <p>
            We will help you to increase the reach of your brand by marketing it digitally.
            </p>
          </div>
        </div>
      </div>

      <div className="third">
        <div className="maincontainer">
          <div className="mainone mainc">
            <img
              src="https://credencive.com/wp-content/uploads/2022/02/4-Marketing-goals-1-1536x992.png"
              alt="image"
            />
          </div>

          <div className="maintwo mainc">
            <h2>Who we are</h2>

            <p>
              We listen your needs to determine which IT services and solutions
              are best for your business, this includes web design, app design,
              SEO, SMM, and custom software solutions.<br></br>
              <br></br>We are a team of talented and passionate developers
              working to build top-notch web and mobile app solutions for our
              clients all across the globe. We have a huge happy clientele who
              can vouch for the quality of work we deliver. We enable people and
              businesses throughout the world to realize their full potential.
              We're fulfilling this vision by creating new solutions for
              consumers and by driving innovation in the IT services industry.
            </p>

            <div className="button3 button">
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="part2 partlast">
        <h3>Are you looking for more information or want to try one of our IT services?</h3>

        <p>
          We provide top-notch technology services by providing simple solutions
          for your complex business problems. If you are looking to make a
          substantial impact over your competitors? Our services can give your
          business a much-needed boost.
        </p>

        <div className="lastb">
              <a href="#">Get Started</a>
            </div>


      </div>




      <Footer />
    </div>
  );
}

export default App;
