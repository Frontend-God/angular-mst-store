import { Instance } from "mobx-state-tree"
import { AnimalPageInfoModelBase } from "./AnimalPageInfoModel.base"

/* The TypeScript type of an instance of AnimalPageInfoModel */
export interface AnimalPageInfoModelType extends Instance<typeof AnimalPageInfoModel.Type> {}

/* A graphql query fragment builders for AnimalPageInfoModel */
export { selectFromAnimalPageInfo, animalPageInfoModelPrimitives, AnimalPageInfoModelSelector } from "./AnimalPageInfoModel.base"

/**
 * AnimalPageInfoModel
 *
 * Information about the current page.
 */
export const AnimalPageInfoModel = AnimalPageInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
