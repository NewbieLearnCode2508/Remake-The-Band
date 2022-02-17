const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const modalClose = $('.modal-close');
const buyBtn = $$('.booking-buy-btn');
const modalContainer = $('.modal-container');
const slideItem = $$('.slider-item');
const emailInput = $('input[type="email"]');
const nameInput = $('input[type="name"]');
const messageInput = $('input[type="text"]');

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
        let idx = 0;
        setInterval(()=> {
            if(idx != slideItem.length-1) {
                slideItem.forEach((e)=> {
                    e.classList.remove('active');
                });
                slideItem[idx].classList.add('active');
                console.log(slideItem[idx]);
                idx++;
            }else {
                slideItem.forEach((e)=> {
                    e.classList.remove('active');
                });
                slideItem[idx].classList.add('active');
                idx = 0;
            }
        }, 3000);
    },
    start: function() {
        this.handleEvent();
    }
}

app.start();