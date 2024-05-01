'use client'
import CreationBottomBar from '@/app/Components/CreationBottomBar'
import { createLocation } from '@/app/actions'
import { useCountries } from '@/app/lib/getCountries'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import dynamic from 'next/dynamic'
import React, { lazy, useState } from 'react'

export default function AddressRoute({params}: {params:{id: string}}) {
    const {getAllCountries} = useCountries()
    const [locationValue, setLocationValue] = useState("")
    const LazyMap = dynamic(()=> import("@/app/Components/Map"),{
        ssr: false,
        loading: () => <Skeleton className='w-full h-[50vh]' />
    })
  return (
    <>
    <div className='w-3/5 mx-auto'>
        <h2 className='font-semibold text-3xl tracking-tight transition-colors mb-10'>Where is your home located</h2>
    </div>
    <form action={createLocation}>
    <input type="hidden" name='homeId' value={params.id} />
    <input type="hidden" name='countryValue' value={locationValue} />

        <div className='w-3/5 mx-auto mb-36'>
            <div className='mb-5'>
            <Select required onValueChange={(value)=> setLocationValue(value)}>
                <SelectTrigger className='w-full'>
        <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Countries</SelectLabel>
                        {getAllCountries().map((item)=> (
                            <SelectItem key={item.value} value={item.value}>
                                {item.flag} {item.label}/{item.region}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            </div>
            <LazyMap locationValue={locationValue} />
        </div>
        <CreationBottomBar />
    </form>
    
        </>
  )
}
