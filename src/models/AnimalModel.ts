import { Instance } from "mobx-state-tree"
import { AnimalModelBase } from "./AnimalModel.base"

/* The TypeScript type of an instance of AnimalModel */
export interface AnimalModelType extends Instance<typeof AnimalModel.Type> {}

/* A graphql query fragment builders for AnimalModel */
export { selectFromAnimal, animalModelPrimitives, AnimalModelSelector } from "./AnimalModel.base"

/**
 * AnimalModel
 *
 * Animal Entity - parent of all animal classes
 */
export const AnimalModel = AnimalModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
