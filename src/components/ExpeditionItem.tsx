import {
  DocumentDuplicateIcon,
  ArchiveBoxArrowDownIcon,
  ArrowsRightLeftIcon,
  CalendarIcon,
  UserIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface Props {
  expedition: Expedition
}

function ExpeditionItem({ expedition }: Props) {
  const createdDate = new Intl.DateTimeFormat("es-ES").format(new Date(expedition.createdAt))
  const updateDate = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(expedition.updatedAt))

  const onCopy = () => {
    navigator.clipboard.writeText(expedition.reference)
    toast("El texto se ha copiado al portapapeles")
  }

  return (
    <div
      data-testid="expeditionItem"
      className="relative grid grid-cols-3 items-center justify-between gap-x-6 px-4 py-5 text-sm hover:bg-gray-50 sm:px-6"
    >
      <div>
        <div className="flex gap-x-2 items-center">
          <p className="underline">{expedition.id}</p>
          {expedition.type === "delivery" ? (
            <ArchiveBoxArrowDownIcon className="h-4 w-4" stroke="blue" />
          ) : (
            <ArrowsRightLeftIcon className="h-4 w-4" stroke="blue" />
          )}
          <p className="text-gray-400">{expedition.reference}</p>
          <button onClick={onCopy}>
            <DocumentDuplicateIcon className="h-4 w-4" stroke="gray" />
          </button>
        </div>
        <div className="flex gap-x-1 items-center">
          <CalendarIcon className="h-4 w-4" stroke="blue" />
          <p>{createdDate}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-x-1 items-center">
          <UserIcon className="h-4 w-4" stroke="blue" />
          <p className="capitalize">{expedition.client.profile.name}</p>
        </div>
        {expedition.client.profile.emails.length > 0 && (
          <div className="flex gap-x-1 items-center">
            <EnvelopeIcon className="h-4 w-4" stroke="blue" />
            <div className="flex flex-col">
              {expedition.client.profile.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </div>
          </div>
        )}
        {expedition.client.profile.phones.length > 0 && (
          <div className="flex gap-x-1 items-center">
            <PhoneIcon className="h-4 w-4" stroke="blue" />
            <div className="flex flex-col">
              {expedition.client.profile.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex gap-x-1 items-center">
          <div
            className={`h-4 w-4 rounded-full ${
              expedition.statusCode === "incidence"
                ? "bg-red-500"
                : "bg-green-500"
            }`}
          ></div>
          <p className="capitalize">{expedition.statusCode}</p>
          <p className="text-xs text-gray-400">({updateDate})</p>
        </div>
        <div className="flex gap-x-1 items-center">
          <MapPinIcon className="h-4 w-4" stroke="blue" />
          <p>
            {expedition.street}, {expedition.postalCode}{" "}
            <span className="capitalize">{expedition.city}</span>,{" "}
            <span className="capitalize">{expedition.country}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExpeditionItem
