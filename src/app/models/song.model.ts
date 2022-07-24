export interface SongData {
    href: string
    items: Item[]
    limit: number
    next: any
    offset: number
    previous: any
    total: number
  }
  
  export interface Item {
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_urls: ExternalUrls2
    href: string
    id: string
    is_local: boolean
    name: string
    preview_url: string
    track_number: number
    type: string
    uri: string
  }
  
  export interface Artist {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls {
    spotify: string
  }
  
  export interface ExternalUrls2 {
    spotify: string
  }
  