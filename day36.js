var person = {
    firstName: "mohammed",
    middleName: "zaid",
    lastName: "aljulayfi",
    age: "22",
    fullName: function(){
    return this.firstName+" "+this.middleName+" "+this.lastName;
}
};

console.log(person.firstName+" bin "+person.middleName)
delete person.firstName;
console.log(person.firstName)