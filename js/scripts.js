var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {

  validateAddress: function() {
    if((this.street !== "") && (this.city !== "") && (this.state !== "")) {
      return "valid";
    }
    else {
      alert("Not a valid address."); 

      return false;
    }

  },

  fullAddress: function() {
    return this.street + ', ' + this.city + ', ' + this.state;
  }

};

var Phone = {

  validateNumber: function() {
    if((this.number !== "") && (!(isNaN(this.number)))) {
      return "valid";
    } else {
      alert("Please enter a phone number.");
      return "not valid";
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

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirst;
    newContact.lastName = inputtedLast;

    newContact.addresses = [];
    newContact.phoneNumbers = [];
    $('.new-address').each(function() {
      var inputtedStreet = $(this).find('.new-street').val();
      var inputtedCity = $(this).find('.new-city').val();
      var inputtedState = $(this).find('.new-state').val();
      var inputtedPhone = $(this).find('.new-phone').val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      var newPhoneNumber = Object.create(Phone);
      newPhoneNumber.number = inputtedPhone;

      newContact.addresses.push(newAddress);
      newContact.phoneNumbers.push(newPhoneNumber);
    });


      $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').show();

      $('h2#contactInfo').text(newContact.fullName());
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('ul#addresses').text("");
    newContact.phoneNumbers.forEach(function(phoneNumber) {
      $('.phone-number').text(phoneNumber.showNumber());
    });
    newContact.addresses.forEach(function(address) {
      $('ul#addresses').append("<li>" + address.fullAddress() + "</li>");
      });
    });
    
    this.reset();
  });
});
