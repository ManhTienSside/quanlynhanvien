function Validation() {
    this.checkEmpty = function (value,span,message) {
        if(value === "") {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display  ='block' ;
            return false;
        } else {
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }
    }
    this.checkNumberAccount = function (value,span,message) {
        var number =/^[0-9]+$/;
        if(value.match(number) && value.length >= 4 && value.length <= 6){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display ='block';
            return false;
        }
    }
    this.checkName = function (value,span,message) {
        var pattern = 
        /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if(value.match(pattern)){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display  ='block';
            return false;
        }
    }
    this.checkEmail = function (value,span,message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display  ='block';
        }
    }
    this.checkPassWord = function (value,span,message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
        if(value.match(pattern)){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display  ='block';
        }
    }
    this.checkDate = function (value,span,message) {
        var dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
        if(value.match(dateformat)){
            let operator = value.split('/');
            let datepart = [];
            if (operator.length > 1) {
                datepart = value.split('/');
            }
            let month = parseInt(datepart[0]);
            let day = parseInt(datepart[1]);
            let year = parseInt(datepart[2]);
            let monthLen = [31,28,31,30,31,30,31,31,30,31,30,31];
            //check year
            if(year <1000 || year >3000 || month == 0 || month >12){
                document.getElementById(span).innerHTML = message;
                document.getElementById(span).style.display  ='block'; 
                return false;
            }
            // 1month == 30 or 31; feb = 28
            if(month ==1 || month >2){
                if(day>monthLen[month-1]){
                    document.getElementById(span).innerHTML = message;
                    document.getElementById(span).style.display  ='block'; 
                    return false;
                }
                document.getElementById(span).innerHTML = '';
                document.getElementById(span).style.display  ='none' ;
                return true;
            } else if (month == 2) {
                let leapYear = false;
                if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
                if ((leapYear == false) && (day >= 29)) {
                    document.getElementById(span).innerHTML = message;
                    document.getElementById(span).style.display  ='block';
                    return false;
                }else{
                    if ((leapYear == true) && (day > 29)) {
                        document.getElementById(span).innerHTML = message;
                        document.getElementById(span).style.display  ='block';
                        return false;
                    }
                }
                
            }else {
                document.getElementById(span).innerHTML = message;
                document.getElementById(span).style.display  ='block';
                return false;
            }
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none' ;
            return true;
        }
    }
    this.checkSalary = function (value,span,message){
        var number =/^[0-9]+$/;
        if(value.match(number) && value >= 1000000 && value <= 20000000){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none';
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display ='block';
        }
        
    }  
    this.checkOffice = function (value,span,message){
        switch (value) {
            case "Sếp":
                document.getElementById(span).innerHTML = '';
                document.getElementById(span).style.display  ='none';
                return true;
            case 'Trưởng phòng':
                document.getElementById(span).innerHTML = '';
                document.getElementById(span).style.display  ='none';
                return true;
            case 'Nhân viên':
                document.getElementById(span).innerHTML = '';
                document.getElementById(span).style.display  ='none';
                return true;
            default:
                document.getElementById(span).innerHTML = message;
                document.getElementById(span).style.display ='block';
                return false;
                
        }
        
    } 
    this.checkTimeWorking = function (value,span,message){
        var number =/^[0-9]+$/;
        if(value.match(number) && value >= 80 && value <= 200){
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none';
            return true;
        }else {
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display ='block';
            return false;
        }
    }
    this.checkDoubleAccount = function (value,span,message,array){
        var isValue = array.some(function (member) {
            if(member.account === Number(value)){
                return true;
            }
            return false;
        })
        if(isValue){
            document.getElementById(span).innerHTML = message;
            document.getElementById(span).style.display ='block';
            return false;
        }
            document.getElementById(span).innerHTML = '';
            document.getElementById(span).style.display  ='none';
            return true;
    }
}
