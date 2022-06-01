const metodo =   (req,res) =>{
   
    if(req.method === 'GET'){
        res.status(200).json({
            Nome: 'Renan'
        })
    }else{
        res.status(200).json({
            Nome: 'Andreza'
        })
    }
}

export default metodo