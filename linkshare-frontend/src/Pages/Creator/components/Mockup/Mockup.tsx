import { useProfileContext } from "../../../../context/Profile.context";
import Name from "./Name";
import Avatar from "./Avatar";
import Description from "./Description";

function Mockup() {

  const { backgroundColor } = useProfileContext().profile;

  const styleBackground = {background: backgroundColor};


  return (
    <div className='p-4 flex flex-col items-center rounded-md h-screen md:h-auto md:w-1/4 m-4   shadow-lg'  style={styleBackground}>
      <Avatar  />
      <Name />
      <Description />
    </div>
  );
}

export default Mockup;
