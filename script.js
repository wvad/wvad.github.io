(() => {
  const e = document.getElementById('end'), handler = () => e.style.height = e.clientWidth + 'px';
  addEventListener('load', handler);
  addEventListener('resize', handler);
  const pages = [...document.getElementsByClassName('page')].map(e => e.style);
  const openPage = window.openPage = function(num) {
    pages[num].display;
    pages.forEach(page => page.display = "none");
    const url = new URL(location.href);
    url.searchParams.set('page', num);
    history.replaceState(history.state, '', url.href);
    pages[num].display = "";
    handler();
  };
  const search = new URLSearchParams(location.search);
  if (search.has('page')) openPage(search.get('page'));
  document.addEventListener('click', () => {});
})();
