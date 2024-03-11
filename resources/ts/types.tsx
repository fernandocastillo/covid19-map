export type StateModel = {
    id: number,
    country_id: number,
    name: string,
    topo_key: string,
    active: number,
    recovered: number,
    deceased: number,
    total: number,
}

export type CountryModel = {
    id: number,
    name: string,
    datamap_scope: string,
    datamap_topo_url: string,
    active: number,
    recovered: number,
    deceased: number,
    total: number,
    states: Array<StateModel>

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

export type Bubble = {
    centered: string,
    fillKey: string,
    radius: number,
    state: string
}


export type CardType = 'active'|'recovered'|'deceased'|'total'|''