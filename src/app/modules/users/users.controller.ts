import { Request, Response } from 'express'
import service from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(user)
    const result = await service.createdUser(user)
    res.send(result)
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'User creation failed',
    })
  }
}

export default {
  createUser,
}
