$(function() {

  populateCountries();
  validateForm();
  loadFormEvents();

  $("#successMsg").hide(); // Hide success message to show on registration success.
});



function populateCountries() {

  $.getJSON( "js/countriesCodes.json", function( data ) {

    var $select = $('#country');
    $(data).each(function (index, o) {
      var $option = $("<option/>").attr("value", o.dial_code).text(o.name);
      $select.append($option);

    });

  });

  //var jsonData = $.parseJSON(rawData);


}

function validateForm() {

  $("#accountsForm").validate({
    submitHandler: function() {
      submitForm();
    },
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

}


function loadFormEvents() {


  // Update phone prefix on country select.

  $("#country").change(function() {

    $("#phonePrefix").val($("#country").val());

  })

}

function clearForm(){

  $("input").each(function(index,inputElement) {

    $(inputElement).val('');

  })

}

function submitForm() {

  var phonePrefix = $("#phonePrefix").val();
  var phoneSuffix = $("#phoneSuffix").val();
  var phone = phonePrefix + phoneSuffix;
  var country = $("#country :selected").text();
  var formData = $("#accountsForm").serializeArray();

  formData.push({"name": "phone", "value": phone});

  //console.log(formData);

  $.each(formData, function(index, formInput) {

    if (formInput.name == "country") {
      formInput.value = country;
    }
    else if (formInput.name == "termsApproved") {
      formInput.value = 1;
    }

  })

  formData = $.param(formData);
  //formData.phone = formData.prefixPhone + formData.suffixPhone;
  //formData.termsApproved = formData.termsApproved == 'on' ? true : false;

  $.post('/Account/add', formData).done(function() {
    $("#successMsg").show();
  });

}
