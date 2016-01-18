var registrantList = []

function Registrant(firstName, lastName, position, email, phoneNumber, isAdult) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.isAdult = 'true';
    
    // this.healthForm = healthForm;
    // this.dateRegistered = dateRegistered;
    // this.shirtSize = shirtSize;
    // this.isAdult = isAdult;

}

function Auth(packNumber, email) {
    this.packNumber = packNumber;
    this.email = email;
}

function addAdult() {

    var adult = document.querySelectorAll("input.registrant");
    var firstName;
    var lastName;
    var position;
    var email;
    var cellPhone;
    
    for (var i = 0; i < adult.length; i++) {
       
        if (adult[i].id === 'firstContactName') {
            firstName = adult[i].value;
        } else if (adult[i].id === 'lastContactName') {
            lastName = adult[i].value;
        } else if (adult[i].id === 'position') {
            position = adult[i].value;
        } else if (adult[i].id === 'email') {
            email = adult[i].value;
        } else if (adult[i].id === 'adultCellPhone') {
            cellPhone = adult[i].value;
        }              
    }
    var adult1 = new Registrant(firstName, lastName, position, email, cellPhone, isAdult)
    registrantList.push(adult1)
}

function addScout() {

}