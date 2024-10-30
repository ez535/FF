let feedbackModal = document.querySelector('.feedback');
let feedbackBtns = document.querySelectorAll('.feedback-btn');
let closeModalFeedback = document.querySelector('.close-modal_feedback');

let callbackBtns = document.querySelectorAll('.callback-btn');
let callbackModal = document.querySelector('.callback');
let closeModalCallback = document.querySelector('.close-modal_callback');

callbackBtns.forEach((callbackBtn) => {
    callbackBtn.addEventListener('click', function() {
        callbackModal.classList.add('open-modal');
    });
})

feedbackBtns.forEach((feedbackBtn) => {
    feedbackBtn.addEventListener('click', function() {

        feedbackModal.classList.add('open-modal');
    });
})

closeModalFeedback.addEventListener('click', closeModal);
closeModalCallback.addEventListener('click', closeModal);

document.addEventListener('keydown', clickEsc);
feedbackModal.addEventListener('click', clickOutFeed);
callbackModal.addEventListener('click', clickOutCall);

function closeModal() {
    if(feedbackModal.classList.contains('open-modal')) {
        feedbackModal.classList.remove('open-modal')
    }

    if(callbackModal.classList.contains('open-modal')) {
        callbackModal.classList.remove('open-modal');
    }
}

function clickEsc(e) {
    if (e.key === 'Escape' && (feedbackModal.classList.contains('open-modal') || callbackModal.classList.contains('open-modal'))) {
        closeModal();
    }
}

function clickOutFeed(e) {
    const isClickInsideFeedback = e.target.closest('.feedback__container');

    if (!isClickInsideFeedback) {
        closeModal();
    } else {
        return true;
    }
}

function clickOutCall(e) {
    const isClickInsideCallback = e.target.closest('.callback__container');

    if (!isClickInsideCallback) {
        closeModal();
    } else {
        return true;
    }
}
