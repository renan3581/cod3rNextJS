import { useRouter } from "next/router"
import Link from "next/link"
//Digite na url http://localhost:3000/rotas/params?nome=Algo&id=2023

export default function RotaParams(){

    const router = useRouter()

    const id = router.query.id 
    const nome = router.query.nome 

    return(
        <div>
            
            <h1>Rotas Params: {nome} e {id}</h1>
            <Link href={'/rotas'} passHref>
                <button>voltar</button>
            </Link>

        </div>
    )
}