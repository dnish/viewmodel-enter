Template.hello.viewmodel({

  message:null,

  messages() {
    return Test.find();
  },

  submit() {
    Test.insert({text:this.message()});
    this.message(null);
  }


});