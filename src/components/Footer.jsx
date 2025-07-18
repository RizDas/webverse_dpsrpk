import "/src/components/Footer.css";

function Footer() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="contact-banner">
        <div className="info-section">
          <div className="info-column">
            <a href="/terms-and-conditions/" target="_blank">
              Terms And Conditions
            </a>
            <a href="/refund-policy/" target="_blank">
              Refund Policy
            </a>
            <a href="/privacy-policy/" target="_blank">
              Privacy Policy
            </a>
          </div>

          <div className="info-column"></div>

          <div className="info-column">
            <div>
              <a href="https://instagram.com/">
                <img
                  src="../src/assets/instagram-logo.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                  alt="instagram"
                />
                <span style={{ marginLeft: "6px" }}>@starscope</span>
              </a>
              <a href="https://www.linkedin.com/in/">
                <img
                  src="../src/assets/linkedin-logo.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                  alt="linkedin"
                />
                <span style={{ marginLeft: "6px" }}>Starscope</span>
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src="../src/assets/facebook-logo.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                  alt="facebook"
                />
                <span style={{ marginLeft: "6px" }}>StarScope</span>
              </a>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="contact-coloumn">
            <div className="contact-coloumn">
              <div
                className="whatsapp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap", // optional for small screens
                }}
              >
                <h3 className="get-in-touch m-0" style={{ margin: 0 }}>
                  Contact us on
                </h3>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    whiteSpace: "nowrap", // prevents button text wrap
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>WhatsApp</span>
                  <img
                    src="../src/assets/whatsapp-logo.png"
                    alt="whatsapp"
                    style={{
                      width: "24px",
                      height: "24px",
                      verticalAlign: "middle",
                      marginTop: "2px",
                    }}
                  />
                </a>
              </div>
            </div>

            <p
              style={{
                marginTop: "1rem",
                marginLeft: "15px",
                color: "#d1d5db",
                fontFamily: "Poppins",
              }}
            >
              Call us on +91 9876543210 to get instant assistance.
            </p>
          </div>

          <p className="copyright">2025 Auraluxe. All Rights Reserved.</p>
        </div>

        <p className="email">support@starscope.com</p>
      </div>
      <div id="btt" onClick={toTop}>
        Back to top
      </div>
    </footer>
  );
}

export default Footer;
