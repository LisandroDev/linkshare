import { FormEvent, useEffect, useState } from 'react';
import { propertySetter } from '../../../../utils/propertySetter';
import BaseItem from './BaseItem';
import { useProfileContext } from '../../../../context/Profile.context';
import { Profile, Shape } from '../../../../types/types';

function LinksWithIconsTab() {
  const [iconsLinks, setIconsLinks] = useState<Profile['iconsLinks']>([]);
  const { profile, updateProfile } = useProfileContext();

  useEffect(() => {
    setIconsLinks(profile.iconsLinks);
  }, [profile]);

  const handleAddLink = (event: FormEvent) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const entries = Object.fromEntries(form.entries());
    const cloneOfIconLinks = profile.iconsLinks.slice();
    cloneOfIconLinks.push({
      shape: entries.shape as Shape,
      icon: entries.icons as string,
      backgroundColor: '#FAFAFA',
    });
    updateProfile(propertySetter('iconsLinks', profile, cloneOfIconLinks));
  };

  return (
    <div className='flex flex-col mt-8 items-center  h-[60vh] overflow-y-auto'>
      <h1 className=' font-medium'>Add Links</h1>
      <BaseItem>
        <form
          method='POST'
          className='flex wrap flex-col md:flex-row gap-8'
          onSubmit={handleAddLink}
        >
          <select className='rounded-md text-sm' name='icons'>
            <option value='github'>GitHub</option>
            <option value='linkedin'>LinkedIn</option>
            <option value='youtube'>YouTube</option>
            <option value='instagram'>Instagram</option>
            <option value='twitter'>Twitter</option>
            <option value='Facebook'>Facebook</option>
            <option value='UrlIcon'>URL Icon</option>
            <option value='world'>World Icon</option>
          </select>
          <select className='rounded-md text-sm' name='shape'>
            <option value='CIRCLE'>Circle</option>
            <option value='SQUARE'>Square</option>
            <option value='ROUNDED'>Rounded</option>
          </select>

          <input
            className='rounded-md text-sm'
            type='text'
            placeholder='Link'
          />
          <button
            className='border p-2 border-[#C14BC5] rounded-md  '
            type='submit'
          >
            Add Link
          </button>
        </form>
      </BaseItem>

      {iconsLinks.map((iconLink) => (
        <BaseItem>
          <div>{iconLink.icon}</div>
        </BaseItem>
      ))}
    </div>
  );
}
export default LinksWithIconsTab;
