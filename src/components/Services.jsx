import React from "react";
import bgImage from "../assets/bgImage.jpg";

function Services() {
    return (
        <section
            id="section1"
            className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                // 2. Use the imported variable here
                backgroundImage: `url(${bgImage})`
            }}
        >
            {/* Dark Overlay to make text pop */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 top-20 left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-20 right-20"></div>

            <div className="text-center z-10 ">
                <h1 className="text-5xl font-extrabold uppercase tracking-widest">Hello this is my website</h1>
            </div>
        </section>
    );
}


export default Services;