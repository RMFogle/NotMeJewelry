// facebook function for FB app events to track page views in our apps analytics. 
window.fbAsyncInit = function() {
    FB.init({
      appId      : '2329018290721110',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.3'
    });
    FB.AppEvents.logPageView();   
  };





