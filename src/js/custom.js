$('#google-form').submit(function (e) {  
  e.preventDefault();

  if ($('#name').val() && $('#nation').val() && $('#phone').val() && $('#email').val()) {//需要先確認必填欄位是否填寫
    $.ajax({
      // url為Google Form按下submit的aciotn
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0zn-HrwxEEm6BPh1lCcRgQo5-0KwYDmFS1nip57UbW9ppHQ/formResponse",
      crossDomain: true,//解決跨網域CORS的問題
      data: {// entry.xxxxx 這些需要填寫您表單裡面的值，與其相互對應
        "entry.902173817": $('#name').val(),
        "entry.913999100": $('#title').val(),
        "entry.2081263291": $('#nation').val(),
        "entry.1916522837": $('#phone').val(),
        "entry.1685011723": $('#address').val(),
        "entry.1253561105": $('#email').val(),
        "entry.2015907215": $('#idnumber').val()
      },
      type: "POST", //因為是要進行insert的動作，故事用POST
      dataType: "JSONP",
      complete: function () {
        //完成後把這些欄位清空
        $('#name').val('')
        $('#title').val('')
        $('#nation').val('')
        $('#phone').val('')
        $('#address').val('')
        $('#email').val('')
        $('#idnumber').val('')
        //最後跳轉到感謝的頁面
        window.location.replace("success.html");
      }
    });
  }
});

var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "auto",
    showFlags: "false",
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    
});

function checkAge() {
    var birthdateInput = document.getElementById('birthdate');
    var birthDate = birthdateInput.value;
    
    // 取得今天的日期
    var today = new Date();
    
    // 取得出生日期
    var birth = new Date(birthDate);
    
    // 計算年齡
    var age = today.getFullYear() - birth.getFullYear();
    
    // 檢查是否已經過了生日
    var hasPassedBirthday = today.getMonth() > birth.getMonth() ||
                            (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
    
    // 檢查年齡是否大於等於18歲
    if (age > 18 || (age === 18 && hasPassedBirthday)) {
      window.location.href = "form.html";
    } else {
      window.location.href = "alert.html";
    }
}
function closeWindow() {
    window.close();
}