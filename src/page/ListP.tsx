import { RequestGet } from "@/hooks";
import { Header, Tabela, Banner } from "@/Componentes";
import { ListProducts } from "@/types";

function ListP() {
  const { data } = RequestGet<ListProducts>("produtos");
  return (
    <>
      <Header />
      <Banner mensagem="Lista de Usuários" />
      <Tabela
        headers={["NOME", "PREÇO", "DESCRIÇÃO", "QUANTIDADE"]}
        rows={
          data?.produtos.map((produtos) => [
            produtos.nome,
            produtos.preco,
            produtos.descricao,
            produtos.quantidade,
          ]) ?? []
        }
      />
    </>
  );
}
export default ListP;
