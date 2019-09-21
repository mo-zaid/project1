var mozaid = {
    firstName: "mohammed",
    middleName: "zaid",
    lastName: "aljulayfi",
    age: "22",
    fullName: function(){
    return this.firstName+" "+this.middleName+" "+this.lastName;
}
};
console.log(mozaid.fullName())
/*
var person = {
    firstName: "Mohammed",
    lastName: "Alali",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
*/