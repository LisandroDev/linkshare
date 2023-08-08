import { Shape } from "../../../../types/types";
import { useEffect, useState } from "react";
import BaseItem from "./BaseItem";
import { useProfileContext } from "../../../../context/Profile.context";
import { propertySetter } from "../../../../utils/propertySetter";


//TODO: Add option to add image SRC.
//TODO: Add option to change size.

function AvatarTab() {
    const [radioValue, setRadioValue] = useState('');
    const { profile, updateProfile } = useProfileContext();


    useEffect(() => {
        setRadioValue(profile.avatar.shape);
    }, [profile])

    const onChangeRadio = (radioValue: string) => {
        setRadioValue(radioValue);
        updateProfile(propertySetter('avatar', profile, { ...profile.avatar, shape: radioValue as Shape }))
    }

    return (<div className="flex flex-col mt-8 gap-y-4 items-center">
        <h1 className=" font-medium">Change Shape</h1>
        {/* {Shape Changer} */}
        <BaseItem>
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-8" >
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Rounded</label>
                        <input onChange={(e) => onChangeRadio(e.currentTarget.value)} checked={radioValue == 'ROUNDED'} value="ROUNDED" type="radio" name="shape" id="rounded" />
                    </div>
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Circle</label>
                        <input onChange={(e) => onChangeRadio(e.currentTarget.value)} checked={radioValue == 'CIRCLE'} value="CIRCLE" type="radio" name="shape" id="rounded" />
                    </div>
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Square</label>
                        <input onChange={(e) => onChangeRadio(e.currentTarget.value)} checked={radioValue == 'SQUARE'} value="SQUARE" type="radio" name="shape" id="rounded" />
                    </div>

                </div>
            </div>
        </BaseItem>
        <h1 className=" font-medium">Change Size</h1>
        <BaseItem>
            <h1> Soy avatar</h1>
        </BaseItem>
    </div>)
}

export default AvatarTab;