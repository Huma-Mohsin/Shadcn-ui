import { AccordionDemo } from "@/components/Myaccordian";
import { AlertDialogDemo } from "@/components/Myalertdialogue";
import { CardWithForm } from "@/components/Mycard";
import { ComboboxDemo } from "@/components/Mycombobox";
import { CommandDemo } from "@/components/Mycommandbox";
import CardDemo from "@/components/Mycustomizecard";
import CommandDemoCustomized from "@/components/Mycustomizecommandbox";
import { AlertDialogDemo1 } from "@/components/Mycustomizedialogueboxtosearchbox";
import { SheetDemo1 } from "@/components/MyCustomizesheetmenu";
import { InputWithButton } from "@/components/Myinput";
import { PaginationDemo } from "@/components/Mypagination";
import { SheetDemo } from "@/components/Mysheet";
import { TableDemo } from "@/components/Mytable";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-10 my-20 mx-20 ">
      <h1 className="text-green-600 scroll-m-20 border-b pb-20 text-5xl font-semibold tracking-tight first:mt-0 ">
        Exploring Shadcn/UI
      </h1>

      <InputWithButton />
      <AccordionDemo />
      <AlertDialogDemo />
      <AlertDialogDemo1 />
      <CardDemo/>
      <CardWithForm/>
      <ComboboxDemo/>
      <CommandDemo/>
      <CommandDemoCustomized/>
      <SheetDemo/>
      <div className="block lg:hidden pl-5"><SheetDemo1/></div>
      <TableDemo/>
      <PaginationDemo/>
     
      
    </div>
  );
};

export default Home;
