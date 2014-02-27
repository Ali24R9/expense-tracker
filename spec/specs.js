describe('Category', function() {
  describe("create", function() {
    it("creates a new instanceCategory of a Category", function() {
      var testCategory = Category.create();
      Category.isPrototypeOf(testCategory).should.equal(true);
    });

    it("initializes the category", function() {
      var testCategory = Category.create("food");
      testCategory.purchase.should.eql([]);
    });
  });
   describe("createPurchase", function() {
    it("creates an purchase object", function() {
      var testCategory = Category.create();
      var testPurchase = testCategory.createPurchase();
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });

    it("adds the purchase to the purchase property of the contact", function() {
      var testCategory = Category.create("food");
      var testPurchase = testCategory.createPurchase("burger","10");
      testCategory.purchase.should.eql([testPurchase]);
    });
  });



  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testCategory = Object.create(Category);
      testCategory.initialize("food");
      testCategory.category.should.equal("food");
    });

    it("sets up an empty array for the purchase property", function() {
       var testCategory = Object.create(Category);
       testCategory.initialize("food");
       testCategory.purchase.should.eql([]);
    });
  });
});


describe('Purchase', function() {
   describe("create", function() {
    it("creates an instance of the purchase object", function() {
      var testPurchase = Purchase.create();
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
     it("initializes the purchase", function() {
      var testPurchase = Purchase.create("Burger", "10");
      testPurchase.initialize("Burger","10");
      testPurchase.description.should.equal("Burger");
      testPurchase.amount.should.equal("10");
    });
  });
   describe("initialize", function() {
    it("sets the description and amount", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Burger", "10");
      testPurchase.description.should.equal("Burger");
      testPurchase.amount.should.equal("10"); 
    });
  });
});

