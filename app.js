const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const modalClose = $('.modal-close');
const buyBtn = $$('.booking-buy-btn');
const modalContainer = $('.modal-container');

const app = {
    handleEvent: function() {
        buyBtn.forEach((e)=> {
            e.onclick = ()=> {
                modal.classList.add('open');
            }
        })
        modalClose.onclick = ()=> {
            modal.classList.remove('open');
        }
        modal.onclick = (e)=> {
            if(e.target == modal) {
                modal.classList.remove('open');
            }
        }
    },
    start: function() {
        this.handleEvent();
    }
}

app.start();