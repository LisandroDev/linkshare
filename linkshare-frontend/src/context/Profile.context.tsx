import { ReactNode, createContext, useState, useContext } from "react";
import { Profile } from "../types/types";

interface ProfileContextType {
    profile: Profile
    updateProfile: (newProfile: Profile) => void;
}

interface ProfileProviderProps {
    children: ReactNode;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [profile, setProfile] = useState<Profile>({
        backgroundColor: '#D7DAA4',
        avatar: {
            imageSrc: '',
            shape: 'CIRCLE',
        },
        name: 'Jorge',
        description: 'Full Stack',
        iconsLinks: [],
        boxLinks: [],
        footer: {
            shape: 'CIRCLE',
            backgroundColor: '#FAFA',
        },
    })

    const updateProfile = (newProfile: Profile) => {
        setProfile(newProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );


}

export function useProfileContext() {
    const context = useContext(ProfileContext);
    if (!context) {
      throw new Error('useProfileContext must be used within a ProfileProvider');
    }
    return context;
  }