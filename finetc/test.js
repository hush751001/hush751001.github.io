// 입력제한
!(function() {
  function removeCharUsingPattern(re, element) {
    var $el = $(element);
    var inputVal = $el.val();
    if (re.test(inputVal)) {
      $el.val(inputVal.replace(re, ""));
    }
  }

  $(document).on("input.patten", "input.onlyNumber", function() {
    removeCharUsingPattern(/[^0-9]/gi, this);
  });

  $(document).on("input.patten", "input.onlyAlpha", function() {
    removeCharUsingPattern(/[^a-zA-Z]/gi, this);
  });

  $(document).on("input.patten", "input.onlyAlphaNumber", function() {
    removeCharUsingPattern(/[^0-9a-zA-Z]/gi, this);
  });

  $(document).on("input.patten", "input.onlyHangul", function() {
    removeCharUsingPattern(/[^가-힣ㄱ-ㅎㅏ-ㅣ\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, this);
  });

  $(document).on("input.patten", "input.notSpecial", function() {
    removeCharUsingPattern(/[^0-9a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, this);
  });

  $(document).on("input.patten", "input[data-pattern]", function() {
    var pattern = $(this).data("pattern");
    var re = new RegExp(pattern, "gi");
    removeCharUsingPattern(re, this);
  });
})();

// jQuery 이벤트 목록 확인
!(function() {
  function getAllEventObject(element) {
    if (element.jquery) {
      element = element[0];
    }
    if (element.constructor.name === "Window") {
      var jQueryUUID;
      for (var key in document) {
        if (typeof key === "string") {
          if (/^jQuery/.test(key)) {
            if (element[key].events) {
              jqueryUUID = key;
              break;
            }
          }
        }
      }
      if (jQueryUUID) {
        if (window[jqueryUUID].events) {
          var events = element[jqueryUUID].events;
          for (var eventName in events) {
            console.log("EVENT NAME : ", eventName);
            console.table(events[eventName], ["type", "selector", "namespace"]);
          }
        }
      }
    } else {
      for (var key in element) {
        if (typeof key === "string") {
          if (/^jQuery/.test(key)) {
            if (element[key].events) {
              var events = element[key].events;
              for (var eventName in events) {
                console.log("EVENT NAME : ", eventName);
                console.table(events[eventName], ["type", "selector", "namespace"]);
              }
            }
          }
        }
      }
    }
  }
})();

// <button> 태그 확인
!function() {
  if($(button).not('[type=button]').length > 0) {
    console.error('button에 type=button이 없습니다.');
    $('button').not('[type=button]').each(function() {
      console.log(this);
    });
  }
}();

// id 중복 확인
!function() {
  var ids = $('[id]').map(function() { return this.id; }).toArray();
  var uniq = ids
    .map((id) => {
      return {
        count: 1,
        id: id
      };
    })
    .reduce((a, b) => {
      a[b.id] = (a[b.id] || 0) + b.count;
      return a;
    }, {});
  var duplicates = Object.keys(uniq).filter(a => uniq[a] > 1);
  if(duplicates.length > 0) {
    console.error('id가 중복되어 있습니다.', duplicates);
  }
}();
$(function() {
  !!$('[id]').each(function(i, el) {
    if(!el.id) {
      console.log(el);
    }
  });
});
