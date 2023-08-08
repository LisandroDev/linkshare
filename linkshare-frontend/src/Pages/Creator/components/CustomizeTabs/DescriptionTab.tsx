import { useProfileContext } from "../../../../context/Profile.context"
import { propertySetter } from "../../../../utils/propertySetter";
import BaseItem from "./BaseItem"

//TODO: Add option to change font sizes, weight and style.

function DescriptionTab() {

    const { profile, updateProfile } = useProfileContext();

    const handleChange = (newDescription: string) => {
        updateProfile(propertySetter('description', profile, newDescription))
    }

    return (<>
        <BaseItem>
            <div>
                <h2>Change Description</h2>

                <div>
                    <input
                        type='text'
                        placeholder='Description'
                        onChange={(e) => handleChange(e.currentTarget.value)}
                        className='rounded w-full text-xs max-w-md'
                    ></input>
                </div>
            </div>
        </BaseItem>
    </>)
}

export default DescriptionTab