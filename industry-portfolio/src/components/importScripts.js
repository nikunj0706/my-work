import React, { Component } from 'react';
import loadScript from 'simple-load-script';
import $ from 'jquery';

class ImportScripts extends Component {
  componentDidMount() {
    window.$ = $;
    window.jQuery = $;
    loadScript('js/vendor/jquery-2.2.4.min.js');
    loadScript('js/vendor/bootstrap.min.js');

    loadScript('/js/easing.min.js');
    loadScript('/js/hoverIntent.js');
    loadScript('/js/superfish.min.js');
    loadScript('/js/jquery.ajaxchimp.min.js');
    loadScript('/js/jquery.magnific-popup.min.js');
    loadScript('/js/owl.carousel.min.js');
    loadScript('/js/hexagons.min.js');
    loadScript('/js/jquery.nice-select.min.js');
    loadScript('/js/jquery.counterup.min.js');
    loadScript('/js/waypoints.min.js');
    loadScript('/js/mail-script.js');
    loadScript('/js/main.js');  
  }

  render() {
    return <script />;
  }
}
export default ImportScripts;