!function() {

  function removeCharUsingPattern(re, element) {
    var $el = $(element);
    var inputVal = $el.val();
    if(re.test(inputVal)) {
      $el.val(inputVal.replace(re, ''));
    }
  }

  $(document).on('input.patten', 'input.onlyNumber', function() {
    removeCharUsingPattern(/[^0-9]/gi, this);
  });

  $(document).on('input.patten', 'input.onlyAlpha', function() {
    removeCharUsingPattern(/[^a-zA-Z]/gi, this);
  });

  $(document).on('input.patten', 'input.onlyAlphaNumber', function() {
    removeCharUsingPattern(/[^0-9a-zA-Z]/gi, this);
  });

  $(document).on('input.patten', 'input.onlyHangul', function() {
    removeCharUsingPattern(/[^가-힣ㄱ-ㅎㅏ-ㅣ\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, this);
  });

  $(document).on('input.patten', 'input.notSpecial', function() {
    removeCharUsingPattern(/[^0-9a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, this);
  });

  $(document).on('input.patten', 'input[data-pattern]', function() {
    var pattern = $(this).data('pattern');
    var re = new RegExp(pattern, 'gi');
    removeCharUsingPattern(re, this);
  });

}();