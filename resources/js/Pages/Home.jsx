import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import axios from '../api'
import desk from '../../assets/images/desk.jpg'
import {
  useQuery, 
} from '@tanstack/react-query'
import Markdown from "react-markdown";

export default function Home() {
    const { props } = usePage();
    console.log(desk);
    const {data,isLoading} = useQuery({
      queryKey: ["note/1/whole"],
      queryFn: async () => {
        return axios.get("note/1/whole");
      }
    })

    useEffect(()=>{
      console.log(data);
    },[isLoading])

    return (
        <>
            {/** title */}
            <div className=" w-full flex flex-col items-center">
                <div className="navbar">
                    <div className="btn btn-ghost text-3xl font-bold">
                        <div>🚩</div>
                        <div>{props.type}</div>
                    </div>
                </div>
                <div className=" divider"></div>

                {/** Content */}

                {/** post */}
                {
                  <div className=" w-11/12 p-4 mb-10 bg-neutral rounded-box flex justify-center flex-wrap flex-col lg:flex-row">
                      {isLoading? <div>Loading...</div>:data.data.data.map((val) => (
                          <div key={val.id} className="card lg:w-96 bg-base-100 shadow-xl image-full m-4">
                          <figure><img src={desk} alt="note" /></figure>
                          <div className="card-body">
                            <h2 className="card-title">{val.title}</h2>
                            <p>{val.text_summary}</p>
                            <div className="flex flex-row space-x-3">
                            {
                              val.labels.map(v => <div key={v.id} className="btn btn-sm">#{v.content}</div>)
                            }
                            </div>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                }
            </div>
        </>
    );
}
