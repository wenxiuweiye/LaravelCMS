import { Link, usePage } from "@inertiajs/react";
import React, { useMemo } from "react";
import NavBar from '@/Components/NavBar'

export default function Drawer({ children }) {
    const {props, url} = usePage()
  
    const root = url.match(/\/([a-z])*/g)
    return (
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <NavBar></NavBar>
          {children}
        </div> 
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-1">
            {/* Sidebar content here */}
            {
              props.sideBar.map( (value,index) => <Link key={value+index} className={` ${props.type === value ? " btn-active" : ""}  btn`} href={`${root}?type=${value}`}>{value}</Link> )
            }
          </ul>
        </div>
      </div>
    );
}
