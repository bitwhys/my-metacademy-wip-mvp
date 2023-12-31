import React, { Fragment } from "react"
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid"
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { Badge } from "@/components/ui/badge"
import Builder from "@/components/builder"
import ComponentDrawer from "@/components/component-drawer"
import { Icons } from "@/components/icons"
import { SidePanel } from "@/components/layout"
import NotesDrawer from "@/components/notes-drawer"

const pages = [
  { name: "Concepts", href: "#", current: false },
  { name: "Vector Spaces", href: "#", current: true },
]
const message = {
  subject: "Full Stack Developer",
  sender:
    "Step by step guide to becoming a modern full stack developer in 2023",
  status: "Private",
  items: [
    {
      id: 1,
      author: "Joe Armstrong",
      date: "Yesterday at 7:24am",
      datetime: "2021-01-28T19:24",
      body: "<p>Thanks so much! Can't wait to try it out.</p>",
    },
    {
      id: 2,
      author: "Monica White",
      date: "Wednesday at 4:35pm",
      datetime: "2021-01-27T16:35",
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
    },
    {
      id: 3,
      author: "Joe Armstrong",
      date: "Wednesday at 4:09pm",
      datetime: "2021-01-27T16:09",
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
    },
  ],
}

const BuilderHeader = () => (
  <>
    <div className="-mb-px shrink-0 border-b bg-background">
      <div className="flex h-16 flex-col justify-center">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-3">
            {/* Left buttons */}
            <div>
              <div className="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                <span className="inline-flex sm:shadow-sm">
                  <button
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10"
                  >
                    <Icons.logo
                      className="-ml-0.5 h-6 w-6 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Explore
                  </button>
                  <NotesDrawer />
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 rounded-r-md bg-background px-3 py-2 text-sm font-medium  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <Icons.link
                      className="-ml-0.5 h-6 w-6 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Share
                  </button>
                </span>

                <span className="hidden space-x-3 lg:flex">
                  <ComponentDrawer />
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <Icons.folders
                      className="-ml-0.5 h-6 w-6 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Move
                  </button>
                </span>
              </div>
            </div>

            {/* Right buttons */}
            <nav aria-label="Pagination">
              <span className="isolate inline-flex rounded-md shadow-sm">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md bg-background px-3 py-2 text-muted-foreground ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10"
                >
                  <span className="sr-only">Next</span>
                  <Icons.counterClockwise
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  className="relative -ml-px inline-flex items-center rounded-r-md bg-background px-3 py-2 text-muted-foreground ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10"
                >
                  <span className="sr-only">Previous</span>
                  <Icons.clockwise className="h-6 w-6" aria-hidden="true" />
                </a>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-px border-b bg-background pb-6 pt-5">
      <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-lg font-medium">
            <input
              type="text"
              value={message.subject}
              className="foucs:outline-none border-0 bg-transparent p-0 outline-none focus:ring-0"
            ></input>
          </h1>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {message.sender}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
          <Badge variant="outline" className="text-muted-foreground">
            {message.status}
          </Badge>
          {/*<span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">*/}
          {/*  */}
          {/*</span>*/}
        </div>
      </div>
    </div>
  </>
)

const FlowBuilderPage = () => {
  return (
    <>
      <section
        aria-labelledby="primary-heading"
        className="relative flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
      >
        <h1 id="primary-heading" className="sr-only">
          Account
        </h1>
        {/* React Flow (Builder)  */}
        <div className="h-full w-full">
          <div className="flex h-full w-full flex-col">
            <BuilderHeader />
            <div className="relative h-full w-full grow bg-canvas">
              <Builder />
            </div>
            {/*<Prompt/>*/}
          </div>
        </div>
      </section>

      {/* Script Editor (hidden on smaller screens) */}
      <aside className="hidden lg:order-first lg:block lg:shrink-0">
        <SidePanel />
      </aside>
    </>
  )
}

export default FlowBuilderPage
