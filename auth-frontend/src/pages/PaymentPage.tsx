export default function PaymentPage() {
  return (
    <main className="inner-page section-shell">
      <section className="payment-page" aria-labelledby="payment-page-title">
        <div className="payment-page-header">
          <p className="section-kicker"><span /> Secure checkout</p>
          <h1 id="payment-page-title">Payment</h1>
        </div>

        <div className="payment-page-grid">
          <div className="payment-panel payment-panel-card">
            <div className="payment-status">
              <span className="payment-status-dot" aria-hidden="true" />
              Payment flow ready for integration
            </div>

            <h2>Prepare the checkout experience for UPI, GPay, and card-based payments.</h2>
            <p>
              This screen is intentionally lightweight while the payment backend is being connected.
              It keeps the transaction flow clear, organized, and ready for a production checkout handoff.
            </p>

            <ul className="payment-checklist">
              <li>Clear payment method selection</li>
              <li>Protected confirmation state</li>
              <li>Order summary and total visibility</li>
            </ul>
          </div>

          <aside className="payment-panel payment-panel-summary" aria-label="Checkout summary">
            <p className="payment-summary-label">Current status</p>

            <div className="payment-summary-item">
              <span>Checkout mode</span>
              <strong>Awaiting backend wiring</strong>
            </div>
            <div className="payment-summary-item">
              <span>Supported methods</span>
              <strong>UPI / GPay / cards</strong>
            </div>
            <div className="payment-summary-item">
              <span>Security posture</span>
              <strong>Tokenized checkout</strong>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
