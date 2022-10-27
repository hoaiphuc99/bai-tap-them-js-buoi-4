document.getElementById("btn_yesterday").onclick = function () {
    var ngay = document.getElementById("day").value * 1;
    var thang = document.getElementById("month").value * 1;
    var nam = document.getElementById("year").value * 1;
    var result = "";
    if ((nam % 4 == 0) && (nam % 100 !== 0)) {
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
    if ((nam % 4 == 0) && (nam % 100 !== 0)) {
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