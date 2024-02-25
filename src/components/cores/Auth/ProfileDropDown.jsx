import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { FaBox } from "react-icons/fa";
import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  console.log("USER IN FUNCTION.................",user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  console.log("YES DONE********************************")
  if (!user) return null
  return (
    <div className="">
      {console.log("DONE???????????????????????")}
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/dashboard/Store" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Store
            </div>
          </Link>
          {
            console.log("ACCount TYpe",user.accountType)
          }
          {
                
                user.accountType==="Admin"?(
                  <Link to="/dashboard/create_item" onClick={() => setOpen(false)}>
                <div className="flex w-full left-0 -translate-x-4 gap-x-1 py-[10px] px-[30px] text-sm  text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <FaBox className="text-lg" />
                  Create<span>Item</span>
                  
                </div>
              </Link> 
                ):(

                  <Link to="/dashboard/rented_item" onClick={() => setOpen(false)}>
                <div className="flex w-full left-0 -translate-x-4 gap-x-1 py-[10px] px-[30px] text-sm  text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <FaBox className="text-lg" />
                  Rented<span>Item</span>
                  
                </div>
              </Link> 
                )
            }
           
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
    </div>

  )
}