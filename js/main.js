var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webm', // URL or relative path to webm video
  poster: 'video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
  overlayColor: '#000', // The overlay color as a HEX
  overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
});
var rellax = new Rellax('.rocket');
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
AOS.init();