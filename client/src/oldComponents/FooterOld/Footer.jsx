import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src="src/components/Footer/blackicon.png" alt="Robotix Club NITRR" style={{
                width: '100px',
                height: 'auto',
                color:'black',
                 filter: 'grayscale(100%)', 
              }} />
              <p  className="color_black"style={{ marginTop: '5px' }}>Robotix Club NITRR</p>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3  className="color_black">Robotix Club</h3>
              <ul>
                <li><a href="#">Robolympiad 2024</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3  className="color_black">Links</h3>
              <ul>
                <li><a href="#">About US</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#"><i className="icon ion-social-instagram"></i></a>
              <a href="#"><i className="icon ion-social-twitter"></i></a>
              <a href="#"><i className="icon ion-social-github"></i></a>
              <a href="#"><i className="icon ion-social-linkedin"></i></a>
              <p className="copyright">Crafted by Robotix Club&apos;s Web Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;