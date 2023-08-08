import { useProfileContext } from "../../../../context/Profile.context";


function Description(){
    const { description } = useProfileContext().profile
    return(<>
    <div className=" max-w-sm text-center overflow-hidden">
    <h1 className="mt-8 text-base">{description}</h1>

    </div>
    </>)
}

export default Description;