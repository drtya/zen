$(document).ready(function () {

    const partners = $("#partners")
    partners.owlCarousel({
        items: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        margin: 108,
        dots: false
    });

    const partners_sec = $("#partners_sec")
    partners_sec.owlCarousel({
        items: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        margin: 108,
        dots: false
    });
});