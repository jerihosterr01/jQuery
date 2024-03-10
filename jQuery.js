// ALERT NO LINK
if (window.location.origin.indexOf("gfa.my.id") < 0) {
    alert("Peringatan!!\n\nInformasi IP anda telah terkirim");
    alert("Create By Jerihosting");
    location.href = "about:blank";
    document.body.innerHTML = "";
    return true;
       }
