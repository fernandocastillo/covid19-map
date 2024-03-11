export type Category =  {
    id: number,
    parent_id: null | number,
    name: string,
    sort_order: number,
    children?: Array<Category>
    parent?: Category
}

export interface CategoriesState {    
    categories: Array<Category>,
    modalOpen: boolean,
    modalSubmitUrl: string
    modalParentId?: number
}


export type CategoryItemProps =  { 
    category: Category, 
    index: number,    
    disabledDown: boolean
}
    

export interface Option  {
    label: string,
    href: string
}

export interface LayoutState {
    sidebar_open?: boolean,
    sidebar_inner_options?: Array<Option>,
    sidebar_inner_title?: string,
    confirm_modal: boolean,
    confirmed?: boolean,
    confirmed_action?: string
}

export type User = {
    id: number,
    name: string,
    email:string,
    is_active: boolean,
    is_super_admin: boolean,
    created_at: string,
    last_login: string
}



export type Book = {
    id: number,
    title: string,    
    author: string,
    image_url: string,
    image_thumbnail: string,
    categories: Array<Category> | any,
    isbn: string,
    issn: string,
    editorial: string,
    year_published: string,
    edition_number: string,
    pages: string,
    country: string,
    observation: string,

    room: string,
    bookseller: string,
    shelf: string,
    quantity: string,
    admitted_at: string,
    created_at: string,
    updated_at: string,

    year_edited: string
}
