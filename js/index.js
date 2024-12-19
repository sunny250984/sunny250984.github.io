$(window).on('load', function () {
  gsap.to('#loader', 1, { y: "-100%" });
  gsap.to('#loader', 1, { opacity: 0 });
  gsap.to('#loader', 0, { display: "none", delay: 1 });
  gsap.to('#header', 0, { display: "block", delay: 1 })
  gsap.to('#navigation-content', 0, { display: "none" });
  gsap.to('#navigation-content', 0, { display: "flex", delay: 1 });

  // send email
  $("#email_submit").click(() => {
    let username = $("input[name='name']").val();
    let useremail = $("input[name='email']").val();
    let subject = $("input[name='subject']").val();
    let message = $("textarea[name='message']").val();
    if (username === "") { alert("Please input your name"); $("input[name='name']").focus(); return; }
    if (useremail === "") { alert("Please input your email"); $("input[name='email']").focus(); return; }
    if (subject === "") { alert("Please input your subject"); $("input[name='subject']").focus(); return; }
    if (message === "") { alert("Please input your message"); $("input[name='message']").focus(); return; }

    Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "topstar20210@gmail.com",
      Password: "036B5159B48FD6A4F47BF3BE7B8422E7CA80",
      To: 'topstar20210@gmail.com',
      From: useremail,
      Subject: subject,
      Body: `Hi, Genda! This is ${username}. ${message} ....... From portfolio .......`
    }).then(
      message => alert(message)
    );
  })
})
$(function () {
  $('.color-panel').on("click", function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', .6, { y: 0 });
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', .6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
})
$(function () {

  $('#about-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#blog', 0, { display: "none" });
    gsap.to('#portfolio', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#about', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#blog', 0, { display: "none" });
    gsap.to('#portfolio', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#contact', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#portfolio-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#blog', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#portfolio', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#blog-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#portfolio', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#blog', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })
  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#portfolio', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#blog', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#header', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

  $(".logo_icon").on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#portfolio', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#blog', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#header', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  })

})
$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor')
  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1
    })

  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);


})

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}