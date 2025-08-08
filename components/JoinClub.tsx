import {FaRegHandshake} from "react-icons/fa6";
import {PiStudentFill, PiStudentThin} from "react-icons/pi";


export default function JoinClub() {
    return (
        <div className={'w-full bg-neutral-100 text-black'}>
            <div className={'mx-auto p-6 py-24 w-[65%] gap-12 grid grid-cols-1 md:grid-cols-2 place-items-center justify-center '}>
                <div className={'border p-12 rounded-xl flex min-h-[500px] flex-col bg-white items-center justify-center '}>
                    <FaRegHandshake className={'size-[100px] mb-6 '}/>
                    <span className={'text-3xl font-bold text-center'}>Interested in Collaborating or sponsoring?</span>
                    <button className={'px-4 py-2 rounded-md border border-neutral-600 mt-8'}>Click here to get in touch</button>
                </div>
                <div className={'border p-12 rounded-xl flex min-h-[500px] flex-col bg-white items-center justify-center '}>
                    <PiStudentFill className={'size-[100px] mb-6    '}/>
                    <span className={'text-3xl font-bold text-center'}>Want to Join or Get Involved?</span>
                    <button className={'px-4 py-2 rounded-md border border-neutral-600 mt-8'}>Click here to join the cell</button>
                </div>

            </div>
        </div>
    )
}