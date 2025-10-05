document.addEventListener('DOMContentLoaded', function() {
  const emailDisplay = document.getElementById('email-display');
  if (emailDisplay) {
    emailDisplay.addEventListener('click', function() {
      const encodedEmail = 'amFtZXNicuZXNzYW5pQGdtYWlsLmNvbQ==';
      const decodedEmail = atob(encodedEmail);
      this.innerHTML = `<a href="mailto:${decodedEmail}">${decodedEmail}</a>`;
      this.style.cursor = 'default';
    }, { once: true });
  }
});
