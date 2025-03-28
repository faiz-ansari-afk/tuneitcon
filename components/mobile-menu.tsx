"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void
}

export function MobileMenu({ scrollToSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="h-10 w-32 mb-8">
          <Image src="/logo.png" alt="Tune IT Con Logo" width={128} height={40} className="h-full w-auto" />
        </div>
        <nav className="flex flex-col gap-6 mt-10">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("services")
            }}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("about")
            }}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            About Us
          </a>
          <a
            href="#clients"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("clients")
            }}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Our Clients
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavigation("contact")
            }}
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>
          <Button
            className="mt-4 bg-neutral-900 hover:bg-neutral-800 text-white"
            onClick={() => handleNavigation("contact")}
          >
            Get in Touch
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

