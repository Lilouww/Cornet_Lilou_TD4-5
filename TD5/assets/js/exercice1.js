$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    var data = { username: username, password: password };
    $.ajax({
      type: "POST",
      url: "form.php",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        $("form").hide();
        $("#message").removeClass().addClass("success").html(response.message);
      },
      error: function (response) {
        $("#message")
          .removeClass()
          .addClass("error")
          .html(response.responseJSON.message);
      },
    });
  });
  $("#username, #password").on("input", function () {
    var value = $(this).val();
    if (value.length > 0) {
      $(this).removeClass("border-red");
    } else {
      $(this).addClass("border-red");
    }
    if (value.length > 255) {
      $(this).addClass("border-red");
    }
  });
});
