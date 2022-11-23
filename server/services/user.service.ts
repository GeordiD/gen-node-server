import { db } from '@/common/db';
import { User as DbUser } from '@prisma/client';

export type User = Omit<DbUser, 'passwordHash'>;

export class UserService {
  async getUserByEmail(email: string): Promise<User | null> {
    const fullUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    return fullUser ? this.excludePassword(fullUser) : null;
  }

  async getPasswordHash(id: string): Promise<string | undefined> {
    const result = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        passwordHash: true,
      },
    });

    return result?.passwordHash;
  }

  private excludePassword(user: DbUser): User {
    const output: User = user;
    delete output['passwordHash'];
    return output;
  }
}

export const _userService = new UserService();
