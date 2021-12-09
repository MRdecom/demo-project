export type AuthData = {
    user?: object,
    credential: object,
    error?: object
}

export type ProfileData = {
    user: {
        displayName:string,
        email:string,
        photoURL:string
    }
}
