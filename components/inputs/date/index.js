import React from "react"
import { Dates } from "../../../firebase/Dates.utils"

const Text = React.forwardRef(({ label, helperText, type, value, ...rest }, ref) => {



  return (
    <div className="form-control mx-auto w-full">
      <label className="label">
        {label &&
          <span className="label-text">{label}</span>
        }
      </label>
      <input className="input input-bordered " value={type === 'date' ? Dates.format(value || new Date(), 'yyyy-MM-dd') : value} {...rest} ref={ref} />
      {helperText &&
        <label className="label">
          <span className="label-text-alt">{helperText}</span>
        </label>
      }
    </div>
  )
})

export default Text