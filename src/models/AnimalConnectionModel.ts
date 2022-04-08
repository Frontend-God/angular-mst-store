import { Instance } from "mobx-state-tree"
import { AnimalConnectionModelBase } from "./AnimalConnectionModel.base"

/* The TypeScript type of an instance of AnimalConnectionModel */
export interface AnimalConnectionModelType extends Instance<typeof AnimalConnectionModel.Type> {}

/* A graphql query fragment builders for AnimalConnectionModel */
export { selectFromAnimalConnection, animalConnectionModelPrimitives, AnimalConnectionModelSelector } from "./AnimalConnectionModel.base"

/**
 * AnimalConnectionModel
 *
 * Connection for Animal.
 */
export const AnimalConnectionModel = AnimalConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
