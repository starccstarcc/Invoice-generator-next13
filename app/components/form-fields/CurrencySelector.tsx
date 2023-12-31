"use client";

import React from "react";

// Shadcn components
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Hooks
import useCurrencies from "@/app/hooks/useCurrencies";

// Types
import { ControlType, NameType } from "@/app/types/types";

type CurrencySelectorProps = {
    control: ControlType;
    name: NameType;
    label?: string;
    placeholder?: string;
};

const CurrencySelector = ({
    control,
    name,
    label,
    placeholder,
}: CurrencySelectorProps) => {
    const { currencies, currenciesLoading } = useCurrencies();

    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}:</FormLabel>
                        <Select
                            {...field}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent
                                style={{
                                    overflowY: "hidden",
                                    height: "200px",
                                }}
                            >
                                {!currenciesLoading &&
                                    currencies.map(
                                        (currency: any, idx: number) => (
                                            <SelectItem
                                                key={idx}
                                                value={currency.code}
                                            >
                                                {currency.name}{" "}
                                                {`(${currency.code})`}
                                            </SelectItem>
                                        )
                                    )}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CurrencySelector;
