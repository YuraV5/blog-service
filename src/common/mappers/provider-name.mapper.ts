import { ProviderName } from "../../../prisma/generated/prisma";
import { ProvidersNamesEnum } from "../enum";

export const prismaToAppProvider = (provider: ProviderName): ProvidersNamesEnum => {
  switch (provider) {
    case ProviderName.EMAIL:
      return ProvidersNamesEnum.EMAIL;
    case ProviderName.GOOGLE:
      return ProvidersNamesEnum.GOOGLE;
    case ProviderName.FACEBOOK:
      return ProvidersNamesEnum.FACEBOOK;
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
};
