describe('Contact', function() {
  describe('fullName', function() {
    it('should put a first and last name together', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Pardon";
      testContact.fullName().should.equal('Dolly Pardon');
    });
  }); 
  // describe('validateName', function() {
  //   it('should check to see if the name field is empty', function() {
  //     var testValidateName = Object.create(Contact);
  //     testValidateName.firstName = "";
  //     testValidateName.validateName().should.equal(false);
  //   }); 
  // });
});

describe('Address', function() {
  describe('fullAddress', function() {
    it('should return the address of the given contact', function() {
      var testAddress = Object.create(Address);
      testAddress.street = "4444 SW 5th";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("4444 SW 5th, Portland, Oregon");
    });

    describe('validateAddress', function() {
      it('should validate the address input', function() {
        var testAddress = Object.create(Address);
        testAddress.street = "";
        testAddress.city = "Portland";
        testAddress.state = "Oregon";
        testAddress.validateAddress().should.equal(false);      
      });
    });
  });
});

describe('Phone', function() {
  describe('showNumber', function() {
    it('should return the phone number of the given contact', function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "562";
      testPhone.showNumber().should.equal("562");
    });
  });
  describe('validateNumber', function() {
    it('should check to see if the phone number field is empty', function() {
      var testValidateNumber = Object.create(Phone);
      testValidateNumber.number = "";
      testValidateNumber.validateNumber().should.equal(false);
    });

    it('should check to see that numbers are entered for the phone number', function() {
      var testValidateNumber = Object.create(Phone);
      testValidateNumber.number = "asdfsadf";
      testValidateNumber.validateNumber().should.equal(false);
    });
  });
});



// describe('function name', function() {
//   it('what you want the function to do', function() {
//     caps("input").should.equal("output");
//   });
// });
