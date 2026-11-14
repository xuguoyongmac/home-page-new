export function initializeHeroCarousels() {
  document.querySelectorAll<HTMLElement>('[data-hero-carousel]').forEach(hero => {
    if (hero.dataset.initialized) return;
    hero.dataset.initialized = 'true';
    const slides = [...hero.querySelectorAll<HTMLElement>('[data-hero-slide]')];
    const selectors = [...hero.querySelectorAll<HTMLButtonElement>('[data-slide-to]')];
    const toggle = hero.querySelector<HTMLButtonElement>('[data-carousel-toggle]')!;
    const workspaceToggle = hero.querySelector<HTMLButtonElement>('[data-hero-motion-toggle]');
    const announcement = hero.querySelector<HTMLElement>('[data-carousel-announcement]')!;
    const slideRegion = hero.querySelector<HTMLElement>('[data-hero-slides]')!;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactViewport = window.matchMedia('(max-width: 700px)');
    let active = 0;
    let userPaused = preference.matches;
    let hovered = false;
    let inView = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let started = 0;
    const duration = () => Number(slides[active].dataset.duration);
    let remaining = duration();

    const stopClock = () => {
      if (timer === undefined) return;
      clearTimeout(timer);
      timer = undefined;
      remaining = Math.max(0, remaining - (performance.now() - started));
    };
    const sync = () => {
      stopClock();
      const suspended = document.hidden || !inView;
      const paused = userPaused || hovered;
      hero.dataset.heroMotion = preference.matches ? 'reduced' : paused ? 'paused' : 'running';
      hero.dataset.motionSuspended = String(suspended);
      hero.dataset.carouselPaused = String(paused || suspended || preference.matches || compactViewport.matches);
      toggle.hidden = preference.matches || compactViewport.matches;
      toggle.setAttribute('aria-pressed', String(userPaused || preference.matches));
      toggle.setAttribute('aria-label', (userPaused || preference.matches ? toggle.dataset.playLabel : toggle.dataset.pauseLabel) || '');
      if (workspaceToggle) {
        workspaceToggle.hidden = preference.matches;
        workspaceToggle.setAttribute('aria-pressed', String(userPaused));
        const label = (userPaused ? workspaceToggle.dataset.playLabel : workspaceToggle.dataset.pauseLabel) || '';
        workspaceToggle.setAttribute('aria-label', label);
        workspaceToggle.title = label;
      }
      slideRegion.setAttribute('aria-live', paused || preference.matches ? 'polite' : 'off');
      hero.dispatchEvent(new Event('hero-motion-change'));
      if (!paused && !suspended && !preference.matches && !compactViewport.matches) {
        started = performance.now();
        timer = setTimeout(() => { timer = undefined; select(active + 1, false); }, Math.max(0, remaining));
      }
    };
    const select = (next: number, manual: boolean) => {
      stopClock();
      active = (next + slides.length) % slides.length;
      if (manual) userPaused = true;
      slides.forEach((slide, index) => {
        const current = index === active;
        slide.dataset.active = String(current);
        slide.dataset.complete = String(current && manual);
        slide.classList.toggle('is-active', current);
        slide.setAttribute('aria-hidden', String(!current));
        slide.inert = !current;
        if (current) selectors[index].setAttribute('aria-current', 'true');
        else selectors[index].removeAttribute('aria-current');
      });
      remaining = duration();
      if (manual) announcement.textContent = slides[active].getAttribute('aria-label') || '';
      sync();
    };
    const togglePlayback = () => {
      userPaused = !userPaused;
      if (!userPaused) {
        slides[active].dataset.complete = 'false';
        if (remaining < 200) remaining = duration();
      }
      sync();
    };
    selectors.forEach((button, index) => {
      button.addEventListener('click', () => select(index, true));
      button.addEventListener('keydown', event => {
        if (event.ctrlKey || event.metaKey || event.altKey) return;
        let next: number | undefined;
        if (event.key === 'ArrowRight') next = (index + 1) % slides.length;
        if (event.key === 'ArrowLeft') next = (index + slides.length - 1) % slides.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = slides.length - 1;
        if (next !== undefined) { event.preventDefault(); select(next, true); selectors[next].focus(); }
      });
    });
    toggle.addEventListener('click', togglePlayback);
    workspaceToggle?.addEventListener('click', togglePlayback);
    hero.querySelector('[data-carousel-prev]')?.addEventListener('click', () => select(active - 1, true));
    hero.querySelector('[data-carousel-next]')?.addEventListener('click', () => select(active + 1, true));
    hero.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; sync(); } });
    hero.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { hovered = false; sync(); } });
    // Keyboard focus stops rotation until the visitor explicitly chooses Play.
    hero.addEventListener('focusin', event => {
      if ((event.target as HTMLElement).matches(':focus-visible')) { userPaused = true; sync(); }
    });
    document.addEventListener('visibilitychange', sync);
    preference.addEventListener('change', () => { if (preference.matches) userPaused = true; sync(); });
    compactViewport.addEventListener('change', sync);
    const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, { threshold: .1 });
    observer.observe(hero);
    window.addEventListener('pagehide', () => { stopClock(); observer.disconnect(); });
    window.addEventListener('pageshow', event => { if (event.persisted) { observer.observe(hero); sync(); } });
    sync();
  });
}
