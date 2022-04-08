import { Instance } from "mobx-state-tree"
import { AnimalBreedConnectionModelBase } from "./AnimalBreedConnectionModel.base"

/* The TypeScript type of an instance of AnimalBreedConnectionModel */
export interface AnimalBreedConnectionModelType extends Instance<typeof AnimalBreedConnectionModel.Type> {}

/* A graphql query fragment builders for AnimalBreedConnectionModel */
export { selectFromAnimalBreedConnection, animalBreedConnectionModelPrimitives, AnimalBreedConnectionModelSelector } from "./AnimalBreedConnectionModel.base"

/**
 * AnimalBreedConnectionModel
 *
 * Connection for AnimalBreed.
 */
export const AnimalBreedConnectionModel = AnimalBreedConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
