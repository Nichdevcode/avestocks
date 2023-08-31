import jwt from 'jsonwebtoken'

export const createToken = async (_id: string) => jwt.sign({ _id }, process.env.JWT_SECRET!, { expiresIn: '1d' })


