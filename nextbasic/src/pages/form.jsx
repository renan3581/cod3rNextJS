import { useState } from "react"

export default function Form(){
    
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    
    
//Interagindo com a API
    async function salvarUsuario(){
    //Await faz com que o proximo passo so seja executado quando a API responder. (Similar ao .then())
      
        await fetch('/api/form',{ 
                method: 'POST',
                body:JSON.stringify({nome, idade}), //Transforma o objeto literal em json
            })

            const resp = await fetch('/api/form')
            const usuarios = await resp.json()
            setUsuarios(usuarios)

            setNome('')
            setIdade(0)

    }


   function renderizarUsuarios(){
         return usuarios.map((usuario,index) => <li key={index}>{usuario.nome} tem {usuario.idade} anos.</li>)
   }

    return(
        <div style={{display:"flex",flexDirection:'column', alignItems:'center'}}>
            <h1>Integrando com API</h1>
            <div>
                <input type="text" value={nome} onChange={evNome=> setNome(evNome.target.value)} />
                <input type="number" value={idade} onChange={evIdade=> setIdade(+evIdade.target.value)} />
                <button onClick={salvarUsuario}>Enviar</button>

                <ul>
                    {renderizarUsuarios()}
                </ul>
            </div>
        </div>
    )
}