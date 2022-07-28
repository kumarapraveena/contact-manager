const contactSchemaCustom=[
    "name",
    "designation",
    "company",
    "industry",
    "email",
    "phoneNo",
    "country"
]

// let obj ={
//     name: "saurabh",
//     designation: "student",
//     company: "10x academy",
//     industry: "logistic",
//     email: "saurabh@testcom",
//     phoneNo: "1234567890",
//     country:"India"
// };
const ContactsValidator=(contact)=>{
    let isValid = true;
    if(contact){
        for(let i=0;i<contactSchemaCustom.length;i++){
            if(!contact[contactSchemaCustom[i]]){
                isValid = false;
                return isValid;
                // break;
            }
        }
        if(contact.phoneNo.length!==10){
            isValid = false;
        }
        if(!contact.email.includes("@") || !contact.email.split("@")[1].includes(".")){
            isValid = false;
        }
    }
    return isValid
};
// console.log(ContactsValidator(obj));
module.exports = {ContactsValidator};