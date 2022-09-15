export class User {
  id: string;
  email: string;

  buildJwtUser() {
    return {
      id: this.id,
      email: this.email,
      isAdmin: false,
    };
  }
}
