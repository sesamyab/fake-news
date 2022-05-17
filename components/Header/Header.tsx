import React, { FC } from "react";

const Header: FC = () => {
  return (
      <header id="header" className="pagewidth clearfix" itemType="https://schema.org/WPHeader">
        <div className="header-bar-old">
          <a href="https://kvartal.se" style={{display: 'block'}}>  <span className="icon-kvartal-logo white original-white" id="kvartal-logo"></span></a>
          <div id="site-description" className="site-description"><span /></div>                </div>
        {/* /.header-bar */}
        <div id="mobile-menu" className="sidemenu sidemenu-off">
          <div className="navbar-wrapper clearfix">
            <a href="https://kvartal.se" className="home-spot" />
            <div className="social-widget">
              <div id="themify-social-links-2" className="widget themify-social-links"><ul className="social-links horizontal">
                  <li className="social-link-item twitter font-icon icon-medium">
                    <a href="https://twitter.com/kvartalet" aria-label="twitter"><em><svg aria-label="Twitter" role="img" className="tf_fa tf-fab-twitter"><use href="#tf-fab-twitter" /></svg></em></a>
                  </li>
                  {/* /themify-link-item */}
                  <li className="social-link-item facebook font-icon icon-medium">
                    <a href="https://www.facebook.com/tidskriftenkvartal/" aria-label="facebook"><em><svg aria-label="Facebook" role="img" className="tf_fa tf-fab-facebook"><use href="#tf-fab-facebook" /></svg></em></a>
                  </li>
                  {/* /themify-link-item */}
                  <li className="social-link-item youtube font-icon icon-medium">
                    <a href="https://www.youtube.com/tidskriftenkvartal" aria-label="youtube"><em><svg aria-label="YouTube" role="img" className="tf_fa tf-fab-youtube"><use href="#tf-fab-youtube" /></svg></em></a>
                  </li>
                  {/* /themify-link-item */}</ul></div>                    <a className="search-button" href="#">
                <i className="fa fa-search" />
              </a>
              <div className="rss">
                <a href="https://kvartal.se/feed/" />
              </div>
            </div>
            {/* /.social-widget */}
            <a className="search-button" href="#" />                {/* /searchform-wrap */}
            <nav id="main-nav-wrap" itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
              <ul id="main-nav" className="main-nav tf_clearfix tf_box"><li className="menu-item-custom-18305 menu-item menu-item-type-custom menu-item-object-custom menu-item-18305"><a href="https://kvartal.se/podd">Podd</a> </li>
                <li className="menu-item-custom-55302 menu-item menu-item-type-custom menu-item-object-custom menu-item-55302"><a href="https://kvartal.se/nyheter/">Nyheter</a> </li>
                <li className="menu-item-custom-18307 menu-item menu-item-type-custom menu-item-object-custom menu-item-18307"><a href="https://kvartal.se/kultur">Kultur</a> </li>
                <li className="menu-item-custom-18308 menu-item menu-item-type-custom menu-item-object-custom menu-item-18308"><a href="https://kvartal.se/samhalle">Samhälle</a> </li>
                <li className="menu-item-custom-18309 menu-item menu-item-type-custom menu-item-object-custom menu-item-18309"><a href="https://kvartal.se/politik">Politik</a> </li>
                <li className="menu-item-custom-18310 menu-item menu-item-type-custom menu-item-object-custom menu-item-18310"><a href="https://kvartal.se/kronika/">Krönika</a> </li>
                <li className="menu-item-custom-18306 menu-item menu-item-type-custom menu-item-object-custom menu-item-18306"><a href="https://kvartal.se/inlasta-texter/">Inlästa texter</a> </li>
                <li className="menu-item-custom-18311 menu-item menu-item-type-custom menu-item-object-custom menu-item-18311"><a href="https://kvartal.se/gava/"><em> <svg aria-hidden="true" className="tf_fa tf-far-heart"><use href="#tf-far-heart" /></svg></em> Stöd Oss</a> </li>
              </ul>                  {/* /#main-nav */}
            </nav>
            {/* /#main-nav-wrap */}
          </div>
          <div className="header-widget tf_clear tf_clearfix">
            <div className="header-widget-inner tf_scrollbar tf_clearfix">
              <div className="col3-1 first tf_box tf_float">
                <div id="text-2" className="widget widget_text">			<div className="textwidget"><h6><span style={{color: '#fff'}}>KONTAKT</span></h6>
                    <p><small>Chefredaktör: Jörgen Huitfeldt</small><small><br />
                      </small><small>Kvartal, Box 3376, 103 67 Stockholm</small><br />
                      <small><strong>info@kvartal.se</strong></small><small> / </small><a href="https://kvartal.se/kontakt/"><small>Kontakta&nbsp;<strong>redaktionen</strong></small></a></p>
                  </div>
                </div>					</div>
              <div className="col3-1 tf_box tf_float">
                <div id="text-3" className="widget widget_text">			<div className="textwidget"><h6><span style={{color: '#ffffff'}}>DU KAN BIDRA</span></h6>
                    <p><small><a href="https://kvartal.se/gava">Med din gåva</a>&nbsp;kan vi erbjuda en plattform för<br />
                        nyfiken samhällsdebatt och kvalificerad analys.<br />
                        <strong>Swisha en gåva på&nbsp;</strong><strong>1234996484</strong>&nbsp;&nbsp;<a href="https://kvartal.se/gava/">Läs mer om hur du kan&nbsp;<strong>bidra</strong></a></small></p>
                  </div>
                </div>					</div>
              <div className="col3-1 tf_box tf_float">
                <div id="text-4" className="widget widget_text">			<div className="textwidget"><h6><span style={{color: '#ffffff'}}>OM KVARTAL</span></h6>
                    <p><small>Kvartal är en politiskt oberoende nättidskrift<br />
                        som publicerar poddar och texter med samhälls-<br />
                        journalistisk inriktning. <a href="https://kvartal.se/om-kvartal/"><strong>Mer om Kvartal</strong> </a></small></p>
                  </div>
                </div>					</div>
            </div>
            {/* /.header-widget-inner */}
          </div>
          {/* /.header-widget */}
          {/* /header-widgets */}
          <a id="menu-icon-close" href="#" />
        </div>{/* #mobile-menu */}
        {/* /#mobile-menu */}
      </header>
  )
}

export default Header