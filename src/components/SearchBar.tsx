import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEventHandler } from "react";

export function SearchBar({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <div className="relative flex h-8 focus-within:z-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Buscar"
        onChange={onChange}
      />
    </div>
  )
}