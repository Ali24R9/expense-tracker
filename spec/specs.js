beforeEach(function() {
  Contact.all = [];
});

describe('Contact', function() {
  describe("create", function() {
    it("creates a new instance of a Contact", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });

    it("initializes the contact", function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });

    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
   describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });

  describe('fullName', function() {
    it('should put a first and last name together', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Pardon";
      testContact.fullName().should.equal('Dolly Pardon');
    });
  }); 

  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });

    it("sets up an empty array for the addresses property", function() {
       var testContact = Object.create(Contact);
       testContact.initialize("Mary", "Jane");
       testContact.addresses.should.eql([]);
    });
  });
});
////////////////////////////////////////
describe('Address', function() {
  describe("create", function() {
    it("creates an instance of the address object", function() {
      var testAddress = Address.create();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("initializes the address instance", function() {
      var testAddress = Address.create();
      testAddress.initialize("5th", "Portland", "Oregon");
      testAddress.state.should.equal("Oregon");
    });
  });

  describe("initialize", function() {
    it("initializes the address", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("5th", "Portland", "Oregon");
      testAddress.street.should.equal("5th");
      testAddress.city.should.equal("Portland"); 
      testAddress.state.should.equal("Oregon");   
    });
  });

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

/////////////////////////////////////////
describe('Phone', function() {
  describe('create', function() {
    it('should create an instance of Phone', function() {
      var testPhone = Phone.create();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });

    it('should initialize an instance of Phone', function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("1234567890");
      testPhone.number.should.equal("1234567890");
    });
  });
  describe("initialize", function() {
    it("initializes the phone", function() {
      var testPhone = Object.create(Phone);
      testPhone.initialize("1234567890");
      testPhone.number.should.equal("1234567890");   
    });
  });
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
