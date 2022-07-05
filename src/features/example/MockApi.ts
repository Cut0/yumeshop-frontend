export type MockUserAPIResponse = { id: number; name: string };

export class MockUserAPI {
  user: MockUserAPIResponse = { id: 1, name: '太郎' };

  constructor(user: MockUserAPIResponse = { id: 1, name: '太郎' }) {
    this.user = user;
  }

  async getUser(): Promise<MockUserAPIResponse> {
    return this.user;
  }
}
