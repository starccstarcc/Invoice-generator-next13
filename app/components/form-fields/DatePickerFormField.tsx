"use client";

import React, { useState } from "react";

// Shadcn components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// Utils
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Icons
import { CalendarIcon } from "lucide-react";

// Types
import { ControlType, NameType } from "@/app/types/types";

type DatePickerFormFieldProps = {
    control: ControlType;
    name: NameType;
    label?: string;
};

const DatePickerFormField = ({
    control,
    name,
    label,
}: DatePickerFormFieldProps) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <div className="flex justify-between gap-5 items-center text-sm">
                            <div>
                                <Label>{label}:</Label>
                            </div>
                            <div>
                                <Popover
                                    open={isPopoverOpen}
                                    onOpenChange={setIsPopoverOpen}
                                >
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[13.5rem]",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? (
                                                    format(
                                                        new Date(field.value),
                                                        "PPP"
                                                    )
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            captionLayout="dropdown-buttons"
                                            selected={new Date(field.value)}
                                            onSelect={(e) => {
                                                field.onChange(e);
                                                setIsPopoverOpen(false);
                                            }}
                                            disabled={(date) =>
                                                date < new Date("1900-01-01")
                                            }
                                            fromYear={1960}
                                            toYear={
                                                new Date().getFullYear() + 30
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                )}
            />
        </>
    );
};

export default DatePickerFormField;
