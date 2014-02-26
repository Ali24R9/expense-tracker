var Contact = {
  all: [],
  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; 
    this.addresses = []; 
    this.number = [];  
  },
  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },
  createAddress: function(street, city, state){
    var address = Object.create(Address.create(street, city, state));

    this.addresses.push(address);
    return address;
  }, 

  createPhone: function(number){
    var number = Object.create(Phone.create(number));
    
    this.number.push(number);
    return number;
  }, 

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
};

var Address = {
  all: [],

  initialize: function(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  },

  create: function(street, city, state) {
    var address = Object.create(Address);
    address.initialize(street, city, state);
    Address.all.push(address);
    return address; 
  }, 

  validateAddress: function() {
    if((this.street !== "") && (this.city !== "") && (this.state !== "")) {
      return true;
    }
    else {
      return false;
    }

  },

  fullAddress: function() {
    return this.street + ', ' + this.city + ', ' + this.state;
  }

};

var Phone = {
  initialize: function(number) {
    this.number = number;
  },

  create: function(number) {
    var phone = Object.create(Phone);
    phone.initialize(number);
    return phone;
  },

  validateNumber: function() {
    if((this.number !== "") && (!(isNaN(this.number)))) {
      return true;
    } else {
      return false;
    }
  },

  showNumber: function() {
    return this.number;
  }
};

$(document).ready(function() {
  $('#add-address').click(function() {
    $('#new-addresses').append(
          '<div class="new-address">' + 
             '<div class="form-group">' + 
               '<label for="new-street">Street</label>' + 
               '<input type="text" class="form-control new-street">' + 
             '</div>' + 
             '<div class="form-group">' + 
               '<label for="new-city">City</label>' + 
               '<input type="text" class="form-control new-city">' + 
             '</div>' + 
             '<div class="form-group">' + 
               '<label for="new-state">State</label>' + 
               '<input type="text" class="form-control new-state">' + 
             '</div>' + 
             '<div class="form-group">' + 
               '<label for="new-phone">Phone Number</label>' + 
               '<input type="text" class="form-control new-phone">' + 
             '</div>' + 
           '</div>'); 
        });
  

  $('form#new-contact').submit(function(event){
    event.preventDefault();

    var inputtedFirst = $('#new-first-name').val();
    var inputtedLast = $('#new-last-name').val();

    var newContact = Contact.create(inputtedFirst ,inputtedLast);

    newContact.phoneNumbers = [];
    $('.new-address').each(function() {
      var inputtedStreet = $(this).find('.new-street').val();
      var inputtedCity = $(this).find('.new-city').val();
      var inputtedState = $(this).find('.new-state').val();
      var inputtedPhone = $(this).find('.new-phone').val();

      newContact.createAddress(inputtedStreet, inputtedCity, inputtedState);
      newContact.createPhone(inputtedPhone);                    
      // var newAddress = Object.create(Address);
      // newAddress.street = inputtedStreet;
      // newAddress.city = inputtedCity;
      // newAddress.state = inputtedState;

      //var newPhoneNumber = Object.create(Phone);
      //newPhoneNumber.number = inputtedPhone;

      // newContact.addresses.push(newAddress);
      // newContact.phoneNumbers.push(newPhoneNumber);
    });


    var allAddressesValid = newContact.addresses.every(function(address) {
      return address.validateAddress();
    });

    var allNumbersValid = newContact.number.every(function(num) {
      return num.validateNumber();
    });


    if (allAddressesValid && allNumbersValid) {
      $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

      $('.contact').last().click(function() {
      $('#show-contact').show();

      $('h2#contactInfo').text(newContact.fullName());
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('ul#numbers').text("");
      $('ul#addresses').text("");

      newContact.number.forEach(function(nums) {
        console.log(nums);
        $('ul#numbers').append("<li>" + nums.number + "</li>");
      });
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append("<li>" + address.fullAddress() + "</li>");
        });
      });
    } else {
      alert('fail!')
    }

    this.reset();
  });
});
