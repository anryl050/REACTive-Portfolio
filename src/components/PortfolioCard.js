import React from "react";

function PortfolioCard({ project }) {
    const { title, img, url, description } = project
    return (

        <div className=" group hover:bg-sky-500 hover:ring-sky-500 max-w-md mx-auto bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex lg:flex ">
                <div className="md:shrink-0 border-single border-4 rounded-md group-hover:text-slate-800 items-center m-1" style={{ color: "#F3EEE8" }}>
                    <img
                        alt={title}
                        className="lg:h-42 lg:w-42 object-cover md:h-full md:w-48 rounded-md self-center"
                        src={img}
                    />
                </div>
                <div className="p-8">
                    <div>
                        <div className="block mt-1 text-lg leading-tight font-medium" >
                            <a href={url} style={{ color: "#F3EEE8" }} className="hover:bg-slate-800 hover:rounded-md hover:p-2">{title}</a>
                        </div>
                        <div className="mt-2" style={{ color: "#F3EEE8" }}>
                            {description}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PortfolioCard;