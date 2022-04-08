import { Instance } from "mobx-state-tree"
import { AnimalBreedPageInfoModelBase } from "./AnimalBreedPageInfoModel.base"

/* The TypeScript type of an instance of AnimalBreedPageInfoModel */
export interface AnimalBreedPageInfoModelType extends Instance<typeof AnimalBreedPageInfoModel.Type> {}

/* A graphql query fragment builders for AnimalBreedPageInfoModel */
export { selectFromAnimalBreedPageInfo, animalBreedPageInfoModelPrimitives, AnimalBreedPageInfoModelSelector } from "./AnimalBreedPageInfoModel.base"

/**
 * AnimalBreedPageInfoModel
 *
 * Information about the current page.
 */
export const AnimalBreedPageInfoModel = AnimalBreedPageInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
