function Members(account,fullName,email,password,date,salary,office,timeOfWorking) {
    this.account = account;
    this.fullName =fullName;
    this.email =email;
    this.password = password;
    this.date =date;
    this.timeOfWorking =timeOfWorking;
    this.salary = salary;
    this.office = office;
    this.totalSalary = 0;
    this.valueMember= "";
    this.sumSalary = function() {
        switch (this.office) {
            case 'Sếp':
                this.totalSalery = this.salary *3;
                break;
            case 'Trưởng phòng':
                this.totalSalery = this.salary *2;
                break;
            case 'Nhân viên':
                this.totalSalery = this.salary;
                break;
        }
    }
    this.valueNhanVien = function () {
        if(this.timeOfWorking >=192){
            return this.valueMember = 'xuất sắc';
        }else if(this.timeOfWorking>=176 && this.timeOfWorking<192){
            return this.valueMember ='giỏi';
        }else if (this.timeOfWorking>=160 && this.timeOfWorking<176) {
            return this.valueMember ='khá';
        }else {
            return this.valueMember ='trung bình';
        }
    }
}
