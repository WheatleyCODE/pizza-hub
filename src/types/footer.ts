export interface IStats {
  title: string,
  description: string,
}

export interface ILinks {
  title: string,
  to: string,
}

export interface ICopyright {
  links: ILinks[]
}

export interface INavigation {
  columnTitle: string,
  links: ILinks[]
}

export interface IFooterData {
  links: INavigation[],
  stats: IStats[],
  copyright: any[],
}
