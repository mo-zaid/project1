function user(id,first_name,sec_name)
{
    this.id=id;
    this.first_name=first_name;
    this.sec_name=sec_name;
}

var mo=new user(436,"mohammed","zaid");

console.log(mo.first_name);