import React from 'react'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-shell-outer">
      <div className="dashboard-container">{children}</div>
    </div>
  )
}
