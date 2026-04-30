/**
 * FK retail locations: single source for store dropdowns across the booking flow.
 * Order matches client list (NSW centres + QLD).
 */
window.FK_STORES = [
  'Bondi Junction',
  'Burwood',
  'Castle Towers',
  'Miranda',
  'Penrith',
  'Alexandria',
  'Tuggerah',
  'Warringah',
  'Westfield Sydney',
  'Uptown',
  'Carindale',
  'Chermside',
];

/**
 * @param {HTMLSelectElement} selectEl
 * @param {{ placeholder?: string, selected?: string, preferFirst?: boolean }} opts
 */
window.fkPopulateStoreSelect = function (selectEl, opts) {
  if (!selectEl || !window.FK_STORES) return;
  opts = opts || {};
  const placeholder = opts.placeholder;
  const preferFirst = !!opts.preferFirst;
  selectEl.innerHTML = '';
  if (placeholder !== undefined) {
    const ph = document.createElement('option');
    ph.value = '';
    ph.textContent = placeholder;
    selectEl.appendChild(ph);
  }
  FK_STORES.forEach(function (name) {
    const o = document.createElement('option');
    o.value = name;
    o.textContent = name;
    selectEl.appendChild(o);
  });
  let want = opts.selected;
  if (!want && preferFirst && FK_STORES.length) want = FK_STORES[0];
  if (want) {
    selectEl.value = want;
    if (selectEl.value !== want) selectEl.selectedIndex = placeholder !== undefined ? 0 : 0;
  }
};
