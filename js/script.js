(function () {
  function setupModal(linkSelector, modalId, closeId) {
    var link = document.querySelector(linkSelector);
    var modal = document.getElementById(modalId);
    var closeBtn = closeId ? document.getElementById(closeId) : null;

    if (!link || !modal) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('open');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
      });
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
      }
    });
  }

  setupModal('.link-item.menu', 'menuModal', 'menuModalClose');
  setupModal('.link-item.kosher', 'kosherModal', 'kosherModalClose');
  setupModal('.link-item.whatsapp', 'whatsappModal', 'whatsappModalClose');
  setupModal('.link-item.site', 'siteModal', 'siteModalClose');
  setupModal('.link-item.delivery', 'deliveryModal', 'deliveryModalClose');
  setupModal('.link-item.tenbis', 'tenbisModal', 'tenbisModalClose');
})();
