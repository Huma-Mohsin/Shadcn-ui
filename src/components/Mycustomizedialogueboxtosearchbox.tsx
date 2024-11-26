import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { InputDemo } from "./MYinputfield"
  
  
  export function AlertDialogDemo1() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="m-10 p-10 text-4xl text-center text-red-900 bg-amber-200 hover:bg-amber-300  ">To Search</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Search Bar</AlertDialogTitle>
            <AlertDialogDescription>
                <InputDemo/>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Search</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  