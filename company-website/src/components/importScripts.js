import React, { Component } from 'react';
import loadScript from 'simple-load-script';
import $ from 'jquery';

class ImportScripts extends Component {
  componentDidMount() {
    window.$ = $;
    window.jQuery = $;
  

    loadScript('/js/main.js');  
    loadScript('/js/custom.js');
   
  }

  render() {
    return <script />;
  }
}
export default ImportScripts;