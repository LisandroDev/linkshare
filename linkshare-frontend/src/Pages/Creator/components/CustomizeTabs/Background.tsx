import { useState } from 'react';
import { useProfileContext } from '../../../../context/Profile.context';
import { HexColorPicker } from 'react-colorful';
import BaseItem from './BaseItem';

function Background() {
  const [color, setColor] = useState<string>('');
  const { profile, updateProfile } = useProfileContext();

  const styleBackground = { background: color === '' ? profile.backgroundColor : color };

  const changeColor = (newColor: string) => {
    const deepClone = structuredClone(profile);
    deepClone.backgroundColor = newColor;
    updateProfile(deepClone);
  };

  const handleChange = (inputCurrentValue: string) => {
    setColor(inputCurrentValue);
  };

  // return (
  //   <>
  //     <div className='w-full flex flex-col  text-xs h-[50vh] md:h-auto md:flex-row gap-4 items-center justify-around mt-8 p-8 bg-[#FAFAFA] rounded-md '>
  //       <div className='flex flex-col items-center gap-4'>
  //         <input
  //           onChange={(e) => handleChange(e.currentTarget.value)}
  //           value={color}
  //           className='rounded w-full text-xs max-w-md'
  //           type='text'
  //           placeholder='Change Background Color'
  //         />
  //         <button onClick={() => changeColor(color)} className="border p-2 border-[#C14BC5] rounded-md">Change color</button>
  //       </div>
  //       <div className='w-24 h-6' style={styleBackground} />
  //       <HexColorPicker color={color} onChange={setColor} />
  //     </div>
  //   </>
  // );

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
        <HexColorPicker color={color} onChange={setColor} />
      </BaseItem>
    </>)

}

export default Background;
