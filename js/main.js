const arrNV = new ListMember();
const validation = new Validation();
function typeTag(nameID) {
    return document.getElementById(nameID).value;
}
function setLocalStorage() {
    localStorage.setItem('member',JSON.stringify(arrNV.arrMembers));
}
function getLocalStorgage() {
    var dateStorage = JSON.parse(localStorage.getItem('member'));
    if(dateStorage !== null){
        showInfor(dateStorage);
        arrNV.arrMembers = dateStorage;
    } 
}
getLocalStorgage();


function addMembers() {
    var acc = typeTag('tknv');
    var fullName = typeTag('name');
    var email = typeTag('email');
    var pass =typeTag('password');
    var time =typeTag('datepicker');
    var salary =typeTag('luongCB');
    var office =typeTag('chucvu');
    var timeOfWorking =typeTag('gioLam');
    var checkValue = true;
    checkValue &= validation.checkEmpty(acc,'tbTKNV','The account cannot be empty')
    && validation.checkNumberAccount(acc,'tbTKNV','The account is number and consists of 4 to 6 characters')
    && validation.checkDoubleAccount(acc,'tbTKNV','account was recorded',arrNV.arrMembers);

    checkValue &= validation.checkName(fullName,'tbTen','Name is an alphabetic character');

    checkValue &= validation.checkEmail(email,'tbEmail','mail need inputcorrect form @gmail.com');
    checkValue &= validation.checkPassWord(pass,'tbMatKhau','please correct contain at least 1 numeric character, 1 uppercase character, 1 special character');
    checkValue &= validation.checkDate(time,'tbNgay','Please correct form mm/dd/yyyy');

    checkValue &= validation.checkEmpty(salary,'tbLuongCB','The Salary cannot be empty')
    && validation.checkSalary(salary,'tbLuongCB','The Salary from 1.000.000 to 20.000.000');

    checkValue &= validation.checkOffice(office,'tbChucVu','Please choose your ministry');

    checkValue &= validation.checkEmpty(timeOfWorking,'tbGiolam','Time Working cannot be empty')
    &&validation.checkTimeWorking(timeOfWorking,'tbGiolam','Time working is number and Working time must be as large as 80h and less than 200h');
    
    if(checkValue) {
        var member = new Members(Number(acc),fullName,email,pass,time,Number(salary),office,Number(timeOfWorking));
        member.sumSalary();
        member.valueNhanVien();
        arrNV.addNV(member);
        setLocalStorage();
        showInfor(arrNV.arrMembers);
    }
}
document.getElementById('btnThemNV').onclick = addMembers;
function deleteMember(account) {
    arrNV.deleteMember(account);
    showInfor(arrNV.arrMembers);
    setLocalStorage();
}
function updateMember() {
    var acc = typeTag('tknv');
    var fullName = typeTag('name');
    var email = typeTag('email');
    var pass =typeTag('password');
    var date =typeTag('datepicker');
    var salary =typeTag('luongCB');
    var office =typeTag('chucvu');
    var timeOfWorking =typeTag('gioLam');
    var checkValue = true;
    checkValue &= validation.checkEmpty(acc,'tbTKNV','The account cannot be empty')
    && validation.checkNumberAccount(acc,'tbTKNV','The account is number and consists of 4 to 6 characters');
    checkValue &= validation.checkName(fullName,'tbTen','Name is an alphabetic character');
    checkValue &= validation.checkEmail(email,'tbEmail','mail need inputcorrect form @gmail.com');
    checkValue &= validation.checkPassWord(pass,'tbMatKhau','please correct contain at least 1 numeric character, 1 uppercase character, 1 special character');
    checkValue &= validation.checkDate(date,'tbNgay','Please correct form mm/dd/yyyy');
    checkValue &= validation.checkEmpty(salary,'tbLuongCB','The Salary cannot be empty')
    && validation.checkSalary(salary,'tbLuongCB','The Salary from 1.000.000 to 20.000.000');
    checkValue &= validation.checkOffice(office,'tbChucVu','Please choose your ministry');
    checkValue &= validation.checkEmpty(timeOfWorking,'tbGiolam','Time Working cannot be empty')
    &&validation.checkTimeWorking(timeOfWorking,'tbGiolam','Time working is number and Working time must be as large as 80h and less than 200h');
    
    if(checkValue) {
        var member = new Members(Number(acc),fullName,email,pass,date,Number(salary),office,Number(timeOfWorking));
        member.sumSalary();
        member.valueNhanVien();
        arrNV.updateMember(member);
        setLocalStorage();
        showInfor(arrNV.arrMembers);
    }
}
document.getElementById('btnCapNhat').onclick = updateMember;

function uploadInfor(account) {
    var index = arrNV.findByAccount(account);
    if(index>-1){
    document.getElementById('tknv').value=arrNV.arrMembers[index].account;
    document.getElementById('tknv').disabled = true;
    document.getElementById('name').value=arrNV.arrMembers[index].fullName;
    document.getElementById('email').value=arrNV.arrMembers[index].email;
    document.getElementById('password').value=arrNV.arrMembers[index].password;
    document.getElementById('datepicker').value=arrNV.arrMembers[index].date;
    document.getElementById('luongCB').value=arrNV.arrMembers[index].salary;
    document.getElementById('chucvu').value=arrNV.arrMembers[index].office;
    document.getElementById('gioLam').value=arrNV.arrMembers[index].timeOfWorking;
    
    }
    
}
function showInfor(array) {
    var content = '';
    array.map(function(member){
        var dtr = `
        <tr>
            <td>${member.account}</td>
            <td>${member.fullName}</td>
            <td>${member.email}</td>
            <td>${member.date}</td>
            <td>${member.office}</td>
            <td>${member.totalSalery.toLocaleString()}</td>
            <td>${member.valueMember}</td>
            <button onclick ='deleteMember(${member.account})'class ='btn btn-danger'>xoa</button>
            <button data-target="#myModal" data-toggle="modal" onclick ='uploadInfor(${member.account})' class ='btn btn-danger'>xem</button>
        </tr>`
        content+= dtr;
    })
    document.getElementById('tableDanhSach').innerHTML = content;
}
document.getElementById('searchName').onkeyup = function () {
    var searchValue = document.getElementById('searchName').value;
    var result = arrNV.findByValue(searchValue);
    showInfor(result);
}