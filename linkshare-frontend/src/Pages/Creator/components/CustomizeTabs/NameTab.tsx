import { useProfileContext } from '../../../../context/Profile.context';
import { propertySetter } from '../../../../utils/propertySetter';
import BaseItem from '../CustomizeTabs/BaseItem';

//TODO: Add option to change font sizes, weight and style.

function NameTab() {

    const { profile } = useProfileContext();
    const { updateProfile } = useProfileContext();

    const handleChange = (newName: string) => {
        updateProfile(propertySetter('name',profile,newName))
    }


  return (
    <>
      <BaseItem>
        <div>
          <h2>Change Name</h2>

          <div>
            <input
              type='text'
              placeholder='Name'
              onChange={(e) => handleChange(e.currentTarget.value)}
              className='rounded w-full text-xs max-w-md'
            ></input>
          </div>
        </div>
      </BaseItem>
    </>
  );
}
export default NameTab;
