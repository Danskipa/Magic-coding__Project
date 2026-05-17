const switcher = document.querySelector('.switcher');
const logoPickture = document.querySelector('.logo__img');
const helloingSpan = document.querySelector('.helloing__text--part');

const handleSwitcher = event => {
  if (event.target.checked) {
    document.body.classList.add('dark');
    logoPickture.classList.add('logo__img--dark');
  } else {
    document.body.classList.remove('dark');
    logoPickture.classList.remove('logo__img--dark');
  }
};

switcher.addEventListener('change', handleSwitcher);
