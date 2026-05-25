const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">

        {/* TOP */}
        <div className="row">

          {/* LEFT */}
          <div className="col-md-6 mb-3">
            <h3>FarmSmarter</h3>

            <p>
              AI-powered farming solutions for modern agriculture.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 mb-3">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <hr />

        <div className="text-center">
          © 2026 FarmSmarter. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;