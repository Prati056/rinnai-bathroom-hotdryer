var offsetY =  window.pageYOffset;
var common = {
  menu: function() {
    $('.overlay').hide();
    // open
    function open(){
      $('.main-menu').addClass('is-open')
      $('.overlay').show();
    }

    $('.btn-menu').click(function() {
      offsetY =  window.pageYOffset;
      open();
    })

    // close
    function close(){
      $('.main-menu').removeClass('is-open')
      $('.overlay').hide();
    }
    $('.btn-close, .main-menu ul li a, .overlay').click(function() {
      offsetY = $('body').css('top').split('px')[0];
      close();
    })
  },
  modal: function() {
    $('.modal__close').click(function() {
      $('.modal').removeClass('modal--active');
    })
  },
  anchorLink: function() {
    $('a[href^="#"]').click(function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          var offsetTop = 0
          if ($('.header').length) {
            offsetTop =  $('.header').height()
          }
          $('html,body').animate({
            scrollTop: target.offset().top - offsetTop
          }, 1000);
          return false;
        }
      }
    });
  },
  animation: function() {
    $(document).ready(function() {
      $('body').addClass('complete')
      $('.banner').addClass('is-complete')
      setTimeout(function() {
        $('#header').addClass('fixed')
      }, 300);
      setTimeout(function() {
        $('.banner__title__big').addClass('show')
        $('.banner__title__sub').addClass('show')
      }, 50);
    })

    $(window).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 200) {
        $('.feature__ttl').addClass('is-show');
      }
    });


  },
  loadWindow: function() {
    $(window).on('beforeunload', function(){
      $('body').css('opacity', 0)
      $(window).scrollTop(0);
    });
  },
  hideBgd: function() {
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      var wh = $(window).height() + $('.feature').height();
      if (y > wh) {
        $('.bgd-fixed').hide()
      } else {
        $('.bgd-fixed').show()
      }
    });
  },


  init: function() {
    this.menu();
    this.animation();
    this.modal();
    this.anchorLink();
    this.loadWindow();
    this.hideBgd();
  }
};

common.init();
