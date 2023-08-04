import { Shape } from "../../../../types/types";
import { useState } from "react";
import BaseItem from "./BaseItem";


function AvatarTab() {

    const [radioValue, setRadioValue] = useState('');
    
    const onChangeRadio = (radioValue: Shape) => {
        setRadioValue(radioValue)
    }

    return (<>
        {/* {Shape Changer} */}
        <BaseItem>
            <div className="flex flex-col items-center">
                <h1 className="text-lg  mb-10">Shape</h1>
                <div className="flex flex-row gap-8" >
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Rounded</label>
                        <input onSelect={(e) => onChangeRadio(e.currentTarget.value)} value="CIRCLE" type="radio" name="shape" id="rounded" />
                    </div>
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Circle</label>
                        <input type="radio" name="shape" id="rounded" />
                    </div>
                    <div className="flex flex-col  items-center gap-y-2">
                        <label htmlFor="rounded">Square</label>
                        <input type="radio" name="shape" id="rounded" />
                    </div>

                </div>
            </div>
        </BaseItem>

        <BaseItem>
            <h1> Soy avatar</h1>
        </BaseItem>
    </>)
}

export default AvatarTab;