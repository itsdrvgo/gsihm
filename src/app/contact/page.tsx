import Location from "@/components/ui/location";
import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="bg-primary text-white h-32 px-6 md:px-32 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Home / Contact</h1>
            </div>

            <h1 className="text-4xl text-primary font-bold my-3 text-center">
                Contact Us
            </h1>

            <div className="px-6 md:px-32 py-10">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSc9fvjDqJkwe6uRxQ0aKpwfPgXKUWB8vjGNiQ_-HtzMlCBMLQ/viewform?embedded=true"
                    className="w-full h-96"
                >
                    Loading…
                </iframe>
            </div>

            <Location />
        </div>
    );
};

export default Contact;
