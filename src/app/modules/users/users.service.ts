import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utilities'

const createdUser = async (user: IUser): Promise<IUser | null> => {
  //auto genarate incremental id

  const id = await generatedUserId()
  user.id = id

  //default password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createuser = await User.create(user)
  if (!createuser) {
    throw new Error(`Failed to create user`)
  }

  return createuser
}

export default {
  createdUser,
}
