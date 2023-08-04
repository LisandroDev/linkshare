import defaultImg from '../../../../assets/defaultSquare.jpg'
import { useProfileContext } from '../../../../context/Profile.context';
import { shapeToClass } from '../../../../utils/shapeToClass';

function Avatar() {

    const { imageSrc, shape } = useProfileContext().profile.avatar;

    return (
        <img src={imageSrc ? imageSrc : defaultImg} className={`w-20 ${shapeToClass(shape)}`} alt='Avatar image' />
    )
}

export default Avatar;