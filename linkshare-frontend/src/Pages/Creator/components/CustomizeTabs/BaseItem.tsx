import { ReactNode } from "react";

interface BaseItemProps {
    children: ReactNode
}

function BaseItem({ children }: BaseItemProps) {
    return (
        <>
            <div className='w-full flex flex-col  text-xs  md:h-auto md:flex-row gap-4 items-center justify-around mt-8 p-8 bg-[#FAFAFA] rounded-md '>
                {children}
            </div>
        </>
    )
}

export default BaseItem