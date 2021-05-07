import { IEndereco } from './Endereco';

export interface IUsuario {
  name?: string;
  email?: string;
  cpf?: string;
  password?: string;
  type?: string;
  active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  address?: IEndereco[];
}
