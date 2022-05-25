# Tutorial NextJS

    Rotas:
        - Quando criamos um arquivo index dentro de uma pasta em pages e colocamos somente o endereço da pasta na url, o arquivo index será carregado por padrão.

        - Quando digitamos uma rota na barra de endereço, devemos ter em mente a formatação das letras maiúsculas e minúsculas, pois o next leva em conta isso.

        - '_' no nome do arquivo não torna uma rota inacessível.


    Rotas Dinâmicas:
        - Para criar rotas dinâmicas basta involver a pasta ou nome do arquivo com '[]'
        - com isso se uma rota for por exemplo '/produtos/[id]' e você acessar a url '/produtos/1' o arquivo ira carregar as informações sem problemas.

    Para pegar informações dessas rotas nos usamos a função 'useRouter' do NextJS.