
var Category = {
  initialize: function(category) {
    this.category = category;
    this.purchase = [];

  },
  create: function(category) {
    var category = Object.create(Category);
    category.initialize(category);
    return category;
  },
  createPurchase: function(description, amount) {
    var purchases = Object.create(Purchase.create(description, amount));
    this.purchase.push(purchases);
    return purchases;
  }
};

var Purchase = {
  initialize: function(description, amount) {
    this.description = description;
    this.amount = amount;  
  },
  create: function(description, amount) {
    var purchase = Object.create(Purchase);
    purchase.initialize(description, amount);
    return purchase;
  },
};

$(document).ready(function() {
  // var currentCategory = "";
  // $('form#category').submit(function(event) {
  //   event.preventDefault();
  //   var inputtedCategory = $('#category').val();
  //   var newCategory = Category.create(inputtedCategory)
  // });

  $('form#purchases').submit(function(event) {
    event.preventDefault();

    var inputtedDescription = $('#description').val();
    var inputtedAmount = $('#amount').val();
    //var newPurchase = newCategory.createPurchase(inputtedDescription, inputtedAmount);
    var newPurchase = Purchase.create(inputtedDescription, inputtedAmount);
    $("#descriptionAmount").prepend("<tr><td>" + newPurchase.description + "</td><td>" + newPurchase.amount + "</td></tr>");
    this.reset();
  });
  $('form#categoryList').submit(function(event) {
    event.preventDefault();

    this.reset();
  });
});
