import { useEffect } from 'react'

export function Checkout() {
  useEffect(() => {
    document.title = 'Coffe Delivery | Checkout'
  }, [])

  return <h1>Checkout</h1>
}
