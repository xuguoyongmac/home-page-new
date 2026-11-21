import { resolveContactConfirmation } from '../../../shared/contact-navigation.mjs';

export function initContactConfirmation(returnTarget: { path: string; back: boolean }) {
  const dialog = document.querySelector<HTMLDialogElement>('#contact-confirmation')!;
  const confirm = dialog.querySelector<HTMLButtonElement>('#contact-confirm')!;
  const destination = resolveContactConfirmation(location.href, returnTarget, history.length);
  confirm.addEventListener('click', () => {
    dialog.close();
    if (destination.back) history.back();
    else location.replace(destination.path);
  });
  dialog.addEventListener('close', () => document.querySelector<HTMLButtonElement>('#enquiry-form [type="submit"]')?.focus({ preventScroll: true }));
  return { show() { if (!dialog.open) dialog.showModal(); } };
}
