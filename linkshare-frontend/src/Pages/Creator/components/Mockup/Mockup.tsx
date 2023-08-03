import { useProfileContext } from "../../../../context/Profile.context";
import Avatar from "./Avatar";

function Mockup() {

  const { backgroundColor } = useProfileContext().profile;

  const styleBackground = {background: backgroundColor};


  return (
    <div className='p-4 flex flex-col items-center rounded-md h-screen md:h-auto md:w-1/4 m-4 '  style={styleBackground}>
      <Avatar  />
    </div>
  );
}

export default Mockup;
