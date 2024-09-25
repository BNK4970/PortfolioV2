import React from 'react'

function Service() {
    const SERVICES = [
        {label: "Analyse des besoins"},
        {label: "Creation du design"},
        {label: "Developpement"},
        {label: "Optimisation"},
        {label: "Tests"},
        {label: "Hebergement"},
    ]
  return (
    <div className='w-full h-fit'>
        <h1 className="text-4xl uppercase">Mes services</h1>
        <ul className="grid grid-rows-1 grid-cols-[repeat(6, minmax(0, 300px))] overflow-x-auto w-full gap-4">
            {SERVICES.map((list, idx)=>(
                <li key={idx} className='bg-[rgb(var(--blur))] w-full'>{list.label}</li>
            ))}
        </ul>
    </div>
  )
}

export default Service