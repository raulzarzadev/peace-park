import { useRouter } from "next/router"
import ArrowLeft from '../../icons/ArrowLeft'
import HomeIcon from '../../icons/HomeIcon'
export default function MobilNav() {
  const router = useRouter()
  const handleRedirect = (route) => {
    router.push(route)
  }
  const handleBack = () => {
    router.back()
  }
  return (
    <div className="">
      <div className="fixed  bg-base-100 bottom-0 right-0 left-0  flex justify-around p-1 shadow-md">
        <button onClick={() => handleBack()} className="btn btn-circle btn-sm">
          <ArrowLeft />
        </button>
        <button onClick={() => handleRedirect('/')} className="btn btn-circle btn-sm">
          <HomeIcon />
        </button>
      </div>
    </div>
  )
}