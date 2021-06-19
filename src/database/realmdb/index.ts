import Realm from 'realm';

import BlogSchema from './schemas/BlogSchema';

const connect = Realm.open({
  path: 'realmDB',
  schema: [BlogSchema],
});

export default connect;
