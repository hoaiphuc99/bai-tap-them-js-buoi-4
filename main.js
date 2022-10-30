document.getElementById("btn_yesterday").onclick = function () {
    var ngay = document.getElementById("day").value * 1;
    var thang = document.getElementById("month").value * 1;
    var nam = document.getElementById("year").value * 1;
    var result = "";
    if ((nam % 4 == 0) && (nam % 100 !== 0) || nam % 400 == 0) {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay > 1) && (ngay <= 31)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                if (thang == 1) {
                    ngay = 31;
                    thang = 12;
                    nam = nam - 1;

                }
                else if (thang == 8) {
                    ngay = 31;
                    thang = 7;
                }
                else if (thang == 3) {
                    ngay = 29;
                    thang = 2;
                }
                else {
                    ngay = 30;
                    thang = thang - 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang = 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay > 1) && (ngay <= 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = thang - 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay <= 29)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = 1;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }

    else {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay > 1) && (ngay < 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                if (thang == 1) {
                    ngay = 31;
                    thang = 12;
                    nam = nam - 1;

                }
                else if (thang == 8) {
                    ngay = 31;
                    thang = 7;
                }
                else if (thang == 3) {
                    ngay = 28;
                    thang = 2;
                }
                else {
                    ngay = 30;
                    thang = thang - 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang = 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay > 1) && (ngay < 30)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = thang - 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 29)) {
                ngay = ngay - 1;
            }
            else if (ngay == 1) {
                ngay = 31;
                thang = 1;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("ngayxuat").innerHTML = result;
}
document.getElementById("btn_tomorow").onclick = function () {
    var ngay = document.getElementById("day").value * 1;
    var thang = document.getElementById("month").value * 1;
    var nam = document.getElementById("year").value * 1;
    var result = "";
    if ((nam % 4 == 0) && (nam % 100 !== 0) || nam % 400 == 0) {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay >= 1) && (ngay < 31)) {
                ngay = ngay + 1;
            }
            else if (ngay == 31) {
                if (thang == 12) {
                    ngay = 1;
                    thang = 1;
                    nam = nam + 1;

                }
                else {
                    ngay = 1;
                    thang = thang + 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay >= 1) && (ngay < 30)) {
                ngay = ngay + 1;
            }
            else if (ngay == 30) {
                ngay = 1;
                thang = thang + 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 29)) {
                ngay = ngay + 1;
            }
            else if (ngay == 29) {
                ngay = 1;
                thang = 3;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    else {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
            if ((ngay >= 1) && (ngay < 31)) {
                ngay = ngay + 1;
            }
            else if (ngay == 31) {
                if (thang == 12) {
                    ngay = 1;
                    thang = 1;
                    nam = nam + 1;

                }
                else {
                    ngay = 1;
                    thang = thang + 1;
                }
            }
            else {
                result = "sai ngày";
            }
        }
        else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            if ((ngay >= 1) && (ngay < 30)) {
                ngay = ngay + 1;
            }
            else if (ngay == 30) {
                ngay = 1;
                thang = thang + 1;
            }
            else {
                result = "sai ngày";
            }
        }
        else {
            if ((ngay > 1) && (ngay < 28)) {
                ngay = ngay + 1;
            }
            else if (ngay == 28) {
                ngay = 1;
                thang = 3;
            }
            else {
                result = "sai ngày";
            }
        }
        result = ngay + "/" + thang + "/" + nam;
    }
    document.getElementById("ngayxuat").innerHTML = result;
}
// --------------------------------------------------------------------
// bai 2
document.getElementById("btn_caculator").onclick = function () {
    var thangnhap = document.getElementById("thang2").value * 1;
    var namnhap = document.getElementById("nam2").value * 1;
    var resul = "";
    if ((thangnhap % 4 == 0) && (namnhap % 100 !== 0)) {
        if (thangnhap == 1 || thangnhap == 3 || thangnhap == 5 || thangnhap == 7 || thangnhap == 8 || thangnhap == 10 || thangnhap == 12) {
            resul = 31;
        }
        else if (thangnhap == 4 || thangnhap == 6 || thangnhap == 9 || thangnhap == 11) {
            resul = 30;
        }
        else {
            resul = 29;
        }
    }
    else {
        if (thangnhap == 1 || thangnhap == 3 || thangnhap == 5 || thangnhap == 7 || thangnhap == 8 || thangnhap == 10 || thangnhap == 12) {
            resul = 31;
        }
        else if (thangnhap == 4 || thangnhap == 6 || thangnhap == 9 || thangnhap == 11) {
            resul = 30;
        }
        else {
            resul = 28;
        }
    }
    document.getElementById("songay").innerHTML = "tháng " + thangnhap + " có: " + resul + " ngày";
}
// ------------------------------------------------------------
// bài 3
document.getElementById("btn_readnumber").onclick = function () {
    var sodoc = document.getElementById("so3").value * 1;
    var sotram = "";
    var sochuc = "";
    var sodonvi = "";
    var soso = "";
    var hangtram = Math.floor(sodoc / 100);
    var hangchuc = Math.floor(sodoc / 10) % 10;
    var hangdonvi = Math.floor(sodoc % 100) % 10;
    console.log(hangchuc);
    switch (hangtram) {
        case 0:
            sotram = "";
            break;
        case 1:
            sotram = "một";
            break;
        case 2:
            sotram = "hai";
            break;
        case 3:
            sotram = "ba";
            break;
        case 4:
            sotram = "bốn";
            break;
        case 5:
            sotram = "năm";
            break;
        case 6:
            sotram = "sáu";
            break;
        case 7:
            sotram = "bảy";
            break;
        case 8:
            sotram = "tám";
            break;
        case 9:
            sotram = "chín";
            break;
    }
    switch (hangchuc) {
        case 0:
            sochuc = "";
            break;
        case 1:
            sochuc = "một";
            break;
        case 2:
            sochuc = "hai";
            break;
        case 3:
            sochuc = "ba";
            break;
        case 4:
            sochuc = "bốn";
            break;
        case 5:
            sochuc = "năm";
            break;
        case 6:
            sochuc = "sáu";
            break;
        case 7:
            sochuc = "bảy";
            break;
        case 8:
            sochuc = "tám";
            break;
        case 9:
            sochuc = "chín";
            break;
    }
    switch (hangdonvi) {
        case 0:
            sodonvi = "";
            break;
        case 1:
            sodonvi = "một";
            break;
        case 2:
            sodonvi = "hai";
            break;
        case 3:
            sodonvi = "ba";
            break;
        case 4:
            sodonvi = "bốn";
            break;
        case 5:
            sodonvi = "năm";
            break;
        case 6:
            sodonvi = "sáu";
            break;
        case 7:
            sodonvi = "bảy";
            break;
        case 8:
            sodonvi = "tám";
            break;
        case 9:
            sodonvi = "chín";
            break;
    }
    if (hangtram == 0) {
        soso = "nhập sai số ( số có ba chữ số)";
    }
    else {
        if (hangchuc == 0) {
            soso = sotram + " trăm lẻ " + sodonvi;
        }
        else if (hangchuc == 1) {
            soso = sotram + " trăm " + " mười " + sodonvi;
        }
        else {
            soso = sotram + " trăm " + sochuc + " mươi " + sodonvi;
        }
    }

    document.getElementById("docso").innerHTML = soso;

}