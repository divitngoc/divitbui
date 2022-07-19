import Particles from 'particlesjs';

var ready = (callback) => {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};
ready(() => {
	window.addEventListener('resize', headerContainerResize);
});

function headerContainerResize() {
	document.querySelector('.header').style.height = window.innerHeight + 'px';
}

window.onload = function() {
	var maxParticles = Math.floor((screen.width / 10)+ 10);
	console.log(maxParticles);
	
	var minDistance = Math.floor((screen.width / 25) + 50);
	console.log(minDistance);

	
	Particles.init({
		// normal options
		selector: '.background',
		maxParticles: maxParticles,
		sizeVariations: 3,
		connectParticles: true,
		speed: 0.4,
		color: '#88c8ff',
		minDistance: minDistance,

		// options for breakpoints
		responsive: [
		{
			breakpoint: 300,
			options: {
				maxParticles: 20,
				color: '#48F2E3',
				connectParticles: false
			}
		}, 
		{
			breakpoint: 150,
			options: {
				maxParticles: 20,
				connectParticles: true
			}
		}, 
		{
			breakpoint: 200,
			options: {
				maxParticles: 0
			}
		}]
	});
};

