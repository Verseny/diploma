document.addEventListener('DOMContentLoaded', function(){
  tippy('.js-tooltip', {
    theme: 'blanchard center-align',
    maxWidth: 260,
    moveTransition: 'transform 0.2s ease-out',

  });


  const params = {
    btnClassName: "underheader__item-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var eventsSwiper = new Swiper(".events__swiper", {
    pagination: {
      el: ".events__pagination",
    },
    spaceBetween: 20,
  });

  var tl = gsap.timeline({repeat: 30, repeatDelay:0})
  tl.to(".hero__swiper-slide", {duration:10, scale:1.5})
  setTimeout(()=>{
    tl.to(".hero__swiper-slide", {duration:10, scale:1})
  },10000)

  const element = document.querySelector('.js-choice');

  const choices = new Choices(element, {
      searchEnabled : false,
      itemSelectText: ""
  })

  var swiper = new Swiper(".gallery__right-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelectorAll(".list--item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".container--dropdown");

      document.querySelectorAll(".list--item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });

      document.querySelectorAll(".container--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".list")) {
      document.querySelectorAll(".container--dropdown").forEach(el => {
          el.classList.remove("active-list--item");
      })
       document.querySelectorAll(".list--item__btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  })

  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: 'content',
      header: '.accordion-header',
      collapsible: true,
      active: 0
    });
  });
  $( function() {
    $( "#accordion1" ).accordion({
      heightStyle: 'content',
      header: '.accordion-header',
      collapsible: true,
      active: 0
    });
  });

  document.querySelectorAll('.header__left-hidden').forEach(function(listItem){
    listItem.addEventListener('click', function(event){


      document.querySelectorAll('.hero__left-hidden-list').forEach(function(btn){
        btn.classList.toggle('no-display')
      })


      document.querySelectorAll('.header__right-hidden').forEach(function(btn){
        btn.classList.remove('active-burger')
      })

      document.querySelectorAll('.hero__right-hidden-search').forEach(function(btn){
        btn.classList.add('no-display')
      })
    })
  })

  document.querySelectorAll('.hero__list-button').forEach(function(listItem){
    listItem.addEventListener('click', function(event){

      document.querySelectorAll('.hero__left-hidden-list').forEach(function(btn){
        btn.classList.toggle('no-display')
      })
    })
  })
  document.querySelectorAll('.header__right-hidden').forEach(function(listItem){
    listItem.addEventListener('click', function(event){



      document.querySelectorAll('.hero__right-hidden-search').forEach(function(btn){
        btn.classList.toggle('no-display')
      })



      document.querySelectorAll('.hero__left-hidden-list').forEach(function(btn){
        btn.classList.add('no-display')
      })

    })
  })
  document.querySelectorAll('.hidden-button').forEach(function(listItem){
    listItem.addEventListener('click', function(event){



      document.querySelectorAll('.hero__right-hidden-search').forEach(function(btn){
        btn.classList.toggle('no-display')
      })



      document.querySelectorAll('.hero__left-hidden-list').forEach(function(btn){
        btn.classList.add('no-display')
      })

    })
  })
  document.querySelectorAll('.section-questions__list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.section-questions__btn svg path').forEach(function(btn){
        btn.classList.remove('x-button')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('x-button')
    })
  })

  document.querySelectorAll('.catalog__hidden-text-button').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__hidden-text-button').forEach(function(btn){
        btn.classList.remove('is-active')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('is-active')
    })
  })
  var tl3 = gsap.timeline({paused: true});
  tl3.fromTo(".main-1 .catalog__left-person", {autoAlpha:1, opacity:1},{autoAlpha:0, opacity:0})
      .fromTo(".main-1 .catalog__left-noperson", {autoAlpha:0, opacity:0},{autoAlpha:1, opacity:1})
  document.querySelectorAll('.catalog__hidden-text-button').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      console.log(path)
      if (path == 12){
        document.onclick = function(){
          tl3.reverse();
          document.querySelectorAll('.catalog .main-1 .catalog__main .catalog__left .catalog__left-person').forEach(function(btn){
            btn.classList.add('pose')
          })
          document.querySelectorAll('.catalog .main-1 .catalog__main .catalog__left .catalog__left-noperson').forEach(function(btn){
            btn.classList.remove('pose')
          })
        }
      }
      if (path != 12){
        document.onclick = function(){
          tl3.play();
          document.querySelectorAll('.catalog .main-1 .catalog__main .catalog__left .catalog__left-person').forEach(function(btn){
            btn.classList.remove('pose')
          })
          document.querySelectorAll('.catalog .main-1 .catalog__main .catalog__left .catalog__left-noperson').forEach(function(btn){
            btn.classList.add('pose')
          })
        }
      }
      document.querySelectorAll('.catalog__hidden-text-button').forEach(function(btn){
        btn.classList.remove('is-active')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('is-active')
    })
  })

  document.querySelectorAll('.list--item__btn').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      document.querySelectorAll('.list--item__btn span svg').forEach(function(btn){
        btn.classList.remove('rotate')
      })
      listItem.querySelectorAll('.list--item__btn span svg').forEach(function(btn){
        btn.classList.toggle('rotate')
      })
    })
  })


  document.querySelectorAll('.catalog__list-item').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      document.querySelectorAll('.catalog__list-item span svg').forEach(function(btn){
        btn.classList.remove('rotate')
      })
      listItem.querySelectorAll('.catalog__list-item span svg').forEach(function(btn){
        btn.classList.toggle('rotate')
      })
    })
  })
  var tl2 = gsap.timeline({paused: true});
  tl2.fromTo(".main-1", {autoAlpha:1, opacity:1},{autoAlpha:0, opacity:0})
      .fromTo(".main-2", {autoAlpha:0, opacity:0},{autoAlpha:1, opacity:1})

  document.querySelectorAll('.catalog__country-item').forEach(function(listItem){
    listItem.addEventListener('click', function(event){

      const path = event.currentTarget.dataset.path
      console.log(path)
      if (path == 3){
        document.onclick = function(){
          tl2.reverse();
          document.querySelectorAll('.main-1').forEach(function(btn){
            btn.classList.add('pose')
          })
          document.querySelectorAll('.main-2').forEach(function(btn){
            btn.classList.remove('pose')
          })
        }
      }
      if (path != 3){
        document.onclick = function(){
          tl2.play();
          document.querySelectorAll('.main-1').forEach(function(btn){
            btn.classList.remove('pose')
          })
          document.querySelectorAll('.main-2').forEach(function(btn){
            btn.classList.add('pose')
          })
        }
      }

      document.querySelectorAll('.catalog__country-item').forEach(function(btn){
        btn.classList.remove('active-flag')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('active-flag')
    })
  })

  document.querySelectorAll('.choices__item').forEach(function(listItem){
    listItem.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.id
      console.log(path)
      if (path == 1){
        document.querySelectorrAll('.gallery-swiper-1').forEach(function(btn){
          btn.classList.remove('no-display')
        })

        document.querySelector('.gallery-swiper-2').classList.add('no-display')
      }
      if (path == 2){
        document.querySelectorrAll('.gallery-swiper-2').forEach(function(btn){
          btn.classList.remove('no-display')
        })
        document.querySelector('.gallery-swiper-1').classList.add('no-display')
      }

    })
  })


  document.querySelectorAll('.events__slide-button').forEach(function(listItem){
    listItem.addEventListener('click', function(event){

      document.querySelectorAll('.events__hidden').forEach(function(btn){
        btn.classList.remove('no-display')
      })

      document.querySelector('.events__slide-button-space').classList.add('no-display')
    })
  })


  document.querySelectorAll('#gallery-button-1').forEach(function(listItem){
    listItem.addEventListener('click', function(event){


      document.querySelectorrAll('.gallery-swiper-1').forEach(function(btn){
        btn.classList.remove('no-display')
      })

      document.querySelector('.gallery-swiper-2').classList.add('no-display')

    })
  })

  document.querySelectorAll('#gallery-button-2').forEach(function(listItem){
    listItem.addEventListener('click', function(event){

      document.querySelectorrAll('.gallery-swiper-2').forEach(function(btn){
        btn.classList.remove('no-display')
      })
      document.querySelector('.gallery-swiper-1').classList.add('no-display')

    })
  })

  ymaps.ready(init);

    function init() {
      const mapElem = document.querySelector('#map');
      const myMap = new ymaps.Map(
        "map",
        {
          center: [55.75846806898367, 37.60108849999989],
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
        },
        {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition:  { top: "200px", right: "20px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "120px", right: "20px" }
        }
      );

      var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/contacts/circle.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);

      setTimeout(() => {
        myMap.container.fitToViewport();
      }, 5000);
    }


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("7 (999)-999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      Cname: {
        required: true,
        minLength: 2,
        maxLenght: 10,
      },
      Ctel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      Cname:{
        required: 'Поле обязательно для ввода!',
        minLength: 'Недостаточно символов!',
        maxLenght: 'Слишком много символов!'
      },
      Cmail:'Недостаточно символов!',
      Ctel:{
        required: 'Поле обязательно для ввода!',
        function: 'Недостаточно символов!'
      }
    },
    colorWrong: '#FF3030'
  });

  const MOBILE_WIDTH = 580;
  let acc;
  const accWrap = document.querySelector(".js-accordion-wrap");
  const checkboxes = accWrap.querySelector(".js-checkboxes");
  const accHeader = accWrap.querySelector(".js-accordion-heading");

  function sortElems(elems) {
    elems.sort(function (a, b) {
      const valueA = parseInt(a.parentNode.dataset.position);
      const valueB = parseInt(b.parentNode.dataset.position);

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function removeCheckbox (e) {
    checkboxes.append(e.target.parentElement);
    e.target.removeEventListener('change', removeCheckbox);
  }

  function onAccordionClick(evt, ui) {
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));
    sortElems(checkedBoxes);

    if (!ui.newHeader[0]) {
      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
          el.addEventListener('change', removeCheckbox);
        }
      });
    } else {
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
        el.removeEventListener('change', removeCheckbox);
      });
    }

  }

  function checkWindowWidth() {
    const currentWidth = getWindowWidth();
    const checkedBoxes = Array.from(accWrap.querySelectorAll(".js-checkbox"));

    if (currentWidth > MOBILE_WIDTH && acc) {
      acc.accordion("destroy");
      acc = false;
      checkedBoxes.forEach(function (el) {
        checkboxes.append(el.parentNode);
      });
    } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
      acc = $(".js-accordion").accordion({
        header: '.js-accordion-heading',
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "auto",
        activate: function (evt, ui) {
          console.log(ui);
          onAccordionClick(evt, ui);
        }
      });

      checkedBoxes.forEach(function (el) {
        if (el.checked) {
          accWrap.append(el.parentNode);
        }
      });
    }
  }

  checkWindowWidth();
  window.addEventListener("resize", function () {
    checkWindowWidth();
  });














})


let gallerySlider = new Swiper(".slides-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


let gallerySlider2 = new Swiper(".slides-container-2", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__section .gallery__pagination-2",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__next-2",
    prevEl: ".gallery__prev-2"
  },

  breakpoints: {
    441: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 52
    }
  },

  a11y: false

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

let publicationsSlider = new Swiper(".slides-container-3", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".publications__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".publications__next",
    prevEl: ".publications__prev"
  },

  breakpoints: {

    200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 4
      },
      spaceBetween: 25
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },

      spaceBetween: 34
    },
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },

      spaceBetween: 49
    },

    1050: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },

      spaceBetween: 49
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },

      spaceBetween: 50
    },
    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },

      spaceBetween: 50
    },

    1900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },

      spaceBetween: 50
    }
  },

  a11y: false

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

var projectSwiper = new Swiper(".projects__swiper", {
  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30
    },
    760: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 49
    },

    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 49
    }
  },
});

