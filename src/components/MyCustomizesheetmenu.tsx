import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function SheetDemo1() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="mt-20"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <ul>
   <li><Link href="/Home">Home</Link></li>
   <li><Link href="/about">About</Link></li>
   <li><Link href="/contact">Contact Us</Link></li>
   </ul>
      </SheetContent>
    </Sheet>
  )
}
