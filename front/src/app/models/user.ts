export interface loginUser {
    email: string;
    password: string;
    access: string;
    refresh: string;
    message: 'usuario registrado com sucesso.';
}

export interface registroUser {
  username: string;
  email: string;
  password: string;
  access: string;
  refresh: string;
  message: 'usuario registrado com sucesso.';
}

export interface imcBase {
  imc_res: number;
  objetivo: string;
}