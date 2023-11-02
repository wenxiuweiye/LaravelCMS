import React from "react";
import Markdown from "react-markdown";
import axios from "../api";
import { useQuery } from "@tanstack/react-query";
export default function Note() {


    const { data, isLoading } = useQuery({
        queryKey:["note"],
        queryFn: async () => {
            return axios.get("/note");
        }
    })
    return (
        <>
            <div className="card ">
                {isLoading ? (
                    <div className="card">Loading...</div>
                ) : (
                    data.data.data.map((val) => (
                        <>
                            <div className="card-title btn">{val.title}</div>
                            <div className="card-body">
                                <Markdown
                                    className="markdown-body w-full"
                                    key={val.id}
                                >
                                    {val.text}
                                </Markdown>
                            </div>
                        </>
                    ))
                )}
            </div>
        </>
    );
}
