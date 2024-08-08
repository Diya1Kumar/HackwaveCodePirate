

// const svg = document.querySelectorAll('svg.svvg')
// const path = svg.querySelector('path')

// const scroll = () => {
//     const distance = window.scrollY
//     const totalDistance = svg.clientHeight - window.innerHeight

//     const percentage = distance / totalDistance
    
//     const pathLength = path.getTotalLength()
//     path.style.strokeDasharray = `${pathLength}`
//     path.style.strokeDashoffset = `${pathLength * (1- percentage)}`
//  }

// scroll()
// window.addEventListener('scroll', scroll)

const svgs = document.querySelectorAll('svg.svvg');

const applyScrollFunction = (svg) => {
    const path = svg.querySelector('path');

    const scroll = () => {
        const distance = window.scrollY;
        const totalDistance = svg.clientHeight - window.innerHeight;
        const percentage = distance / totalDistance;

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener('scroll', scroll);
};

// Apply scroll function to each SVG
svgs.forEach(svg => {
    applyScrollFunction(svg);
});




document.addEventListener('DOMContentLoaded', function() {
    
    var navLinks = document.querySelectorAll('.nav-link ul li a');

    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = link.getAttribute('#section1').substring(1);
            var targetId2 = link.getAttribute('#section9').substring(1);
            var targetSection = document.getElementById(targetId);
            var targetSection1 = document.getElementById(targetId2);

            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            if (targetSection1) {
                targetSection.scrollIntoView({behavior: 'smooth'})
            }
        });
    });
});


var icon = document.querySelector('.mennu-btn i');
var menu = document.querySelector('.nav-link ul');


icon.addEventListener('click', function() {
  menu.style.left = (menu.style.left === '' || menu.style.left === '-600px') ? '0' : '-600px';
});
