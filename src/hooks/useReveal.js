import { useEffect, useRef } from 'react'

// Shared rAF loop that checks every registered element's position on every frame.
// Deliberately avoids IntersectionObserver/scroll-event dependence: those can miss
// programmatic or automated scrolls, which would leave real content stuck invisible.
const pending = new Set()
let looping = false

function tick() {
  const vh = window.innerHeight
  for (const item of Array.from(pending)) {
    const rect = item.el.getBoundingClientRect()
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      item.show()
      pending.delete(item)
    }
  }
  if (pending.size > 0) {
    requestAnimationFrame(tick)
  } else {
    looping = false
  }
}

function register(el, show) {
  const item = { el, show }
  pending.add(item)
  if (!looping) {
    looping = true
    requestAnimationFrame(tick)
  }
  return item
}

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let revealed = false
    const show = () => {
      if (revealed) return
      revealed = true
      el.classList.add('is-visible')
    }

    const item = register(el, show)
    return () => {
      pending.delete(item)
    }
  }, [])

  return ref
}
