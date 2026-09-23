import { useEffect, useState } from "react"
import SmjerServise from "../../services/smjerovi/SmjerService"


export default function SmjerPregled(){

const [smjerovi, setSmjerovi] = useState([])

useEffect(()=>{
console.log('Dosao na pregled smjerova')
ucitajSmjerove()
},[])
async function ucitajSmjerove(){
    await SmjerServise.get().then((odgovor)=>{
        // console.table(odgovor.data)
        setSmjerovi(odgovor.data)
    })
}

    return (
        <>
            Ovdje dođe pregled smjerova
            <hr />
            {JSON.stringify(smjerovi,null,2)}
        </>
    )
}