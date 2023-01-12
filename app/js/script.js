 
/////////////Message signalant le nombre de mots que l'utilisateur doit entrer
const input = document.getElementById("otps");
const errorMessage = document.createElement("div");
errorMessage.classList.add("error-message");
errorMessage.style.color = "orange";
input.parentNode.insertBefore(errorMessage, input.nextSibling);

input.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value.length === 6) {
    errorMessage.innerText = "";
  } else {
    errorMessage.innerText = "Le numéro de confirmation doit contenir 6 chiffres";
  }
});
//////Registre des cadeaux///////////
function infoPop() {
  document.getElementById('formulaire__popupId').style.display = 'block'
  document.getElementById('registre__popupId').style.display = 'none'
  document.getElementById('registre_blocs__lists').style.display = 'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}
function imagePopNo() {
  document.getElementsByClassName('formulaire__popup')[0].style.display = 'none'
  document.getElementsByClassName('registre_blocs__lists')[0].style.display =
    'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
}
//Afficher le premier popup lorsqu'on clique sur achat du produit
function imagPop() {
  document.getElementById('registre__popupsId').style.display = 'block'
  document.getElementById('registre_blocs__lists').style.display = 'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}
//Femer le premier popup lorsqu'on clique sur Reserver
function imagePopNone() {
  document.getElementsByClassName('registre__popup')[0].style.display = 'none'
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
  document.getElementsByClassName('registre_blocs__lists')[0].style.display =
    'block'
}
//Femer le premier popup lorsqu'on clique sur Achat
function imagePopNon() {
  document.getElementsByClassName('registre__popups')[0].style.display = 'none'
  document.getElementsByClassName('registre_blocs__lists')[0].style.display =
    'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
}
//Afficher le premier popup lorsqu'on clique sur Reserver
function imagePop(id) {
  document.getElementById('registre__popupId').style.display = 'block'
  document.getElementById('registre_blocs__lists').style.display = 'block'
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll'

  // Récupérer l'élément cliqué
  const clickedElement = document.getElementById(id)
  // Récupérer l'image et le texte associés à l'élément cliqué
  const image = clickedElement.getAttribute('data-image')
  const price = clickedElement.getAttribute('data-price')
  const desc = clickedElement.getAttribute('data-desc')
  // Charger l'image et le texte dans le pop-up
  const imageContain = document.getElementById('imageContainerId')
  imageContain.innerHTML = `<img src="${image}" alt="Image du Produit">`
  const imageText = document.getElementById('imageTextId')
  imageText.innerHTML = `
    <div class="block_1__title">
    <h3><span>${desc}</span></h3><br>
      <p>Prix: <span>${price}</span>
    </p>
    </div>
  `
}




////////Section Story////////

// References to DOM Elements
const prevBtn = document.querySelector('#story__prev-btn')
const nextBtn = document.querySelector('#story__next-btn')
const book = document.querySelector('#story__container')

const paper1 = document.querySelector('#paper1')
const paper2 = document.querySelector('#paper2')
const paper3 = document.querySelector('#paper3')
const paper4 = document.querySelector('#paper4')

// Event Listener
prevBtn.addEventListener('click', goPrevPage)
nextBtn.addEventListener('click', goNextPage)

// Business Logic
let currentLocation = 1
let numOfPapers = 8
let maxLocation = numOfPapers + 1

//Fonction next
function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        paper1.classList.add('flipped')
        paper1.style.zIndex = 1
        break
      case 2:
        paper2.classList.add('flipped')
        paper2.style.zIndex = 2
        break
      case 3:
        paper3.classList.add('flipped')
        paper3.style.zIndex = 3
        break
      case 4:
        paper4.classList.add('flipped')
        paper4.style.zIndex = 4
        break

      case 5:
        paper5.classList.add('flipped')
        paper5.style.zIndex = 5
        break
      case 6:
        paper6.classList.add('flipped')
        paper6.style.zIndex = 6
        break
      case 7:
        paper7.classList.add('flipped')
        paper7.style.zIndex = 7
        break
      case 8:
        // paper4.classList.add('flipped');
        paper8.style.zIndex = 8
        break
      default:
        throw new Error('unkown state')
    }
    currentLocation++
  }
}
//Fonction prev
function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        paper1.classList.remove('flipped')
        paper1.style.zIndex = 8
        break
      case 3:
        paper2.classList.remove('flipped')
        paper2.style.zIndex = 7
        break
      case 4:
        paper3.classList.remove('flipped')
        paper3.style.zIndex = 6
        break
      case 5:
        paper4.classList.remove('flipped')
        paper4.style.zIndex = 5
        break
      case 6:
        paper5.classList.remove('flipped')
        paper5.style.zIndex = 4
        break
      case 7:
        paper6.classList.remove('flipped')
        paper6.style.zIndex = 3
        break
      case 8:
        paper7.classList.remove('flipped')
        paper7.style.zIndex = 2
        break
      case 9:
        //paper8.classList.remove('flipped');
        paper8.style.zIndex = 1
        break
      default:
        throw new Error('unkown state')
    }

    currentLocation--
  }
}

//	ANIMATION SUR LE LIVRE GRAND ECRAN

var front = document.querySelector('.face-front')
var back = document.querySelector('.face-back')
var flip = document.querySelector('.histoire_book__content')
var uno = document.querySelectorAll('.book')
var portada = document.querySelectorAll('#portada')
var portad = document.querySelectorAll('#portada-back')
var contZindex = 2
var customZindex = 1
var windowsW = window.innerWidth
if (windowsW >= 810) {
  for (var i = 0; i < uno.length; i++) {
    uno[i].style.zIndex = customZindex
    customZindex--
    uno[i].addEventListener('click', function (e) {
      var tgt = e.target
      var unoThis = this
      unoThis.style.zIndex = contZindex
      contZindex++

      if (tgt.getAttribute('class') == 'face-front') {
        unoThis.style.zIndex = contZindex
        contZindex += 20
        setTimeout(function () {
          unoThis.style.transform = 'rotateY(-180deg)'
        }, 500)
      }
      if (tgt.getAttribute('class') == 'face-back') {
        unoThis.style.zIndex = contZindex
        contZindex += 20

        setTimeout(function () {
          unoThis.style.transform = 'rotateY(0deg)'
        }, 500)
      }
      if (tgt.getAttribute('id') == 'portada') {
        flip.classList.remove('trnsf-reset')
        flip.classList.add('trnsf')
      }
      if (tgt.getAttribute('id') == 'trsf') {
        flip.classList.remove('reset-trnsf')
        flip.classList.remove('trnsf')
        flip.classList.add('trnsf-reset')
      }
      if (tgt.getAttribute('id') == 'portada-back') {
        flip.classList.add('reset-trnsf')
        flip.classList.remove('reset')
      }
      if (tgt.getAttribute('id') == 'trsfo') {
        flip.classList.add('reset')
        flip.classList.remove('reset-trnsf')
        flip.classList.remove('trnsf')
      }
    })
  }
} else {
  for (var i = 0; i < uno.length; i++) {
    uno[i].style.zIndex = customZindex
    customZindex--
    uno[i].addEventListener('click', function (e) {
      var tgt = e.target
      var unoThis = this
      unoThis.style.zIndex = contZindex
      contZindex++

      if (tgt.getAttribute('class') == 'face-front') {
        unoThis.style.zIndex = contZindex
        contZindex -= 20
        setTimeout(function () {
          unoThis.style.transform = 'rotateY(180deg)'
        }, 500)
      }
      if (tgt.getAttribute('class') == 'face-back') {
        unoThis.style.zIndex = contZindex
        contZindex += 20
        setTimeout(function () {
          unoThis.style.transform = 'rotateY(180deg)'
        }, 500)
      }
    })
  }
}
// ANIMATION AU CLICK DU HAMBURGER

var toggleClick = document.querySelector('.navbar_menu__togglebox')
var navbar_menu = document.querySelector('.navbar_menu')
toggleClick.addEventListener(
  'click',
  () => {
    toggleClick.classList.toggle('active')
    navbar_menu.classList.toggle('block')
  },
  600,
)

///////////////////// Animation du banner
let playBtn = document.querySelector('.banner__playbtn')
let banner = document.querySelector('.banner')
let bannerImage = document.querySelector('.banner__image ')
let bannerImageDiv = document.querySelectorAll('.banner__image__elt')

playBtn.addEventListener('click', function () {
  //bannerImageDiv.style.display = "none"
  gsap.to('.banner__image__elt', {
    duration: 2.5,
    opacity: 0,
    rotation: 360,
    ease: 'power1.inOut',
    stagger: {
      each: 0.1,
      from: 'center',
      grid: [0, 0],
      ease: 'power2.inOut',
    },
  })
  gsap.to('.banner__text p', {
    duration: 1,
    opacity: 1,
    delay: 4,
    ease: 'power1.inOut',
    stagger: {
      each: 0.7,
      from: 'center',
      grid: [0, 0],
      ease: 'power2.inOut',
    },
  })
  banner.classList.toggle('show')
  //bannerImage.classList.toggle('show');
  setTimeout(function () {
    bannerImage.classList.toggle('show')
  }, 2400)
})

var devSlideIndex = 1
devShowSlide(devSlideIndex)

function currentSlidde(n) {
  devShowSlide((devSlideIndex = n))
}
function devShowSlide(n) {
  var i
  var slides = document.querySelectorAll('.programme__bloc1__slider .slide')
  var slidesText = document.querySelectorAll(
    '.programme__bloc1__text__slider .slide',
  )
  //var dotts = document.getElementsByClassName('dott');
  if (n > slides.length || n > slidesText.length) {
    devSlideIndex = 1
  }
  if (n < 1) {
    devSlideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    slidesText[i].style.display = 'none'
  }
  // for (i = 0; i < dotts.length; i++) {
  //     dotts[i].className = dotts[i].className.replace(' actived', '');
  // }
  slides[devSlideIndex - 1].style.display = 'block'
  slidesText[devSlideIndex - 1].style.display = 'block'
  //dotts[devSlideIndex - 1].className += ' actived';
}

var slideInd = 0
devShowSlides()
function devShowSlides() {
  var i
  var slides = document.querySelectorAll('.programme__bloc1__slider .slide')
  var slidesText = document.querySelectorAll(
    '.programme__bloc1__text__slider .slide',
  )
  //var dotts = document.getElementsByClassName('dott');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    slidesText[i].style.display = 'none'
  }
  slideInd++
  if (slideInd > slides.length) {
    slideInd = 1
  }
  // for (i = 0; i < dotts.length; i++) {
  //     dotts[i].className = dotts[i].className.replace(' actived', '');
  // }

  slides[slideInd - 1].style.display = 'block'
  slidesText[slideInd - 1].style.display = 'block'
  // dotts[slideInd - 1].className += ' actived';
  setTimeout(devShowSlides, 4000) // Change image every 2 seconds
}

///////////////////////////////////////////////////////////
// pour gérer l'accordion du faq
let nb
const skillsContainer = document.getElementsByClassName('sectionfaq__content'),
  skillsHeader = document.querySelectorAll('.sectionfaq__question')

function toggleSkills() {
  let itemClass = this.parentNode.className
  for (nb = 0; nb < skillsContainer.length; nb++) {
    skillsContainer[nb].className = 'sectionfaq__content faq__close'
  }
  if (itemClass === 'sectionfaq__content faq__close') {
    this.parentNode.className = 'sectionfaq__content faq__open'
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

////////////////caroussel de témoignage

var testim = document.getElementById('testimonial'),
  testimDots = Array.prototype.slice.call(
    document.getElementById('testimonial__dots').children,
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById('testimonial__content').children,
  ),
  testimleftArrow = document.getElementById('left-arrow'),
  testimRightArrow = document.getElementById('right-arrow'),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer
// coding with nick
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove('active')
      testimContent[k].classList.remove('inactive')
      testimDots[k].classList.remove('active')
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add('inactive')
    }
    testimContent[slide].classList.add('active')
    testimDots[slide].classList.add('active')

    currentActive = currentSlide

    clearTimeout(testimTimer)
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1))
    }, testimSpeed)
  }
  testimleftArrow.addEventListener('click', function () {
    playSlide((currentSlide -= 1))
  })
  testimRightArrow.addEventListener('click', function () {
    playSlide((currentSlide += 1))
  })

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener('click', function () {
      playSlide((currentSlide = testimDots.indexOf(this)))
    })
  }
  playSlide(currentSlide)
}
