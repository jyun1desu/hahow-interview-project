import { getHeroesList, getHeroProfile, saveHeroProfile } from "api/hero";
import { useEffect, useMemo, useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { HeroBrief, HeroProfile } from "types/hero";

export const heroListState = atom<HeroBrief[]>({
    key: 'heroListState',
    default: (async () => {
        const res = await getHeroesList();
        return res;
    })(),
})

export const heroProfileState = atom({
    key: 'heroProfile',
    default: null
})

export const currentHeroIdState = atom<string | null>({
    key: 'currentHeroIdState',
    default: null
})

export const heroProfileEditState = atom<HeroProfile | null>({
    key: 'heroProfileEdit',
    default: null
})

export const currentHeroProfileState = selector<HeroProfile | null>({
    key: 'currentHeroProfile',
    get: async ({ get }) => {
        const heroId = get(currentHeroIdState)
        if (!heroId) return null;
        const res = await getHeroProfile(heroId);
        return res;
    },
})

type Value = {
    heroProfile: HeroProfile | null;
    heroPoint: number;
    patchLoading: boolean;
}

type Handler = {
    updateProfile: (type: string, value: number) => void;
    saveProfile: () => void;
}

type UseHeroProfileFunc = (heroId: string) => [Value, Handler]

export const useHeroProfile: UseHeroProfileFunc = (heroId: string) => {
    const setCurrentHeroId = useSetRecoilState(currentHeroIdState)
    const currentHeroProfile = useRecoilValue(currentHeroProfileState)
    const [heroProfile, setHeroProfile] = useRecoilState(heroProfileEditState)
    const [patchLoading, setLoading] = useState(false);
    const heroPoint = useMemo(() => {
        if (!currentHeroProfile) return 0;
        return Object.values(currentHeroProfile).reduce((a, c) => {
            return a + c
        }, 0);
    }, [currentHeroProfile])

    useEffect(() => {
        setCurrentHeroId((heroId))
    }, [heroId, setCurrentHeroId])

    useEffect(() => {
        setHeroProfile(currentHeroProfile)
    }, [currentHeroProfile, setHeroProfile])

    const updateProfile = (type: string, value: number) => {
        setHeroProfile(pre => ({
            ...pre,
            [type]: value
        }))
    }

    const saveProfile = async () => {
        setLoading(true);
        await saveHeroProfile(heroId, heroProfile as HeroProfile);
        setLoading(false);
    }

    return [{
        heroProfile,
        heroPoint,
        patchLoading
    }, {
        updateProfile,
        saveProfile
    }
    ]
}