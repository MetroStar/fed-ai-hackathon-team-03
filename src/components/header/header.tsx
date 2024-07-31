import { Banner, Button, Icon, Modal, Search } from '@metrostar/comet-uswds';
import { APP_TITLE } from '@src/utils/constants';
import navigation from '@uswds/uswds/js/usa-header';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import icon from '/img/ai-spark-icon.svg';

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const handleMenuClick = (): void => {
    window.scrollTo({ top: 0 });
    setShowMenu(!showMenu);
  };

  // Ensure navigation JS is loaded
  useEffect(() => {
    const bodyElement = document.body;
    navigation.on(bodyElement);

    // Ensure cleanup after the effect
    return () => {
      navigation.off(bodyElement);
    };
  });

  useEffect(() => {
    const ref = document.body.style;
    showMenu ? (ref.overflow = 'hidden') : (ref.overflow = 'visible');
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  return (
    <>
      <a className="usa-skipnav " href="#mainSection">
        Skip to main content
      </a>
      <Banner id="banner" />
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="-logo">
              <em className="usa-logo__text">
                <NavLink id="logo-link" to="/">
                  {APP_TITLE}
                </NavLink>
              </em>
            </div>
            <button
              type="button"
              className="usa-menu-btn"
              onClick={handleMenuClick}
            >
              Menu
            </button>
          </div>
          <div
            id="ai-optimized-container"
            className="padding-left-1"
            style={{ margin: 'auto auto' }}
          >
            <Button
              id="ai-optimized-btn"
              aria-controls="ai-optimized-modal"
              data-open-modal
              style={{
                display: 'block',
                width: '250px',
                backgroundColor: '#FFF5C2',
                color: '#000',
              }}
            >
              <img style={{ height: '16px' }} src={icon} alt="AI Icon" /> AI
              Optimized | Learn More
            </Button>
            <Modal id="ai-optimized-modal" heading="NSF Search is AI Optimized">
              <p>
                The National Science Foundation (NSF) is committed to making
                scientific research accessible to all. Our website has been
                GenAI optimized, meaning it has been designed to be easily
                understood and utilized by advanced AI systems, such as language
                models (LLMs). This optimization helps ensure that both human
                users and AI systems can access accurate, reliable information
                about NSF-funded research.
              </p>
              <p>
                To learn more about how the NSF uses GenAI optimization to
                improve your experience and promote science literacy, visit our{' '}
                <a href="/ai-optimized">GenAI Optimization Information Page</a>.
              </p>
            </Modal>
          </div>
          <nav className="usa-nav">
            <button type="button" className="usa-nav__close">
              <Icon id="menu-icon" type="close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <NavLink
                  id="simple-link"
                  to="/results"
                  className={`usa-nav__link ${
                    location.pathname === '/results' ? 'usa-current' : ''
                  }`}
                >
                  Simple Search
                </NavLink>
              </li>
              <li className="usa-nav__primary-item">
                <NavLink
                  id="advanced-link"
                  to="/advanced"
                  className={`usa-nav__link ${
                    location.pathname === '/advanced' ? 'usa-current' : ''
                  }`}
                >
                  Advanced Search
                </NavLink>
              </li>
            </ul>
            <section aria-label="Search component">
              <Search
                id="search"
                type="small"
                placeholder="Search our Site"
                onSearch={(event: SyntheticEvent) => {
                  const value = (event.target as HTMLInputElement).value;
                  navigate(`/results?search=${value}`);
                }}
              />
            </section>
          </nav>
        </div>
      </header>
    </>
  );
};
