import defaultImg from '../../../../assets/defaultSquare.jpg'
import { useProfileContext } from '../../../../context/Profile.context';
import { shapeToClass } from '../../../../utils/shapeToClass';

function Avatar() {

    const { imageSrc, shape } = useProfileContext().profile.avatar;

    return (
        <img src={imageSrc ? imageSrc : defaultImg} className={`w-28  shadow-lg ${shapeToClass(shape)}`} alt='Avatar image' />
    )
}

export default Avatar;