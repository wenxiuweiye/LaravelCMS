import BottomTabBar from "@/Components/BottomTabBar";
import Drawer from "@/Layouts/Drawer";
import { Head, usePage } from "@inertiajs/react";
import React from 'react'
import Home from "./Home";
import Person from "./Person";
import Info from "./Info";
import { themeChange } from 'theme-change'
const mainConfig = [
    ()=><Home></Home>,
    ()=><Person></Person>,
    ()=><Info></Info>
]

export default function Application() {
    const {props} = usePage()
    React.useEffect(() => {
        themeChange(false)
    }, [])
    const Main = mainConfig[props.tabCurrent]

    return (
        <div className=' w-sreen'>
            <Head title="Inertia-react"></Head>
            <Drawer>
                <Main></Main>
            </Drawer>
            <BottomTabBar></BottomTabBar>
        </div>
    );
}
