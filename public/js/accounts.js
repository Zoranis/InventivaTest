$(function() {

  $("#accountsForm").validate({
    rules: {
      userName: {
        required: true,
        minlength: 5,
        maxlength: 20,
        alphanumeric: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 8
      },
      email: {
        required: true,
        email: true
      },
      phonePrefix: {
        required: true,
        digits: true,
        require_from_group: [2, ".phone-group"]
      },
      phoneSuffix: {
        required: true,
        digits: true,
        require_from_group: [2, ".phone-group"]
      }
    },
    messages: {
      userName: {
        required: "Please enter a User name",
        minlength: "User name requires 5 or more characters.",
        maxlength: "User name requires 20 or less characters.",
        alphanumeric: "User name can only consist of letters and numbers."
      },
      password: {
        required: "Please enter a password",
        minlength: "Password requires 6 or more characters.",
        maxlength: "Password requires 8 or less characters.",
      },
      email: {
        required: "Please enter an email address",
        email: "Please enter a valid email address",
      },
      phonePrefix: {
        //required:  "Please enter a phone number",
        digits: "Phone number can only consist of numbers.",
        require_from_group: "Please enter both phone parts."
      },
      phoneSuffix: {
        //required: "Please enter a phone number",
        digits: "Phone number can only consist of numbers.",
        require_from_group: "Please enter both phone parts."
      }
    }




  });

});
