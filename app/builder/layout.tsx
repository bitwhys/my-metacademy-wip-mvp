import React, { ReactNode } from "react"

import { SidePanel, Sidebar } from "@/components/layout"

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex">
      {/* Static sidebar for desktop */}
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Mobile top navigation */}
        {/*<MobileTopNavigation />*/}

        <main className="flex flex-1 overflow-hidden">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="relative flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Account
            </h1>
            {/* Your content */}
            <div className="h-full w-full">{children}</div>
          </section>

          {/* Secondary column (hidden on smaller screens) */}
          <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
            <SidePanel />
          </aside>
        </main>
      </div>
    </div>
  )
}

export default Layout
