'use strict';

const url = 'https://us-street.api.smartystreets.com/street-address?auth-id=36f5c695-e461-e30b-43af-893dd13840c9&auth-token=KyJaHfeiDJNCdfym0ClU&candidates=10&street=86%20Frontage%20Road&city=Belmont&state=MA';

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