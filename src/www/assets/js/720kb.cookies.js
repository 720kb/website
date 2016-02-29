(function () {

  var cookieDiv = document.getElementById('cookies')
  , cookieBtn = document.getElementById('720kb-cookie-button')
  , cookieAccept = function cookieAccept() {

    localStorage['720kb-cookie-accept'] = true;
    toggleCookieAlert();
  }
  , toggleCookieAlert = function toggleCookieAlert() {

    if (!localStorage['720kb-cookie-accept']) {

      cookieDiv.style.display = 'initial';
    } else {

      cookieDiv.style.display = 'none';
    }
  };

  cookieBtn.onclick = function onCookieClick() {

    cookieAccept();
  };

  toggleCookieAlert();
}());
