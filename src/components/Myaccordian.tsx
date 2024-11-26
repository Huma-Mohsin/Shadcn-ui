import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full bg-lime-400 mt-20 text-5xl text-red-700 font-semibold">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg text-red-700 font-semibold">Are you learning Shadcn/UI?</AccordionTrigger>
          <AccordionContent className="text-lg text-blue-700 font-semibold">
            Yes. I am learning Shadcn/UI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg text-red-700 font-semibold">Is it Easy?</AccordionTrigger>
          <AccordionContent  className="text-lg text-blue-700 font-semibold">
          Yes. It helps very well to build websites.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg text-red-700 font-semibold">Is it helpful?</AccordionTrigger>
          <AccordionContent  className="text-lg text-blue-700 font-semibold">
            Yes. It helps to build very quickly websites.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  