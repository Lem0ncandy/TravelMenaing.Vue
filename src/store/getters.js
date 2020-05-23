const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    const: state => state.editor.content
}
export default getters