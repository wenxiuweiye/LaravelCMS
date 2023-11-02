import { Head, Link } from "@inertiajs/react";
import React from "react";
import heroBg from '../../assets/images/heroBg.jpg'
import offices from '../../assets/images/offices.jpg'
import desk from '../../assets/images/desk.jpg'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function Index() {
    const {t,i18n} = useTranslation("index")
    return (
        <div>
            <Head title="Welcome"></Head>
            {/** Hero */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${heroBg})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Laravel cms</h1>
                        <p className="mb-5">
                            {t('Welcome to Laravel CMS')}
                        </p>
                        <Link href="/home" className="btn btn-primary">
                            {t('btn start')}
                        </Link>
                    </div>
                </div>
            </div>
            {/** feature: Convenient */}
            <div className="hero lg:h-screen h-auto bg-base-200">
                <div className="hero-content space-y-10 pt-20 pb-20 lg:p-0 flex-col lg:flex-row text-center">
                    <div className="max-w-md mr-5 ">
                        <h1 className="text-5xl font-bold">{t("Convenient")}</h1>
                        <p className="py-6">
                        {t("Convenient content")}
                        </p>
                        <button className="btn btn-primary">{t("btn start")}</button>
                    </div>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <motion.div className=" w-full">
                                    <div className=" w-full h-20 bg-purple-800 flex justify-center items-center text-center">
                                    Hi. Laravel CMS !
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** feature: Responsive */}
            <div
                className="hero lg:h-screen h-auto bg-base-200"
                style={{
                    backgroundImage:
                        `url(${offices})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row text-center">
                    <div className=" space-y-10 flex flex-col justify-center items-center w-full lg:w-1/2">
                        <div className="pt-10 lg:pt-0">
                            <div className="max-w-md lg:mr-5">
                                <h1 className="text-5xl font-bold">
                                    {t("Responsive")}
                                </h1>
                                <p className="py-6">
                                    {t("Responsive content")}
                                </p>
                                <button className="btn btn-primary">
                                    {t("btn start")}
                                </button>
                            </div>
                        </div>
                        <div className="mockup-browser w-96 lg:w-full shadow-lg bg-base-300">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://Laravel-CMS.org</div>
                            </div>
                            <div className="flex justify-center px-4 py-16 bg-base-200">
                                <div className="max-w-md mr-5">
                                    <h1 className="text-3xl font-bold">
                                    {t("Responsive")}
                                    </h1>
                                    <p className="py-6">
                                    {t("Responsive content")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <div className="max-w-md mr-5">
                                    <h1 className="text-3xl font-bold">
                                    {t("Responsive")}
                                    </h1>
                                    <p className="py-6">
                                    {t("Responsive content")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** feature: Data Analysis*/}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col text-center">
                    <div className="max-w-md mr-5">
                        <h1 className="text-5xl font-bold">
                        {t("Data Analysis")}
                        </h1> 
                        <p className="py-6">
                        {t("Data Analysis content")}
                        </p>
                    </div>

                    <div className="stats flex flex-col lg:flex-row shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                    </div>
                </div>
            </div>

            {/** Feature: i18 */}
            <div className="hero min-h-screen" style={{backgroundImage: `url(${desk})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{t('i18')}</h1>
                <p className="mb-5">{t('i18 content')}</p>
                <button className="btn btn-primary">{t('btn start')}</button>
                <div className="dropdown">
                        <label tabIndex={0} className="btn m-1">{t('btn switch')}</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {[{nativeName: 'English',lang:"en"},{nativeName: "中文",lang:"zh"}].map(value => {
                                return <li className={` p-2`} key={value.nativeName} onClick={()=>{i18n.changeLanguage(value.lang)}}>{value.nativeName}</li>
                            })}
                        </ul>
                        </div>
                </div>
            </div>
            </div>

            {/** Footer */}
            <footer className="footer p-10 bg-base-300 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
}
