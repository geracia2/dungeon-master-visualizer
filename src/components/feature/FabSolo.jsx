import React from "react";
import { useParams } from "react-router-dom";
// import jQuery
import $ from "jquery";

export default function FabSolo() {
  // looks at current page url and finds the param to display iFrame src
  const { id } = useParams();

  // function to enable a full window view. iFrame doesn't have full window, just a px dimension
  function iframeHeight() {
    var newHeight = $(window).height();
    var newWidth = $(window).width();
    var buffer = 0; // space required for any other elements on the page
    var newIframeHeight = newHeight - buffer;

    $("iframe.fop")
      .css("height", newIframeHeight * 0.7)
      .css("width", 
      // 500
      newWidth * 0.75
      ); //this will apply to all iFrames on the page, so you may want to make your jquery selector more specific.
  }

  // When DOM ready
  $(function () {
    window.onresize = iframeHeight;
    iframeHeight();
  });

  // this was suggested from sketchfab but it works without it:
  //   var iframe = document.getElementById( 'api-frame' );
  //   client.init( id, {
  //     success: function onSuccess( api ){
  //         api.start();
  //         api.addEventListener( 'viewerready', function() {
  //             // API is ready to use
  //             // Insert your code here
  //             console.log( 'Viewer is ready' );
  //         } );
  //     },
  //     error: function onError() {
  //         console.log( 'Viewer error' );
  //     }
  // } );

  return (
    <>
      <div>FabSolo</div>
      <iframe
        src={`https://sketchfab.com/models/${id}/embed`}
        id="api-frame"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        accelerometer="true"
        // resize stuff:
        target="_parent"
        // width="100%"
        // height="100%"
        class="fop"
        frameBorder="0"
      />
    </>
  );
}
