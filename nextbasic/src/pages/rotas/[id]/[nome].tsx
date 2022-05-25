import { useRouter } from "next/router"

export default function buscar(){
    
    const router = useRouter()

    const id = router.query.id 
    const nome = router.query.nome 
    

    return(
        <div>
            
            <h1>Rotas/{id}/{nome}</h1>

        </div>
    )
}