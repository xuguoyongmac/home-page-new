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
    const taskVideo = hero.querySelector<HTMLVideoElement>('[data-hero-task-video]');
    const taskSlide = taskVideo?.closest<HTMLElement>('[data-hero-slide]');
    let taskVideoPaused = false;
    let active = 0;
    let userPaused = preference.matches;
    let hovered = false;
    let inView = true;
    let gesture: { id: number; x: number; y: number; horizontal: boolean } | undefined;
    let suppressClickUntil = 0;
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
      const paused = userPaused || hovered || Boolean(gesture);
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
      // Choosing a slide stops rotation; its task session continues playing.
      if (taskVideo) {
        const playTask = taskSlide === slides[active] && !suspended && !preference.matches && !taskVideoPaused;
        if (playTask) {
          if (taskVideo.paused) void taskVideo.play().catch(() => {
            taskVideo.dataset.playback = 'blocked';
          });
        } else taskVideo.pause();
      }
      hero.dispatchEvent(new Event('hero-motion-change'));
      if (!paused && !suspended && !preference.matches && !compactViewport.matches) {
        started = performance.now();
        timer = setTimeout(() => { timer = undefined; select(active + 1, false); }, Math.max(0, remaining));
      }
    };
    const select = (next: number, manual: boolean) => {
      stopClock();
      const previous = active;
      hero.dataset.carouselDirection = next < active ? 'previous' : 'next';
      active = (next + slides.length) % slides.length;
      if (taskVideo && previous !== active) {
        taskVideo.pause();
        taskVideo.currentTime = 0;
        taskVideoPaused = false;
      }
      if (manual) userPaused = true;
      slides.forEach((slide, index) => {
        const current = index === active;
        slide.dataset.active = String(current);
        slide.dataset.complete = String(current && manual);
        slide.classList.toggle('is-active', current);
        slide.classList.toggle('is-leaving', !current && index === previous);
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
      taskVideoPaused = userPaused;
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
    const finishGesture = (event: PointerEvent, commit: boolean) => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const { id, x, y, horizontal } = gesture;
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      gesture = undefined;
      delete hero.dataset.carouselDragging;
      if (slideRegion.hasPointerCapture(id)) slideRegion.releasePointerCapture(id);
      if (horizontal) suppressClickUntil = performance.now() + 400;
      const threshold = Math.min(80, Math.max(48, slideRegion.clientWidth * .06));
      if (commit && horizontal && Math.abs(dx) >= threshold && Math.abs(dx) > Math.abs(dy) * 1.25) {
        select(active + (dx < 0 ? 1 : -1), true);
      } else sync();
    };
    slideRegion.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || gesture || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target;
      if (target instanceof Element && target.closest('a,button,input,select,textarea,[contenteditable],[role="tab"],[role="slider"],video[controls]')) return;
      suppressClickUntil = 0;
      gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, horizontal: false };
      slideRegion.setPointerCapture(event.pointerId);
      sync();
    });
    slideRegion.addEventListener('pointermove', event => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const dx = Math.abs(event.clientX - gesture.x);
      const dy = Math.abs(event.clientY - gesture.y);
      if (!gesture.horizontal) {
        if (Math.max(dx, dy) < 10) return;
        if (dy >= dx) { finishGesture(event, false); return; }
        if (dx <= dy * 1.25) return;
        gesture.horizontal = true;
        hero.dataset.carouselDragging = 'true';
      }
      if (event.cancelable) event.preventDefault();
    });
    slideRegion.addEventListener('pointerup', event => finishGesture(event, true));
    slideRegion.addEventListener('pointercancel', event => finishGesture(event, false));
    slideRegion.addEventListener('lostpointercapture', event => finishGesture(event, false));
    slideRegion.addEventListener('dragstart', event => event.preventDefault());
    slideRegion.addEventListener('click', event => {
      if (performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
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
    window.addEventListener('pagehide', () => { stopClock(); taskVideo?.pause(); observer.disconnect(); });
    window.addEventListener('pageshow', event => { if (event.persisted) { observer.observe(hero); sync(); } });
    sync();
  });
}
