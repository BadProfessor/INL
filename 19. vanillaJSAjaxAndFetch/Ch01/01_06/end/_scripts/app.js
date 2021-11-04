'use strict';

const url = 'https://us-street.api.smartystreets.com/street-address?auth-id=19785289899902913&candidates=10&street=86%20Frontage%20Road&city=Belmont&state=MA';

const createRequest = function(url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => {
    if (httpRequest.readyState === 4) {
      console.log(httpRequest.responseText)
    }
  });
  httpRequest.open('GET', url);
  httpRequest.send();
};
createRequest(url);