const burger = document.getElementById('burger')
const openCloseBurger = document.getElementById("navbar")

burger.addEventListener('click', () => {
    openCloseBurger.classList.toggle('open')
})

const modal = document.getElementById("my_modal");
const btn = document.getElementById("btn");
const span = document.getElementsByClassName("close_modal_window")[0];


 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }


 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).ready(function() {
    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
      if (document.form.name.value == '' || document.form.phone.value == '' || document.form.comment.value == '' ) {
        valid = false;
        return valid;
      }
    
      $.ajax({
        type: "POST",
        url: "mail/mail.php",
        data: $(this).serialize()
      }).done(function() {
        $('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form').trigger('reset');
      });
      return false;
    });
  });

  $(document).ready(function() {
    $.ajax({
    type: "POST",
    url: "RSSReader.asmx/GetRSSReader",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(msg) {
      // Hide the fake progress indicator graphic.
      $('#RSSContent').removeClass('loading');
    
      // Insert the returned HTML into the <div>.
      $('#RSSContent').html(msg.d);
     }
    });
    });

  