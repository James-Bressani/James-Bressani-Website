document.addEventListener('DOMContentLoaded', function() {
  const emailDisplay = document.getElementById('email-display');
  if (emailDisplay) {
    emailDisplay.addEventListener('click', function() {
      const encodedEmail = 'YnJlc3NhbmlqYW1lc0BnbWFpbC5jb20=';
      const decodedEmail = atob(encodedEmail);
      this.innerHTML = `<a href="mailto:${decodedEmail}">${decodedEmail}</a>`;
      this.style.cursor = 'default';
    }, { once: true });
  }
});
