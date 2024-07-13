import Link from "next/link";

export default function PagePix(){
    return(
        <div className="flex flex-col items-center justify-center min-w-[340px] max-w-[500px] my-20 mx-auto gap-4" >
            {/* <Link className="p-4 bg-accent rounded" href="/pagamento/cartao">Pagamento com Cartão</Link> */}
            {/* <Link className="p-4 bg-accent rounded" href="/pagamento/cartaoteste">Pagamento com Cartão Teste</Link> */}
            <Link className="p-4 bg-accent rounded" href="/pagamento/pix">Pagamento Com Pix</Link>
            <p className="">Página destinada a testes de pagamento.</p>
            <p className="">Credenciais de teste do mercado pago para cartão de credito temporariamente fora do ar</p>
        </div>
    )
}