import { useForm } from "@formspree/react";

export default function ContactForm() {
    const formID = process.env.FORM_ID;
    const [state, handleSubmit] = useForm(`${formID}`);

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-2/4 gap-y-10 font-karla font-extrabold">
            <div className="flex flex-col">
                <label htmlFor="email" className="pb-2 font-raleway font-bold text-xl">Name</label>
                <input
                    type="name"
                    name="name"
                    className="border rounded-lg p-5 text-gray-600"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="pb-2 font-raleway font-bold text-xl">Email Address</label>
                <input
                    type="email"
                    name="email"
                    className="border rounded-lg p-5 text-gray-600"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="serviceput" className="pb-2 font-raleway font-bold text-xl">Subject</label>
                <input
                    type="text"
                    name="subject"
                    className="border rounded-lg p-5 text-gray-600"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message-area" className="pb-2 font-raleway font-bold text-xl">Message</label>
                <textarea
                    placeholder="Write your message here"
                    name="message"
                    className="border rounded-lg p-5 text-gray-600"
                    required
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="text-2xl py-4 px-7 text-white bg-[#004BC8] hover:shadow-[inset_40rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] text-center rounded"
            >
                Submit
            </button>
        </form>
    );
}