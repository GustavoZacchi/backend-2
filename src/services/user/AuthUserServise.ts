import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //checa email
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("Usuário/e, ou senha incorretos!");
    }
    //checa password
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Usuário/e, ou senha incorretos!");
    }
    //gerar JWT

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return { id: user.id, name: user.name, email: user.email, token: token };
  }
}
export { AuthUserService };