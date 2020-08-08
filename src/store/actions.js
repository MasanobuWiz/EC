import Api from '../apis/api';
import MutationTypes from './mutation-types';

export default {
	getPosts({ commit }) {
		commit(MutationTypes.GET_POSTS_REQUEST);
		return Api.getPosts()
			.then(res => commit(MutationTypes.GET_POSTS_SUCCESS, res.data))
			.catch(err => commit(MutationTypes.GET_POSTS_FAILURE, err));
	}
};
