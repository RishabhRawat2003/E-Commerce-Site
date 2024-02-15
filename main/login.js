function autoSliderMediumDevices() {
    const slides2 = document.querySelector('.slides2');
    const bulletTracer2 = document.querySelector('.bullet-tracer2');
    const images2 = document.querySelectorAll('.slides2 img');
  
  
    let index1 = 0;
  
  
    function updateSlider2() {
      slides2.style.transform = `translateX(${-index1 * 100}%)`;
    }
  
    function nextSlide2() {
      index1++;
      if (index1 === images2.length) index1 = 0;
      updateSlider2();
    }
  
    setInterval(nextSlide2, 3000);
  
  }
  
  autoSliderMediumDevices()



  const password = document.querySelector('.password')
  const icon = document.querySelector('.eyeIcon')


  icon.addEventListener('click',function(e){
    if(password.type === 'password'){
        password.type = 'text'
        icon.classList.toggle('fa-eye')
    }
    else{
        password.type = 'password'
        icon.classList.toggle('fa-eye')
    }
  })
