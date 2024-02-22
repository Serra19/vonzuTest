declare type Expedition = {
  id: number
  reference: string
  type: string
  date: number
  statusCode: string
  street: string
  postalCode: string
  city: string
  country: string
  createdAt: string
  updatedAt: string
  description?: string
  barcodes?: string[]
  client: {
    username: string
    profile: {
      emails: string[]
      phones: string[],
      name: string
    }
  }
}

declare type SortByOption = "createdAt" | "updatedAt" | "statusCode" | "type"
declare type SortOrder = "asc" | "desc"