async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Не загрузился ${url}: ${res.status}`);

  el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await inject('#site-header', './includes/header.html');
    await inject('#site-footer', './includes/footer.html');
  } catch (e) {
    console.error(e);
  }
});
