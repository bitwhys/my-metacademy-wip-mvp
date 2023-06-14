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
    <div className="shrink-0 border-b bg-background mb-px">
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
                    <ArrowUturnLeftIcon
                      className="-ml-0.5 h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Reply
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <PencilIcon
                      className="-ml-0.5 h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Note
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 rounded-r-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <UserPlusIcon
                      className="-ml-0.5 h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Assign
                  </button>
                </span>

                <span className="hidden space-x-3 lg:flex">
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <ArchiveBoxIconMini
                      className="-ml-0.5 h-5 w-5 text-muted-foreground"
                      aria-hidden="true"
                    />
                    Archive
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-background px-3 py-2 text-sm font-semibold  ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10 sm:inline-flex"
                  >
                    <FolderArrowDownIcon
                      className="-ml-0.5 h-5 w-5 text-muted-foreground"
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
                  <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="relative -ml-px inline-flex items-center rounded-r-md bg-background px-3 py-2 text-muted-foreground ring-1 ring-inset ring-ring hover:z-10 hover:bg-accent focus:z-10"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-background border-b pb-6 pt-5">
      <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-lg font-medium">
            {message.subject}
          </h1>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {message.sender}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
          <Badge variant="outline">{message.status}</Badge>
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
    <div className="flex h-full w-full flex-col">
      <BuilderHeader />
      <div className="bg-canvas relative h-full w-full grow">
        <Builder />
      </div>
      {/*<Prompt/>*/}
    </div>
  )
}

export default FlowBuilderPage
