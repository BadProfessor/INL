'use strict';

//const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=19785289899902913&candidates=10&street=86%20Frontage%20Road&city=Belmont&state=MA';
const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=19785289899902913&candidates=10';
const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=7NPUhkm1jtqX7Muj86oafxkn0XLycFvDN8jwjWE1';
const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//const $zipField = $('#zip');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkSection = document.querySelector('#specials');

const smartyUpdateUISuccess = function(data) {
  const parsedData = JSON.parse(data);
//  console.log(parsedData);
  const zip = parsedData[0].components.zipcode;
  const plus4 = parsedData[0].components.plus4_code;
//  console.log(zip + '-' + plus4);
  zipField.value = zip + '-' + plus4;
};
const parkUpdateUISuccess = function(data) {
  console.log(data);
  parkThumb.src = 'https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png';
  parkSection.classList.remove('hidden');
}
const smartyUpdateUIError = function(error) {
  console.log(error);
};
const parkUpdateUIError = function(error) {
  console.log(error);
};

const responseMethod = function(httpRequest, succeed, fail) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      succeed(httpRequest.responseText);
    } else {
      fail(httpRequest.status + ': ' + httpRequest.responseText);
    }
  }
}

const createRequest = function(url, succeed, fail) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
  httpRequest.open('GET', url);
  httpRequest.send();
};

const checkCompletion = function() {
  if (addressField.value !== '' &&
      cityField.value !== '' &&
      stateField.value !== '') {
        const requestUrl = smartyUrl + 
          '&street=' + addressField.value + 
          '&city=' + cityField.value + 
          '&state=' + stateField.value;
        createRequest(requestUrl, smartyUpdateUISuccess, smartyUpdateUIError);
      }
}
//createRequest(smartyUrl);
createRequest(parksUrl, parkUpdateUISuccess, parkUpdateUIError);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);