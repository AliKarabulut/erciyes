function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cookie = getCookie("kvkk");
    var gumussuyukvkktercih = getCookie("kvkktercih");
    var gumussuyukvkkistatistik = getCookie("kvkkistatistik");
    var gumussuyukvkkpazarlama = getCookie("kvkkpazarlama");

    if (cookie != "kvkk") {
        document.getElementById("kvkk_overlay").style.display = "block";
    }

    if (cookie != "kvkk") {
        document.getElementById("kvkk_popup").style.display = "block";
    }

    if (gumussuyukvkktercih != "") {


        document.getElementById("kvkktercih").checked = true;


    }
    else { document.getElementById("kvkktercih").checked = false; }

    if (gumussuyukvkkistatistik != "") {
        document.getElementById("kvkkistatistik").checked = true;
    }
    else { document.getElementById("kvkkistatistik").checked = false; }

    if (gumussuyukvkkpazarlama != "") {
        document.getElementById("kvkkpazarlama").checked = true;
    }
    else { document.getElementById("kvkkpazarlama").checked = false; }


}

function checkedCookie() {
    document.getElementById("kvkk_popup").style.display = "block";
    document.getElementById("kvkk_overlay").style.display = "block";

}

function kabulHepsi() {
    document.getElementById("kvkk_overlay").style.display = "none";
    document.getElementById("kvkk_popup").style.display = "none"; // Kutuyu gizler

    cname = "kvkk";
    cvalue = "kvkk";
    //document.cookie = cname +"="+ cvalue;
    setCookie(cname, cvalue, 30);
    console.log(document.cookie, "kabul");
    cnamegumussuyukvkktercih = "kvkktercih";
    cnamegumussuyukvkkistatistik = "kvkkistatistik";
    cnamegumussuyukvkkpazarlama = "kvkkpazarlama";

    var x = document.getElementById("kvkktercih").checked;
    var y = document.getElementById("kvkkistatistik").checked;
    var z = document.getElementById("kvkkpazarlama").checked;

    setCookie(cnamegumussuyukvkktercih, cvalue, 30);
    setCookie(cnamegumussuyukvkkistatistik, cvalue, 30);
    setCookie(cnamegumussuyukvkkpazarlama, cvalue, 30);

    checkCookie();

    //alert("Tüm Çerezler Kabul Edildi!");
}

function kabulTercihler() {
    document.getElementById("kvkk_overlay").style.display = "none";
    document.getElementById("kvkk_popup").style.display = "none"; // Kutuyu gizler

    cname = "kvkk";
    cvalue = "kvkk";
    //document.cookie = cname +"="+ cvalue;
    setCookie(cname, cvalue, 30);

    cnamekvkktercih = "kvkktercih";
    cnamekvkkistatistik = "kvkkistatistik";
    cnamekvkkpazarlama = "kvkkpazarlama";

    var x = document.getElementById("kvkktercih").checked;
    var y = document.getElementById("kvkkistatistik").checked;
    var z = document.getElementById("kvkkpazarlama").checked;

    if (x == true) { setCookie(cnamekvkktercih, cvalue, 30); }
    else { setCookie(cnamekvkktercih, "", 30); }
    if (y == true) { setCookie(cnamekvkkistatistik, cvalue, 30); }
    else { setCookie(cnamekvkkistatistik, "", 30); }
    if (z == true) { setCookie(cnamekvkkpazarlama, cvalue, 30); }
    else { setCookie(cnamekvkkpazarlama, "", 30); }

}

function gosterTercihler() {
    document.getElementById("kvkk_tercihler").style.display = "block"; // Tercihleri Yönet ekranını Açar
    document.getElementById("goster_tercihler").style.display = "none"; // Tercihleri Yönet butonunu gizler
    document.getElementById("kabul_tercihler").style.display = "block"; // Tercih Kabul Butonunu Açar 
}

window.onload = checkCookie()

const cookieBTN = document.getElementById('cookie')
const allAcceptBTN = document.getElementById('all-accept');
const tercihlerBTN = document.getElementById('kabul_tercihler');
const tercihleriGosterBTN = document.getElementById('goster_tercihler');

cookieBTN.addEventListener('click', function (e) {
    checkedCookie();
})

allAcceptBTN.addEventListener('click', function (e) {
    kabulHepsi();
})

tercihlerBTN.addEventListener('click', function (e) {
    kabulTercihler()
})

tercihleriGosterBTN.addEventListener('click', function (e) {
    gosterTercihler()
})

