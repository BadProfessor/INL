'use strict';

const url = 'https://us-street.api.smartystreets.com/street-address?auth-id=19785289899902913&candidates=10&street=86%20Frontage%20Road&city=Belmont&state=MA';

const updateUISuccess = function(data) {
  console.log(data);
};
const updateUIError = function(error) {
  console.log(error);
};

const responseMethod = function(httpRequest) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
    }
  }
}

const createRequest = function(url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
  httpRequest.open('GET', url);
  httpRequest.send();
};
createRequest(url);