import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);

    if (state.succeeded) {
        return <p className="font-karla text-2xl">Thanks for contacting us! We'll reach back as soon as possible!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-3/4 lg:w-2/4 gap-y-10 font-karla font-extrabold">
            <div className="flex flex-col">
                <label htmlFor="name" className="pb-2 font-raleway font-bold text-xl">Name</label>
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
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="serviceput" className="pb-2 font-raleway font-bold text-xl">Subject</label>
                <input
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
                <ValidationError prefix="Message" field="message" errors={state.errors} />
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