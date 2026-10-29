import { ListUsers } from "@/types";

import { RequestGet } from "@/hooks";
import { Header, Tabela, Banner } from "@/Componentes";
function ListUsuarios() {
  const { data } = RequestGet<ListUsers>("usuarios");

  return (
    <>
      <Header />
      <Banner mensagem="Lista de Usuários" />
      <Tabela
        headers={["NOME", "EMAIL", "SENHA", "ADMINISTRADOR"]}
        rows={
          data?.usuarios.map((usuario) => [
            usuario.nome,
            usuario.email,
            usuario.password,
            usuario.administrador,
          ]) ?? []
        }
      />
    </>
  );
}
export default ListUsuarios;
