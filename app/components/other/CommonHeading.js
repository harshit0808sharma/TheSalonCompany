import Link from "next/link";


export default function CommonHeading({Text}){
    return(
        <>
            <div className="relative m-0 bg-teal-800 lg:mx-5 text-white flex flex-col gap-5 items-center justify-center overflow-hidden lg:rounded-[2rem] py-16 md:py-24 lg:py-32">
                <h1 className="text-5xl text-white">{Text}</h1>
                <ul className="flex items-center gap-2">
                    <Link href="/" className="">Home</Link>
                    <li> / </li>
                    <li>{Text}</li>
                </ul>
            </div>
        </>
    )
}
