# Tutorial NextJS

    Rotas:
        - Quando criamos um arquivo index dentro de uma pasta em pages e colocamos somente o endereço da pasta na url, o arquivo index será carregado por padrão.

        - Quando digitamos uma rota na barra de endereço, devemos ter em mente a formatação das letras maiúsculas e minúsculas, pois o next leva em conta isso.

        - '_' no nome do arquivo não torna uma rota inacessível.


    Rotas Dinâmicas:
        - Para criar rotas dinâmicas basta involver a pasta ou nome do arquivo com '[]'
        - com isso se uma rota for por exemplo '/produtos/[id]' e você acessar a url '/produtos/1' o arquivo ira carregar as informações sem problemas.

    Para pegar informações dessas rotas nos usamos a função 'useRouter' do NextJS. [import ({ useRouter } ou router) from 'next/router'].
        - Se você utilizar o {useRouter}, deve criar uma variavel e atribuir a função 'useRouter()' a ela.
        - Depois basta usar o 'router.(query/route/etc).(id/nome/etc)' para pegar os valores desejados da rota.

    - Para navegar entre as rotas existem duas formas: (Exemplos em /rotas/index.tsx)
        - 1° atraves da tag <Link> usando o [import Link from 'next/link']
        - 2° atraves de funções(normal ou arrow) usando a {useRouter}. [route.push(url)].
