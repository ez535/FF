let brandsBtn = document.getElementById('brands-btn');
let typesBtn = document.getElementById('types-btn');
let brandsList = document.querySelector('.brands__list');
let repairList = document.querySelector('.repair__list');
let readMoreTexts = document.querySelectorAll('.read-more__text');
let showMoreBtns = document.querySelectorAll('.show-more');
let readMore = document.querySelector('.post__block .text');
let readMoreBtn = document.querySelector('.read-more');

showMoreBtns.forEach((showMoreBtn) => {
  let readTextbtn = function() {
    readMoreTexts.forEach((readMoreText) => {
      if(showMoreBtn.contains(readMoreText)) {
        if (readMoreText.textContent === 'Показать все') {
            readMoreText.textContent = 'Скрыть';
          } else {
            readMoreText.textContent = 'Показать все';
        }
      }
    })
  }

  showMoreBtn.addEventListener('click', () => {
    if(showMoreBtn === brandsBtn) {
      brandsList.classList.toggle('open');
      showMoreBtn.classList.toggle('arr');

      readTextbtn();
    }

    if(showMoreBtn === typesBtn) {
      repairList.classList.toggle('open');
      showMoreBtn.classList.toggle('arr');

      readTextbtn();
    }
  }); 
});

readMoreBtn.addEventListener('click', () => {
  readMore.classList.toggle('open');
  readMoreBtn.classList.toggle('arr');

  readMoreTexts.forEach((readMoreText) => {
    if(readMoreBtn.contains(readMoreText)) {
      if (readMoreText.textContent === 'Читать далее') {
          readMoreText.textContent = 'Скрыть';
        } else {
          readMoreText.textContent = 'Читать далее';
      }
    }
  })
})