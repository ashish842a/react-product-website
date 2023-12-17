import React from 'react';
import SofaImg from "../../images/sofa.png"
import EnvelopeImg from "../../images/envelope-outline.svg"

const socialLinks = [
  { id: 1, icon: 'fa fa-brands fa-facebook-f', href: '#' },
  { id: 2, icon: 'fa fa-brands fa-twitter', href: '#' },
  { id: 3, icon: 'fa fa-brands fa-instagram', href: '#' },
  { id: 4, icon: 'fa fa-brands fa-linkedin', href: '#' },
];

const footerLinks = [
  { id: 1, title: 'About us', href: '#' },
  { id: 2, title: 'Services', href: '#' },
  { id: 3, title: 'Blog', href: '#' },
  { id: 4, title: 'Contact us', href: '#' },
  { id: 5, title: 'Support', href: '#' },
  { id: 6, title: 'Knowledge base', href: '#' },
  { id: 7, title: 'Live chat', href: '#' },
  { id: 8, title: 'Jobs', href: '#' },
  { id: 9, title: 'Our team', href: '#' },
  { id: 10, title: 'Leadership', href: '#' },
  { id: 11, title: 'Privacy Policy', href: '#' },
  { id: 12, title: 'Nordic Chair', href: '#' },
  { id: 13, title: 'Kruzo Aero', href: '#' },
  { id: 14, title: 'Ergonomic Chair', href: '#' },
];

function FooterSection() {
  return (
    <div className="container relative">
    <div className="sofa-img">
      <img src={SofaImg} alt="SofaImg" className="img-fluid" />
    </div>

    <div className="row">
      <div className="col-lg-8">
        <div className="subscription-form">
          <h3 className="d-flex align-items-center">
            <span className="me-1">
              <img src={EnvelopeImg} alt="EnvelopeImg " className="img-fluid" />
            </span>
            <span>Subscribe to Newsletter</span>
          </h3>

          <form action="#" className="row g-3">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-auto">
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">
                <span className="fa fa-paper-plane"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="row g-5 mb-5">
      <div className="col-lg-4">
        <div className="mb-4 footer-logo-wrap">
          <a href=" " className="footer-logo">
            Furni<span>.</span>
          </a>
        </div>
        <p className="mb-4">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
          tristique. Pellentesque habitant
        </p>

        <ul className="list-unstyled custom-social">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>
                <span className={link.icon}></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-lg-8">
        <div className="row links-wrap">
          {footerLinks.map((link) => (
            <div key={link.id} className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href={link.href}>{link.title}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="border-top copyright">
      <div className="row pt-4">
        <div className="col-lg-6">
          <p className="mb-2 text-center text-lg-start">
            Copyright &copy;
            <script>document.write({new Date().getFullYear()});</script>
            . All Rights Reserved. &mdash; Designed with ❤️ by <a href="https://untree.co">Ashish Kumar</a> 
            
            {/* Distributed By{' '} */}
            {/* <a href="https://themewagon.com">ThemeWagon</a> */}
             {/* License information: https://untree.co/license/ */}
          </p>
        </div>

        <div className="col-lg-6 text-center text-lg-end">
          <ul className="list-unstyled d-inline-flex ms-auto">
            <li className="me-4">
              <a href=" ">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href=" ">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default FooterSection;
