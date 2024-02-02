import Link from 'next/link'
import React from 'react'
import { FaFile, FaHospital, FaPumpMedical, FaShieldVirus, FaStethoscope, FaUserNurse } from 'react-icons/fa'
import OneOffer from './OneOffer'
import OfferLand from './OfferLand'

export default function Offers({props: {head}}: {props: {head:string}}) {
    return (
        <>
            <div className='mx-5 mt-5 extralarge:mx-28 small:mx-1.5'>
                <p className="text-hover-color text-sm smallerThanLarge:text-center uppercase">{head}</p>
                <div className='flex items-center gap-6 justify-between mt-7 mb-20 smallerThanLarge:flex-col smallerThanLarge:text-center'>
                    <h1 className="text-4xl font-bold xxxlarge:basis-4/12">A pharmacy with world-class service</h1>
                    <p className="text-txt-color text-base xxxlarge:text-center xxxlarge:basis-6/12 large:px-32 meduim:px-14 small:px-3 small:text-center">Ac urna aenean lectus tristique nec taciti. Justo dolor erat nisi montes sollicitudin 
                    eros felis curae. Ultricies aenean porta quam molestie himenaeos purus donec dapibus non adipiscing tempor.</p>
                    <Link href="/services" className='w-fit px-3 xxxlarge:px-1.5 py-1.5 bg-white text-black rounded-lg border-2 border-solid border-hover-color hover:text-white hover:bg-hover-color duration-300 xxxlarge:basis-40 text-center font-semibold'>View All Services</Link>
                </div>
                <div className='grid moreThanLarge:grid-cols-grid3 meduim:grid-cols-grid2 large:grid-cols-grid2 small:grid-cols-grid1 gap-x-5 gap-y-11 small:gap-y-9 text-center'>
                    <OneOffer props={{title:"Health Care", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaPumpMedical/>}} />
                    <OneOffer props={{title:"Health Check & Screening", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaStethoscope/>}} />
                    <OneOffer props={{title:"Vaccination", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaShieldVirus/>}} />
                    <OneOffer props={{title:"Medicine Consultation", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaUserNurse/>}} />
                    <OneOffer props={{title:"Doctor Receipt", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaFile/>}} />
                    <OneOffer props={{title:"Pharmacy Store", paragraph:"Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.", linkText:"Read More", linkAddress:"/", icon:<FaHospital/>}} />
                </div>
            </div>
            <OfferLand />
        </>
    )
}