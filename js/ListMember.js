function ListMember() {
    this.arrMembers = [];
    this.addNV = function (member) {
        this.arrMembers.push(member);
    }
    this.findByAccount = function (account) {
        var findIndex = -1;
        this.arrMembers.map(function (members,index) {
            if(members.account === account){
                findIndex =index;
                
            }
        })
        return findIndex;
    }
    this.deleteMember = function (account) {
        var index = this.findByAccount(account)
        if(index>-1){
            this.arrMembers.splice(index,1);
        }
    }
    this.updateMember = function (member) {
        var indexOfMember = this.findByAccount(member.account);
        if(indexOfMember>-1){
            this.arrMembers[indexOfMember] = member;
        }
    }
    this.findByValue = function (find) {
            var resultValue = [];
            var valueFind = find.toLowerCase().replace(/\s/g,'');
            this.arrMembers.map(function (member) {
                var valueArr= member.valueMember.toLowerCase().replace(/\s/g,'');
                var result = valueArr.indexOf(valueFind);
                if(result >-1){
                    resultValue.push(member);
                }
            })
            return(resultValue);
    }
}

