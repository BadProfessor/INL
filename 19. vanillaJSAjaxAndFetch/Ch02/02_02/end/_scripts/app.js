'use strict';

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=19785289899902913&candidates=10&street=86%20Frontage%20Road&city=Belmont&state=MA';
const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=7NPUhkm1jtqX7Muj86oafxkn0XLycFvDN8jwjWE1';
const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//const $zipField = $('#zip');
const zipField = document.querySelector('#zip');

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
//createRequest(smartyUrl);
createRequest(parksUrl);