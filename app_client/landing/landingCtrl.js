(function () {
angular.module('reviewModule')
  .controller('landingCtrl', landingCtrl);

  landingCtrl.$inject = ['$log'];
  function landingCtrl ($log) {
    var vm = this;

    //fake data, YAY
    vm.vendor = {
      products: [{
        name: "DATA DATA DATA",
        rating: 2,
        category: "Data management",
        profile: 
        {
          reviewText: "I just want to say I LOVE this software! I mean, what is software other than a bunch of data that is really well organized? Well, this software will put the AT in DATA, and it helps you blah as you blah. Not only this, but it manages all of your big data needs, such as efficient querying and the splitting and replica maintenence required to have minimal downtime. In conclusion, if you like data, or don't and need to use data, this is the software for YOUUUU!!!!!"
        }
      }, {
        name: "Node Chomsky",
        rating: 3,
        category: "Server Side Framework",
        profile: {
          reviewText: "Well, classically my hipster friends would recommend Node.js, and though I can't argue with certainty that Node Chomsky is better than Node for server side operations. One thing is certain, if you ever find yourself musing with Node.js, or you want to program less mathematically, and more metaphorically, Node Chomsky may be for you."
        }
      }, {
        name: "Adobe Reader",
        rating: 1,
        category: "PDF read/write",
        profile: {
          reviewText: "Seriously, why do people still use this nonsense? I'm so sick and tired of having all my IT issues fixed by reinstalling adobe reader. Please just make it less of a catch-all, its annoying that someone with much less IT knowledge can do the same thing as me just becasue they learned the 'update adobe reader' trick. Its getting serious."
        }
      }, {
        name: "datavis",
        rating: 5,
        category: "Data visualization",
        profile: {
          reviewText: "WOW! This is fantastic software for data visualization! It knocks origin right out of the water, and who ever even bothered mentioning matlab, AMIRITE? In combination with the fantastic analysis suite, 'DATA DATA DATA', this will help you look for trends and patterns in any data set, no matter the size of the complexity of analysis. It can integrate entire data-sets for you! [test wrap] MATH IS COOL YALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL!"
        }
      }]
    };

    vm.makeArray = function (num) {
      vm.stars = new Array(num);
      return vm.stars;
    };
  }
})()
