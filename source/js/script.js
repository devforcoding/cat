// Меню на мобильниках

var nav = document.querySelector(".nav");
var navToggle = nav.querySelector(".nav__toggle");
var navList = nav.querySelector(".nav__list");

navList.classList.add("nav__list--close");

navToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    navList.classList.toggle("nav__list--close");
    navToggle.classList.toggle("nav__toggle--close");
});


// Карта

function initialize() {
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(((screen.width < 1200) ? 59.93877121663107 : 59.939075), ((screen.width < 1200) ? 30.323274149999975 : 30.31965))
    };
    var map = new google.maps.Map(document.getElementById("api-map"), mapOptions);
    var image = (screen.width < 768) ? "img/map-pin-small.png" : "img/map-pin.png";
    var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);


