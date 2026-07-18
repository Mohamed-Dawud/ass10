var darkMode = document.getElementById('theme-toggle-button');

darkMode.addEventListener('click', function(){
    document.getElementsByTagName('html')[0].classList.toggle('dark');
});


var settingsToggle=document.getElementById('settings-toggle')
var settingsSidebar=document.getElementById('settings-sidebar')
var closeSettings=document.getElementById('close-settings')

  
 
      function open(){
        settingsSidebar.classList.remove('translate-x-full')
    settingsSidebar.classList.add('translate-x-0')
    settingsSidebar.setAttribute('aria-hidden','false')
    settingsToggle.setAttribute('aria-expanded','true')
    settingsToggle.style.transform = 'translateY(-50%) translateX(-320px)';
    
      }

      function close() {
    settingsSidebar.classList.remove('translate-x-0');
    settingsSidebar.classList.add('translate-x-full');
    settingsToggle.setAttribute('aria-expanded', 'false');
    settingsSidebar.setAttribute('aria-hidden', 'true');
     settingsToggle.style.transform = 'translateY(-50%) ';
}
   
      settingsToggle.addEventListener("click",function(){
       open()
      })
      closeSettings.addEventListener('click',function(){
        close()

      })
var option=document.querySelectorAll('.font-option');
for(var i=0;i<option.length;i++){
    option[i].addEventListener('click',function(e){
      document.body.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo');
      var selectFont=e.target.getAttribute('data-font')
      document.body.classList.add('font-' +  selectFont);
    
      
    })
}


var reset=document.getElementById('reset-settings')
reset.addEventListener('click',function(){
  document.body.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo');
  document.body.classList.add('font-tajawal');
  close()

})



var sections = document.querySelectorAll('#hero-section, #about, #portfolio, #experience, #testimonials, #contact');
var navLinks = document.querySelectorAll('a[role="menuitem"]');


window.onscroll = function() {
    
    var top = document.documentElement.scrollTop 

    
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];

        if (section) {
            var offset = section.offsetTop - 150; 
            var height = section.offsetHeight;   
            var id = section.getAttribute('id');  

            if (top >= offset && top < offset + height) {
                
                for (var j = 0; j < navLinks.length; j++) {
                    navLinks[j].classList.remove('active');
                }

                
                for (var k = 0; k < navLinks.length; k++) {
                    if (navLinks[k].getAttribute('href') === '#' + id) {
                        navLinks[k].classList.add('active');
                    }
                }
            }
        }
    }
};


var filterButtons = document.querySelectorAll('.portfolio-filter');
var portfolioItems = document.querySelectorAll('.portfolio-item');

for (var i = 0; i < filterButtons.length; i++) {
    
    filterButtons[i].addEventListener('click', function(e) {
        e.preventDefault(); 
        for (var j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white', 'font-bold');
            filterButtons[j].classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
            filterButtons[j].setAttribute('aria-pressed', 'false');
        }
        e.currentTarget.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
       e.currentTarget.classList.add('active', 'bg-linear-to-r', 'from-primary', 'to-secondary', 'text-white', 'font-bold');
        e.currentTarget.setAttribute('aria-pressed', 'true');

       
        var currentFilter = e.currentTarget.getAttribute('data-filter');

      
        for (var k = 0; k < portfolioItems.length; k++) {
            var item = portfolioItems[k];
            
            
            var itemCategory = item.getAttribute('data-category');

          
            if (currentFilter === 'all') {
                item.classList.remove('hidden');
                item.classList.add('block');
            } 
         
            else if (itemCategory === currentFilter) {
                item.classList.remove('hidden');
                item.classList.add('block');
            } 
        
            else {
                item.classList.remove('block');
                item.classList.add('hidden');
            }
        }
    });
}
var prevBtn = document.getElementById('prev-testimonial');
var nextBtn = document.getElementById('next-testimonial');
var cards = document.getElementsByClassName('testimonial-card');

var currentIndex = 0; 

function updateCarousel() {
   
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }

    cards[currentIndex].style.display = 'block';
    cards[(currentIndex + 1) % cards.length].style.display = 'block';
    cards[(currentIndex + 2) % cards.length].style.display = 'block';
}


updateCarousel();


nextBtn.addEventListener('click', function() {
  
    if (currentIndex < cards.length - 1) {
        currentIndex = currentIndex + 1;
    } else {
       
        currentIndex = 0;
    }
    updateCarousel();
});


prevBtn.addEventListener('click', function() {
   
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    } else {
      
        currentIndex = cards.length - 1;
    }
    updateCarousel();
});
 var btnTop=document.getElementById('scroll-to-top')
 window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop >700){
         btnTop.classList.remove('opacity-0','invisible')
         btnTop.classList.add('opacity-100','visible')
    }
    else{
         btnTop.classList.add('opacity-0','invisible')
         btnTop.classList.remove('opacity-100','visible')
    }

 })
 btnTop.addEventListener('click',function(){
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    });
 })