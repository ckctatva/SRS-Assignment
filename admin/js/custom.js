let queid = [];
let queclass = [];
let queclasscurrneticn = [];
let queclasswhiteicn = [];

function myFunction(spanid, imgid, color, current_icon, iconid) {

    q = document.getElementsByClassName("dblock");
    if (q.length > 0) {
        q[0].classList.toggle("dnone");
        q[0].classList.toggle("dblock");
    }

    x = document.getElementById(imgid);
    x.classList.remove("dnone");
    x.classList.add("dblock");

    p = document.getElementById(iconid);
    
    queid.push(spanid)
    queclass.push(color)

    if (queid.length > 1) {
        let colid = queid.shift();
        let colclass = queclass.shift();

        y = document.getElementById(colid);
        y.classList.remove(colclass);
    }

    z = document.getElementById(spanid);
    z.classList.add(color);

    queclasscurrneticn.push(current_icon)
    queclasswhiteicn.push(iconid)

    if (queclasscurrneticn.length > 1) {
        back_icon = queclasscurrneticn.shift();
        back_icon_white = queclasswhiteicn.shift();

        bci = document.getElementById(back_icon);
        bcwi = document.getElementById(back_icon_white);

        bci.classList.remove("dnone");
        bcwi.classList.add("dnone");
    }
    current_icn = document.getElementById(current_icon);
    current_white_icn = document.getElementById(iconid);
    current_white_icn.classList.remove("dnone");
    current_icn.classList.add("dnone");
}

