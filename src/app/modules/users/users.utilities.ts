import { User } from './users.model'

const getUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generatedUserId = async () => {
  const currentId = (await getUserId()) || (0).toString().padStart(5, '0')
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  // incrementalId.toString()
  return incrementalId
}
