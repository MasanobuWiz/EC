import MUTATION_TYPES from './mutation-types';

export const mutations = {
	[MUTATION_TYPES.GET_POSTS_REQUEST](state) {
		state.isFetching = true;
	},
	[MUTATION_TYPES.GET_POSTS_SUCCESS](state, posts) {
		state.isFetching = false;
		state.posts = defalt;
	},
	[MUTATION_TYPES.GET_POSTS_FAILURE](state, err) {
		state.isFetching = false;
		state.posts = null;
		state.error = err;
	}
};
