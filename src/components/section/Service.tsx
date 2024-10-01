import React from 'react'

function Service() {
    const SERVICES = [
        {label: "Analyse des besoins", desciption: "desciption", step: 1},
        {label: "Creation du design", desciption: "desciption", step: 2},
        {label: "Developpement", desciption: "desciption", step: 3},
        {label: "Optimisation", desciption: "desciption", step: 4},
        {label: "Tests", desciption: "desciption", step: 5},
        {label: "Hebergement", desciption: "desciption", step: 6},
    ]
  return (
    <div className='w-full h-fit flex flex-col gap-4'>
        <h1 className="text-4xl uppercase">Mes services</h1>
        <ul className="
        grid grid-rows-6 h-fit gap-40 relative
        bg-primary w-1 translate-x-[50px] ml-[20px]
        before:content-[''] before:bg-secondary before:translate-x-[50px] before:absolute before:w-1 before:h-full ">
            {SERVICES.map((list, idx)=>(
                <li key={idx} className={`
                grid grid-cols-[auto_1fr] gap-10 h-fit relative py-2
                `}>
                    <h2 className="z-10 bg-background absolute text-5xl h-full grid place-items-center aspect-square">
                        {list.step}
                    </h2>
                    <div className=" ml-20">
                        <h2>{list.label}</h2>

                        <p>{list.desciption}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Service