var should = require('chai').should();// require chai and initialize 'shoud()'


//Describe the purpose of your unit tests suit

describe('Showcase of mocha and chai', function() {


  it('should show an example of synchronous unit test', function() {

     //simple test

     var sum = 1 + 1;
     //after initializing chai.should() every variable in
     //this scope has the special property 'should'
     sum.should.be.equal(2);
  });

  //For an asynchronous test we can add the especial parameter 'done' (you can use any name)
  // which is a callback that informs mocha when the test has finished
  it('should show an example of an asynchronous unit test', function(done) {

    //some async call
    setTimeout(function() {

      //simple test

      var sum = 1 + 1;
      sum.should.be.equal(2);
      done(); //inform mocha that this test is done
    }, 1000);

  });

});
