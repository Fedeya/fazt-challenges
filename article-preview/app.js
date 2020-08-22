const shareButton = document.getElementById('share');
const shareButtonsGroup = document.getElementById('share-buttons');

shareButton.addEventListener('click', () => {
  shareButtonsGroup.classList.toggle('active');
});
