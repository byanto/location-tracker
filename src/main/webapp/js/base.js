
/**
 * @fileoverview
 * Provides methods for the Hello Endpoints sample UI and interaction with the
 * Hello Endpoints API.
 *
 * @author danielholevoet@google.com (Dan Holevoet)
 */

/** google global namespace for Google projects. */
var google = google || {};

/** devrel namespace for Google Developer Relations projects. */
google.devrel = google.devrel || {};

/** samples namespace for DevRel sample code. */
google.devrel.samples = google.devrel.samples || {};

/** hello namespace for this sample. */
google.devrel.samples.hello = google.devrel.samples.hello || {};

/**
 * Prints IP address to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printIP = function(location) {
  //var element = document.createElement('div');
  //element.classList.add('row');
  //element.innerHTML = greeting.message;
  //document.getElementById('outputLog').appendChild(element);
  document.getElementById('outputIP').innerHTML = location.ipAddress;
};

/**
 * Prints client browser to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printClient = function(location) {
  document.getElementById('outputClient').innerHTML = "Client - TODO";
};

/**
 * Prints city to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printCity = function(location) {
  document.getElementById('outputCity').innerHTML = location.city;
};

/**
 * Prints region to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printRegion = function(location) {
  document.getElementById('outputRegion').innerHTML = location.region;
};

/**
 * Prints country to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printCountry = function(location) {
  document.getElementById('outputCountry').innerHTML = location.country;
};

/**
 * Prints ISP to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printISP = function(location) {
  document.getElementById('outputISP').innerHTML = "ISP - TODO";
};

/**
 * Prints latitude to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printLatitude = function(location) {
  document.getElementById('outputLatitude').innerHTML = location.latitude;
};

/**
 * Prints longtitude to the appropriate output position.
 * param {Object} location Location of the client to print.
 */
google.devrel.samples.hello.printLongtitude = function(location) {
  document.getElementById('outputLongtitude').innerHTML = location.longtitude;
};

/**
 * Enables the button callbacks in the UI.
 */
google.devrel.samples.hello.processRequest = function() {
  gapi.client.locationtracker.getLocation().execute(
      function(resp) {
        if (!resp.code) {
          google.devrel.samples.hello.printIP(resp);
          google.devrel.samples.hello.printClient(resp);
          google.devrel.samples.hello.printCity(resp);
          google.devrel.samples.hello.printRegion(resp);
          google.devrel.samples.hello.printCountry(resp);
          google.devrel.samples.hello.printISP(resp);
          google.devrel.samples.hello.printLatitude(resp);
          google.devrel.samples.hello.printLongtitude(resp);
        } 
      });
};

/**
 * Initializes the application.
 * @param {string} apiRoot Root of the API's path.
 */
google.devrel.samples.hello.init = function(apiRoot) {
  // Loads the OAuth and helloworld APIs asynchronously, and triggers login
  // when they have completed.
  var apisToLoad;
  var callback = function() {
    if (--apisToLoad == 0) {
      google.devrel.samples.hello.processRequest();
    }
  }

  apisToLoad = 1; // must match number of calls to gapi.client.load()
  gapi.client.load('locationtracker', 'v1', callback, apiRoot);
};
