var $form = $('form#submit-to-google-sheet'),
    url = 'https://script.google.com/macros/s/AKfycbw2fy_RhXXbW0IpPuDH8ppiNx1ji06AzIJ-ooSQrxCsEHsued0/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
