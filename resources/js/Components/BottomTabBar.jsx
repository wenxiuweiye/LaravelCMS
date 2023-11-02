import {Link, usePage } from "@inertiajs/react";
import { VscInfo,VscHome, VscPerson } from "react-icons/vsc";

const tabConfig = [
    {
        name: "home",
        icon: <VscHome></VscHome>
    },
    {
        name: "person",
        icon: <VscPerson></VscPerson>
    },
    {
        name: "info",
        icon: <VscInfo></VscInfo>
    },
];

export default function BottomTabBar() {
    const {props} = usePage()
    return (
        <div className="btm-nav z-50">
        {tabConfig.map((value, index) => (
            <Link
                href={`/${value.name}`}
                key={value+index}
                className={`${Number(props.tabCurrent) === index ? "active" : ""}`}
            >
            {value.icon}
            <div>{value.name}</div>
            </Link>
        ))}
</div>
  )
}
