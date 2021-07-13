export const useAuth = () => {
    //Aquí vebdría la lógica de la autenticación
    let auth = { isLogged: false, user: {role: 'ADMIN'} }
    return auth;
}