// TypeScript code to handle the carousel logic
window.onload = function () {
    const images: object[] = [
        {name:"Stefan Hoenig",img:'./assets/1.jpg',} ,
        {name:"Daniel Jebaraj",img:'./assets/2.jpg',} ,
        {name:"Clay Burch",img:'./assets/3.jpg',} ,
        {name:"Davis Jebaraj",img:'./assets/4.jpg',} ,
        {name:"Srilatha Rajamani",img:'./assets/5.jpg',} ,
        {name:"Stephen Jebaraj",img:'./assets/6.png',} 
    ];
    
    let currentIndex: number = 0;

    const carouselImage = document.getElementById('carouselImage') as HTMLImageElement;
    const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    const nameTag = document.getElementById("person-name") as HTMLElement;

    // Function to show the current image
    function updateCarousel() {
        carouselImage.src = images[currentIndex]['img'];
        nameTag.innerHTML = images[currentIndex]['name'];
    }

    // Function to go to the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    // Function to go to the previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Add event listeners for the buttons
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Initialize the carousel with the first image
    updateCarousel();
};
