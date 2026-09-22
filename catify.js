(function () {
  if (confirm('Wanna see some cats?')) {
    const CAT_URL = 'https://cataas.com/cat';
    const catUrl = () => `${CAT_URL}?_=${Date.now()}-${Math.random().toString(36).slice(2)}`;
    // unique cat url so the browser doesn't reuse a cached image for every element
    
    // 1. Replace every <img> element's image with a cat
    document.querySelectorAll('img').forEach((img) => {
      img.src = catUrl();
      img.srcset = ''; // prevent responsive srcset from overriding src
    });
  
    // 2. Replace every <i> element (often used for icon fonts) with a cat image
    document.querySelectorAll('i').forEach((el) => {
      const cat = document.createElement('img');
      cat.src = catUrl();
      cat.alt = 'cat';
      cat.style.width = el.offsetWidth ? `${el.offsetWidth}px` : '1em';
      cat.style.height = el.offsetHeight ? `${el.offsetHeight}px` : '1em';
      cat.style.display = 'inline-block';
      el.replaceWith(cat);
    });
  }
})();

// cat-tool.js — test payload for the Lead Module "Script" variant
(function () {
  window.catTool = {
    init: function (options) {
      var container = document.querySelector(options.containerSelector);
      if (!container) return;

      var img = document.createElement('img');
      img.src = 'https://cataas.com/cat?width=400&height=300&t=' + Date.now();
      img.alt = 'A random cat';
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '0 auto';

      container.innerHTML = '';
      container.appendChild(img);
    },
  };
})();
