import * as DataLoader from 'dataloader';
import { getRepository } from 'typeorm';

import User from '../models/user.entity';

const batchUsers = async (userIds: number[]) => {
  const users = await getRepository(User).findByIds(userIds);

  const userIdMap: { [userId: number]: User } = {};

  users.forEach(user => {
    userIdMap[user.id] = user;
  });

  return userIds.map(userId => userIdMap[userId]);
};

export default () => new DataLoader(batchUsers);
