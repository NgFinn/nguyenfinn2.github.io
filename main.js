function playVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'flex';
    iframe.src = "https://www.youtube.com/embed/abPmZCZZrFA?si=N1K_35GTbKDqbo0V"; // Thêm autoplay
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    iframe.src = ''; 
}
