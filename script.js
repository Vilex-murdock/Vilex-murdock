const toggleBtn = document.getElementById('lang-toggle');
let arabic = false;

toggleBtn.addEventListener('click', () => {
  arabic = !arabic;
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  toggleBtn.textContent = arabic ? 'English' : 'عربي';

  document.querySelectorAll('.product').forEach(product => {
    const title = product.querySelector('.product-title');
    title.textContent = arabic ? product.dataset.ar : product.dataset.en;
  });

  const disclaimer = document.getElementById('disclaimer');
  disclaimer.textContent = arabic 
    ? "بعض الروابط هي روابط تابعة. قد نحصل على عمولة دون أي تكلفة إضافية عليك." 
    : "Some links are affiliate links. We may earn a commission at no extra cost to you.";
});
