import Link from "next/link"
import {useRouter} from "next/router"

export default function rota(){
    const router = useRouter()

    function navegacaoSimples ( url: string ){ 
        router.push(url)
    }


    function navegacaoComParams(){

       //http://localhost:3000/rotas/params?id=123&nome=Ana
        router.push({

            pathname: '/rotas/params',
            query:{
                id:123,
                nome:'Ana'
            }

        })

    }
        
    return(
        <div>
            
            <h1>Rotas Index</h1>
            <ul>

                <Link href='/rotas/params?id=12&nome=Ana'>
                    <li>Params</li>
                </Link>
                <Link href='/rotas/123/buscar'>
                    <li>Buscar</li>
                </Link>
                <Link href='/rotas/123/Renan'>
                    <li>Perfil</li>
                </Link>

            </ul>
            
            <br />

            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>

                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={()=>router.push('/rotas/123/buscar')}>Buscar</button>
                <button onClick={()=>navegacaoSimples(`/rotas/123/Renan`)}>Perfil</button>
                
            </div>
            
        </div>
    )
}