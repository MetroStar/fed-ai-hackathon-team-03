import React from 'react';
import facebookIcon from '~uswds/dist/img/usa-icons/facebook.svg';
import instagramIcon from '~uswds/dist/img/usa-icons/instagram.svg';
import rssIcon from '~uswds/dist/img/usa-icons/rss_feed.svg';
import twitterIcon from '~uswds/dist/img/usa-icons/twitter.svg';
import youtubeIcon from '~uswds/dist/img/usa-icons/youtube.svg';
import logo from '/img/logo--white.svg';

export const Footer = (): React.ReactElement => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <a
          href="/#"
          onClick={(event) => {
            scrollToTop(event);
          }}
        >
          Return to top
        </a>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div
              className="
                usa-footer__logo
                grid-row
                mobile-lg:grid-col-6 mobile-lg:grid-gap-2
              "
            >
              <div className="mobile-lg:grid-col-auto">
                <img
                  className="usa-footer__logo-img"
                  style={{ height: '80px', maxWidth: 'unset' }}
                  src={logo}
                  alt="NSF Logo"
                />
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                <div className="grid-col-auto">
                  <a className="usa-social-link" href="/#">
                    <img
                      className="usa-social-link__icon"
                      src={facebookIcon}
                      alt="Facebook"
                    />
                  </a>
                </div>

                <div className="grid-col-auto">
                  <a className="usa-social-link" href="/#">
                    <img
                      className="usa-social-link__icon"
                      src={twitterIcon}
                      alt="Twitter"
                    />
                  </a>
                </div>

                <div className="grid-col-auto">
                  <a className="usa-social-link" href="/#">
                    <img
                      className="usa-social-link__icon"
                      src={youtubeIcon}
                      alt="YouTube"
                    />
                  </a>
                </div>

                <div className="grid-col-auto">
                  <a className="usa-social-link" href="/#">
                    <img
                      className="usa-social-link__icon"
                      src={instagramIcon}
                      alt="Instagram"
                    />
                  </a>
                </div>

                <div className="grid-col-auto">
                  <a className="usa-social-link" href="/#">
                    <img
                      className="usa-social-link__icon"
                      src={rssIcon}
                      alt="RSS"
                    />
                  </a>
                </div>
              </div>
              <h2 className="usa-footer__contact-heading">
                Contact Information
              </h2>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:(703) 292-5111">(703) 292-5111</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:&lt;info@agency.gov&gt;">
                      Sign up for email updates
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                Vulnerability Disclosures
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                Inspector General
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                Privacy
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                FOIA
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                No FEAT Act
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                USA.gov
              </a>
            </li>
            <li
              className="
                mobile-lg:grid-col-4
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a className="usa-footer__primary-link" href="/#">
                Accessibility
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
