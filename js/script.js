document.addEventListener('DOMContentLoaded', function () {
    
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const counterValue = document.getElementById('counter-value');
    const totalSumElement = document.getElementById('total-sum');

    
    let currentValue = 1;
    let totalSum = 0;
    function formatNumberWithSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    
    function updateCounter() {
        counterValue.textContent = currentValue;
        totalSum = currentValue * 23000;
        totalSumElement.textContent = formatNumberWithSpaces(totalSum);
    }

    
    decrementButton.addEventListener('click', function () {
        if (currentValue > 1) {
            currentValue--;
            updateCounter();
        }
    });

    
    incrementButton.addEventListener('click', function () {
        if (currentValue < 5) {
            currentValue++;
            updateCounter();
        }
    });

    
    updateCounter();
});


function changeImage(imagePath, thumbnail) {
    document.getElementById('mainImage').style.backgroundImage = `url('${imagePath}')`;

     var thumbnails = document.getElementsByClassName('thumbnails__item');
     for (var i = 0; i < thumbnails.length; i++) {
         thumbnails[i].classList.remove('active');
     }
     thumbnail.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.main__toggle-button');
    const filterBlock = document.querySelector('.main__filter.filter.col-xl-3');

    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); 
        filterBlock.classList.toggle('show');
    });

     
     const closeIcon = document.querySelector('.filter__toggle-icon');
     closeIcon.addEventListener('click', function (event) {
         event.stopPropagation();
         filterBlock.classList.remove('show');
     });
 

    
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!filterBlock.contains(target)) {
            filterBlock.classList.remove('show');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const modalMenu = document.getElementById('modalMenu');
    const body = document.body;
    const buttonText = document.querySelector('.header__button-text');
    hamburger.addEventListener('click', function () {
      modalMenu.style.display = modalMenu.style.display === 'block' ? 'none' : 'block';
      body.classList.toggle('modal-open');

    buttonText.style.display = buttonText.style.display === 'none' ? 'block' : 'none';
    });
  });


  



  
  