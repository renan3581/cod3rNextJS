//O '...' permite que você passe mais de 1 parametro pela url Ex.:(http://localhost:3000/api/params/a/b/c)
//[[]] Faz com que a pagina seja carregada mesmo que não tenha nenhum parametro na url.

export default function params(req,res){
    res.status(200).json({
        params: req.query
    })
}