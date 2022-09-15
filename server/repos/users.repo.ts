import { User } from '@/models/user';

export class UsersRepo {
  async getUserByEmail(email: string): Promise<User | null> {
    // this should always not include password hash

    if (email === 'geordi.dosher@gmail.com') {
      const mockUser = new User();
      mockUser.id = 'mockId';
      mockUser.email = 'geordi.dosher@gmail.com';

      return mockUser;
    } else {
      return null;
    }
  }

  // consider storing passwords in a separate table
  async getPasswordHashById(id: string): Promise<string | null> {
    // password = "test"
    return id === 'mockId'
      ? '$2a$10$AW3o7MIFwUW5py4GJNPiLenhuhy5XoGBBONZC/hm7cYRu33/c7V9W'
      : null;
  }
}

export const _usersRepo = new UsersRepo();
