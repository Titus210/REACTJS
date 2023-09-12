import { useState, React, useEffect } from "react";
import Cards from "./Cards";
import AddCard from "./AddCard";

export default function Home() {
    const [data, setData] = useState(null);

    return (
        <>
            <img
                alt="background"
                style={{
                    height: "100vh",
                    width: "100vw",
                }}
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
            />
            <div
                className="container-fluid"
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100vw",
                    height: '100vh',
                    backgroundColor: "rgba(0,0,0,0.3)", // Added missing closing parenthesis here
                    backdropFilter: "blur(3px)",
                }}
            >
                <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
                    <div className="col-md-4">
                        <h3 className="display-1 text-white fst-italic">
                            Manage yourself & set Goals
                        </h3>
                        <AddCard data={data} setData={setData} />
                    </div>
                    <div className="col-md-6">
                        {data ? (
                            <Cards data={data} setData={setData} />
                        ) : (
                            <h3 className="display-3 fw-bold text-white">
                                Start Creating Goals
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
