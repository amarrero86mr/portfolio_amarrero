import { createContext, useState } from "react";

export type TSkillContext = {
    addRemuveSkill: string,
    setAddRemuveSkill: React.Dispatch<React.SetStateAction<string>>,
    skillSelected: Array<string>,
    setSkillSelected: React.Dispatch<React.SetStateAction<Array<string>>>,
    onOffSkills(id: string): void
};

type TSkillProviderProps = {
    children: React.ReactNode;
};

export const SkillContext = createContext<TSkillContext>({
    addRemuveSkill: '',
    setAddRemuveSkill: () => console.error('setSelectSkill fn no implemented!'),
    skillSelected: [],
    setSkillSelected: () => console.error('setSkillSelected fn no implemented!'),
    onOffSkills: () => console.error('onOffSkills fn no implemented!'),

})

const SkillProvider: React.FC<TSkillProviderProps> = ({ children }) => {
    const [addRemuveSkill, setAddRemuveSkill] = useState<string>('');
    const [skillSelected, setSkillSelected] = useState<Array<string>>([])

    const onOffSkills = (id: string) => {
        if (skillSelected.find(key => key == id)) {
            let datas = skillSelected.filter((da) => da != id)
            setSkillSelected(datas);
        } else {
            let datas = [...skillSelected]
            datas.push(id)
            setSkillSelected(datas)
        }
    }


    return (
        <SkillContext.Provider
            value={{
                addRemuveSkill,
                setAddRemuveSkill,
                skillSelected,
                setSkillSelected,
                onOffSkills,
            }} >
            {children}
        </SkillContext.Provider>
    )

};

export default SkillProvider;