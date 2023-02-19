import React from "react";
import Instag from "../../assets/iconComponents/Instag";
import Facebook from "../../assets/iconComponents/Facebook";
import Linkedin from "../../assets/iconComponents/Linkedin";
function Footer() {
  return (
    <section>
      <footer
        className="footer d-flex flex-wrap justify-content-around
       align-items-center py-3 my-4 "
      >
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted h6">© 2023 Kysil, Inc</span>
        </div>

        <div className="nav col-md-4 justify-content-end list-unstyled d-flex h3 ">
          <Linkedin className="m-2" />

          <Instag className="m-2" />

          <Facebook className="m-2" />
        </div>
      </footer>
    </section>
  );
}
export default Footer;
