import { apiFetch, RequestMethod } from "api";
import { HeroBrief, HeroProfile } from "types/hero";

export const getHeroesList = async () => {
  const list = await apiFetch(
    "/heroes",
    RequestMethod.get
  );

  return list as HeroBrief[];
};

export const getHeroProfile = async (heroId: string | number) => {
  const profile = await apiFetch(
    `/heroes/${heroId}/profile`,
    RequestMethod.get
  );

  return profile as HeroProfile;
};

export const saveHeroProfile = async (heroId: string, newProfile: HeroProfile) => {
  const response = await apiFetch(
    `/heroes/${heroId}/profile`,
    RequestMethod.patch,
    newProfile
  );

  return response;
};