export type Shape = 'CIRCLE' | 'ROUNDED' | 'SQUARE';

type IconLink = {
    shape: Shape,
    icon: string,
    backgroundColor: string,
}

type BoxLink = {
    imgSrc: string,
    title: string,
    shape: Shape
}

export type Profile = {
    backgroundColor: string,
    avatar: {
        imageSrc: string,
        shape: Shape,
    },
    name: string,
    description: string,
    iconsLinks: Array<IconLink>,
    boxLinks: Array<BoxLink>
    footer: {
        shape: Shape,
        backgroundColor: string
    }
}