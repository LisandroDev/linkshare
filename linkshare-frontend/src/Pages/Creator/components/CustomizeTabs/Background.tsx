import { useState } from 'react';
import { useProfileContext } from '../../../../context/Profile.context';
import { RgbaStringColorPicker } from 'react-colorful';
import BaseItem from './BaseItem';
import { propertySetter } from '../../../../utils/propertySetter';

function Background() {
  const [color, setColor] = useState<string>('');
  const { profile, updateProfile } = useProfileContext();

  const styleBackground = { background: color === '' ? profile.backgroundColor : color };

  const changeColor = (newColor: string) => {
    updateProfile(propertySetter('backgroundColor', profile, newColor));
  };

  const handleChange = (inputCurrentValue: string) => {
    setColor(inputCurrentValue);
  };


  return (
    <>
      <BaseItem>
        <div className='flex flex-col items-center gap-4'>
          <input
            onChange={(e) => handleChange(e.currentTarget.value)}
            value={color}
            className='rounded w-full text-xs max-w-md'
            type='text'
            placeholder='Change Background Color'
          />
          <button onClick={() => changeColor(color)} className="border p-2 border-[#C14BC5] rounded-md">Change color</button>
        </div>
        <div className='w-24 h-6' style={styleBackground} />
        <RgbaStringColorPicker color={color} onChange={setColor} />
      </BaseItem>
    </>)

}

export default Background;
