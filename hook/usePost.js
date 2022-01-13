import {useQuery} from 'react-query';
import axios from 'axios';
import {GET_POST_DETAILS} from '../src/api';

const getPost = async () => {
  const {data} = await axios.get(GET_POST_DETAILS);
  return data;
};

export default function usePost() {
  return useQuery('posts', getPost);
}
