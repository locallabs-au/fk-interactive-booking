/**
 * Shared yellow store nav + booking stepper.
 * Place immediately after the skip link:
 *   <div id="fk-booking-header-root"
 *        data-fk-step="1"
 *        data-fk-back-href="screen-1-device.html"
 *        data-fk-back-label="Back to device"
 *        data-fk-search-id="storeNavSearch"></div>
 * data-fk-step: 0 = hub (all steps linked, none current); 1–5 = current booking step; 6 = post-booking (all steps done with links).
 * data-fk-back-href: optional; omit to hide back arrow in the yellow bar.
 * data-fk-search-id: optional id for the search input (use on one page only if you need a label for).
 */
(function () {
  const root = document.getElementById('fk-booking-header-root');
  if (!root) return;

  let step = parseInt(String(root.dataset.fkStep !== undefined ? root.dataset.fkStep : '1'), 10);
  if (Number.isNaN(step)) step = 1;
  const backHref = (root.dataset.fkBackHref || '').trim();
  const backLabel = (root.dataset.fkBackLabel || 'Back').trim();
  const searchInputId = (root.dataset.fkSearchId || '').trim();

  const stepClass = (n) => {
    if (step >= 6) return 'fk-step fk-step--done';
    if (n < step) return 'fk-step fk-step--done';
    if (n === step) return 'fk-step fk-step--current';
    return 'fk-step';
  };

  const stepItem = (n, href, label) => {
    const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    if (step === 0) {
      return `<li class="fk-step"><span class="fk-step__num">${n}</span><a href="${esc(href)}" class="hover:underline">${label}</a></li>`;
    }
    if (step >= 6) {
      return `<li class="fk-step fk-step--done"><span class="fk-step__num">${n}</span><a href="${esc(href)}" class="hover:underline">${label}</a></li>`;
    }
    if (n < step) {
      return `<li class="${stepClass(n)}"><span class="fk-step__num">${n}</span><a href="${esc(href)}" class="hover:underline">${label}</a></li>`;
    }
    if (n === step) {
      return `<li class="${stepClass(n)}"><span class="fk-step__num">${n}</span>${label}</li>`;
    }
    return `<li class="${stepClass(n)}"><span class="fk-step__num">${n}</span>${label}</li>`;
  };

  const sep = '<li class="text-fk-grey-300">/</li>';

  const stepper = `
    <nav aria-label="Booking progress" class="border-b border-fk-grey-200 bg-white">
      <ol class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-6 overflow-x-auto fk-scroll text-body-xs">
        ${stepItem(1, 'screen-1-device.html', 'Device')}${sep}
        ${stepItem(2, 'screen-2-symptoms-v2.html', 'Symptoms')}${sep}
        ${stepItem(3, 'screen-3-details.html', 'Details')}${sep}
        ${stepItem(4, 'screen-4-schedule.html', 'Schedule')}${sep}
        ${stepItem(5, 'screen-5-confirmation.html', 'Confirm')}
      </ol>
    </nav>`;

  const backBtn = backHref
    ? `<a href="${backHref.replace(/"/g, '&quot;')}" class="fk-btn-icon fk-focusable shrink-0 -ml-1" aria-label="${backLabel.replace(/"/g, '&quot;')}"><i data-lucide="arrow-left" class="w-5 h-5"></i></a>`
    : '';

  const idAttr = searchInputId ? ` id="${searchInputId.replace(/"/g, '')}"` : '';

  const searchLabel = searchInputId
    ? `<label class="sr-only" for="${searchInputId.replace(/"/g, '')}">Search</label>`
    : '';

  const html = `
  <header class="sticky top-0 z-30 shadow-sm">
    <div class="border-t-[3px] border-fk-black bg-fk-yellow">
      <div class="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3">
        <a href="index.html" class="flex items-center gap-2 sm:gap-2.5 text-fk-black shrink-0 no-underline justify-self-start" aria-label="Fone King home">
          <span class="font-anybody font-black text-[1.65rem] sm:text-3xl leading-none tracking-tight">FK</span>
          <span class="flex flex-col font-anybody font-bold leading-[1.05] text-[9px] sm:text-[10px] uppercase tracking-[0.14em]">
            <span>FONE</span>
            <span>KING</span>
          </span>
        </a>
        <nav class="hidden lg:flex justify-self-center items-center gap-8 xl:gap-10 font-anybody font-bold text-xs uppercase tracking-wide text-fk-black" aria-label="Store navigation (mock)">
          <button type="button" class="inline-flex items-center gap-1 hover:opacity-80 fk-focusable rounded-sm py-1 bg-transparent border-0 text-fk-black">
            Shop <i data-lucide="chevron-down" class="w-3.5 h-3.5" aria-hidden="true"></i>
          </button>
          <a href="https://foneking.com.au/pages/repairs" class="py-1 no-underline text-fk-black hover:opacity-80 fk-focusable rounded-sm" target="_blank" rel="noopener noreferrer">Repairs</a>
          <button type="button" class="inline-flex items-center gap-1 hover:opacity-80 fk-focusable rounded-sm py-1 bg-transparent border-0 text-fk-black">
            Stores <i data-lucide="chevron-down" class="w-3.5 h-3.5" aria-hidden="true"></i>
          </button>
        </nav>
        <div class="flex items-center gap-1.5 sm:gap-2.5 justify-self-end">
          ${backBtn}
          <div class="relative hidden sm:block w-[min(100%,168px)]">
            ${searchLabel}
            <input type="search"${idAttr} placeholder="Search" class="w-full rounded-full border-0 bg-white py-2 pl-4 pr-10 text-sm text-fk-black placeholder:text-fk-grey-500 shadow-sm" autocomplete="off" aria-label="Search" />
            <i data-lucide="search" class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fk-black" aria-hidden="true"></i>
          </div>
          <button type="button" class="fk-focusable p-2 text-fk-black rounded-full hover:bg-black/10 border-0 bg-transparent" aria-label="Account (mock)">
            <i data-lucide="user" class="w-5 h-5" stroke-width="2"></i>
          </button>
          <button type="button" class="fk-focusable p-2 text-fk-black rounded-full hover:bg-black/10 border-0 bg-transparent" aria-label="Cart (mock)">
            <i data-lucide="shopping-cart" class="w-5 h-5" stroke-width="2"></i>
          </button>
        </div>
      </div>
    </div>
    ${stepper}
  </header>`;

  const tpl = document.createElement('template');
  tpl.innerHTML = html.trim();
  const headerEl = tpl.content.firstElementChild;
  root.replaceWith(headerEl);

  if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
})();
