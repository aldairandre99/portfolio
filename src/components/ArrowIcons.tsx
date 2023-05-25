import { ArrowSmallDownIcon,ArrowSmallUpIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

interface props {
  link : Array<string>
}

const ArrowIcons = ({ link } : props) => {
  return (
    <div className="flex justify-between mt-6 ml-[35px] mr-[35.3px]">
      <Link href={link[0]}>
        <ArrowSmallUpIcon className="w-6 h-6 text-purple-950"/>
      </Link>
      <Link href={link[1]}>
        <ArrowSmallDownIcon className="w-6 h-6 text-purple-950"/>
      </Link>
    </div>
  )
}

export default ArrowIcons