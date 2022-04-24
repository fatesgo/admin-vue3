const getters = {
  user: (state: { user: { user: any } }) => state.user.user,
  roles: (state: { user: { roles: any } }) => state.user.roles,
  userRoutes: (state: { routes: { userRoutes: any } }) => state.routes.userRoutes,
}
export default getters
