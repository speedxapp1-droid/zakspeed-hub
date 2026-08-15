/**
 * Analytics bootstrap.
 *
 * Add a provider here later (Plausible, GA4, etc.) without changing layout
 * or page components. Keep tracking calls behind these helpers.
 */
export function initAnalytics() {
  if (import.meta.env.DEV) return

  // Example:
  // window.plausible =
  //   window.plausible ||
  //   function plausible() {
  //     ;(window.plausible.q = window.plausible.q || []).push(arguments)
  //   }
}

export function trackEvent(_name, _props) {
  // no-op until a provider is connected
}
