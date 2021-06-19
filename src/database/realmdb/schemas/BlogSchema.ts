import { ObjectSchema } from 'realm';
import { uuid } from 'uuidv4';

const BlogSchema: ObjectSchema = {
  name: 'blogs',
  properties: {
    id: {
      type: 'string',
      default: uuid(),
    },
    title: 'string',
  },
  primaryKey: 'id',
};


export default BlogSchema