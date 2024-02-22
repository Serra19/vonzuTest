import { useEffect, useState } from 'react'
import { data } from '../fake-data'
import ExpeditionItem from './ExpeditionItem'

async function getData(): Promise<Expedition[]> {
  return new Promise((resolve) => {
    resolve(data.found)
  })
}

export const ExpeditionsList = ({
  searchText,
  sortBy,
  sortOrder
}: {
  searchText: string
  sortBy: SortByOption
  sortOrder: SortOrder
}) => {
  const [expeditions, setExpeditions] = useState<Expedition[]>()

  useEffect(() => {
    getData().then((result) => {
      setExpeditions(result)
    })
  }, [])

  return (
    <div className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
      {expeditions
        ?.filter((expedition) => {
          return (
            expedition.reference.includes(searchText) ||
            expedition.client.username.includes(searchText)
          )
        })
        .sort((a, b) => {
          if (a[sortBy] > b[sortBy]) {
            if (sortOrder === "asc") {
              return 1
            } else {
              return -1
            }
          } else if (a[sortBy] < b[sortBy]) {
            if (sortOrder === "asc") {
              return -1
            }
            else {
              return 1
            }
          } else {
            return 0
          }
        })
        .map((expedition: Expedition) => (
          <ExpeditionItem key={expedition.id} expedition={expedition} />
        ))}
    </div>
  )
}