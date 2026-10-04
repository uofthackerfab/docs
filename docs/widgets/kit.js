// Shared helpers for the docs widgets: SVG drawing and iframe sizing.
const NS = "http://www.w3.org/2000/svg"

function el(name, attrs, parent) {
  const e = document.createElementNS(NS, name)
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v)
  if (parent) parent.appendChild(e)
  return e
}

function label(parent, x, y, s, attrs = {}) {
  const t = el("text", { x, y, "font-size": 10, fill: "#7f8c8d", ...attrs }, parent)
  t.textContent = s
  return t
}

function arrowMarker(svg, id, color) {
  const d = el("defs", {}, svg)
  const m = el("marker", {
    id, viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 9, markerHeight: 9,
    markerUnits: "userSpaceOnUse", orient: "auto-start-reverse",
  }, d)
  el("path", { d: "M0,0 L10,5 L0,10 z", fill: color }, m)
}

// Mark the matching preset button as pressed.
function pressPresets(selector, isActive) {
  document.querySelectorAll(selector).forEach((b) => b.setAttribute("aria-pressed", String(isActive(b))))
}

// Log-scale slider helpers: the slider runs 0..1000, the value runs lo..hi.
const logToValue = (pos, lo, hi) => lo * Math.pow(hi / lo, pos / 1000)
const valueToLog = (v, lo, hi) => (1000 * Math.log(v / lo)) / Math.log(hi / lo)

// Tell the docs page how tall this widget is, so its iframe fits exactly.
function reportHeight() {
  const send = () =>
    parent.postMessage({ type: "hf-widget-height", height: Math.ceil(document.body.getBoundingClientRect().height) }, "*")
  new ResizeObserver(send).observe(document.body)
  send()
}
