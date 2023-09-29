"use client";

import React from "react";

// RHF
import { Control } from "react-hook-form";

// Shadcn
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PaymentInformationProps = {
    control: Control<any>;
    name: string;
    label: string;
};

const PaymentInformation = ({
    control,
    name,
    label,
}: PaymentInformationProps) => {
    return (
        <>
            <Label htmlFor="billFrom" className="text-xl font-semibold">
                {label}:
            </Label>
            <div className="flex flex-wrap gap-10 mt-5">
                <FormField
                    control={control}
                    name="details.paymentInformation.bankName"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Bank name</Label>
                            <div className="flex justify-between gap-5 items-center text-sm">
                                <div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Bank name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="details.paymentInformation.accountName"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Account name</Label>
                            <div className="flex justify-between gap-5 items-center text-sm">
                                <div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Account name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="details.paymentInformation.accountNumber"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Account number</Label>
                            <div className="flex justify-between gap-5 items-center text-sm">
                                <div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Account number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />
            </div>
        </>
    );
};

export default PaymentInformation;
