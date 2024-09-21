document.addEventListener("DOMContentLoaded", function() {
    // すべてのimgタグにloading="lazy"を追加
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });

    // すべてのvideoタグにloading="lazy"を追加
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      if (!video.hasAttribute('loading')) {
        video.setAttribute('loading', 'lazy');
      }
    });
  });
