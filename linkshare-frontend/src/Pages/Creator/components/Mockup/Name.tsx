import { useProfileContext } from "../../../../context/Profile.context";


function Name(){
    const { name } = useProfileContext().profile
    return(<>
    <h1 className="mt-8 text-base">{name}</h1>
    </>)
}

export default Name;