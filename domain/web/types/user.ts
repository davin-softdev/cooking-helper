export interface ISocialMedia {
    id: string
    name: string
    url: string
}

export interface IItem {
    id: string
    name: string
    description: string
}

export interface IUser {
    id: string
    name: string
    email: string
    phone: string
    role: string
    website: string
    image: string
    social_media: ISocialMedia[]
}

export interface IRecipe {
    id: string
    name: string
    images: string[]
    items: IItem[]
    description: string
}
