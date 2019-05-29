var currentPageNum = 1;
var lastPage = 25;

console.log('loaded')

function nextPrevBookPage (e) {
    console.log('click')
    if  (e.currentTarget.classList.contains('prev')) {
        currentPageNum -= 1;
        document.querySelector('.next').classList.remove('hide');
        if (currentPageNum === 1) {
            e.currentTarget.classList.add('hide');
        }
    } else { //Next button
        currentPageNum += 1;
        document.querySelector('.prev').classList.remove('hide');
        if (lastPage === currentPageNum) {
            e.currentTarget.classList.add('hide');
        }
    }

    refreshBookPage();
}

function refreshBookPage () {
    document.querySelector('.book-page-img').setAttribute('src',  './images/page-' + currentPageNum + '.gif'  ) ;

}

function addEvents () {
    var addEvent = function (btn) {
        console.log('event added to', btn)
        btn.addEventListener('click', nextPrevBookPage );
    };


    addEvent(document.querySelector('.prev'));
    addEvent(document.querySelector('.next'));
}

window.addEventListener('load', addEvents );