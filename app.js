const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const modalClose = $('.modal-close');
const buyBtn = $$('.booking-buy-btn');
const modalContainer = $('.modal-container');
const slideImg = $('.slider-img');

const app = {
    silder: [
        {
            imgSrc: "https://www.w3schools.com/w3images/la.jpg"
        },
        {
            imgSrc: "https://www.w3schools.com/w3images/ny.jpg"
        },
        {
            imgSrc: "https://www.w3schools.com/w3images/chicago.jpg"
        }
    ],
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
            slideImg.src = this.silder[idx].imgSrc;
            idx++;
            if(idx == this.silder.length) {
                idx = 0;
            }
        }, 4000)
    },
    start: function() {
        this.handleEvent();
    }
}

app.start();