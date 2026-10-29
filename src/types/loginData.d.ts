export interface LoginData {
  message: string;
  authorization: string;
}

export interface PostData {
  email: string;
  password: string;
}

export interface CadastroUsuario extends PostData {
  nome: string;
  administrador: string;
}

export interface CadastroData {
  message: string;
  id: string;
}

export interface CadastroProduto {
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
}

export interface ListProducts {
  quantidade: number;
  produtos: CadastroProduto[];
}
