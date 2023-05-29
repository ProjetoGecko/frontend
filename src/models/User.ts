import Produto from "./Produto";

interface User {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  token: string;
  produto?: Produto [];
}

export default User;