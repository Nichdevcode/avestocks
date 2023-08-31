import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      _id: string
      email: string,
      first_name: string,
      last_name: string,
      balance: number,
      bonus: number,
      total_deposit: number,
      total_withdrawal: number,
      status: string,
      document?: string
      is_admin: boolean
    }
  }

  interface User {
    /** The user's object. */
    _id: string
    email: string,
    first_name: string,
    last_name: string,
    balance: number,
    bonus: number,
    total_deposit: number,
    total_withdrawal: number,
    status: string,
    document?: string
    is_admin: boolean
  }
}