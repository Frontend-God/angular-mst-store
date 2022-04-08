import { Instance } from "mobx-state-tree"
import { AnimalSpeciesModelBase } from "./AnimalSpeciesModel.base"

/* The TypeScript type of an instance of AnimalSpeciesModel */
export interface AnimalSpeciesModelType extends Instance<typeof AnimalSpeciesModel.Type> {}

/* A graphql query fragment builders for AnimalSpeciesModel */
export { selectFromAnimalSpecies, animalSpeciesModelPrimitives, AnimalSpeciesModelSelector } from "./AnimalSpeciesModel.base"

/**
 * AnimalSpeciesModel
 *
 * Animal Entity - parent of all animal classes
 */
export const AnimalSpeciesModel = AnimalSpeciesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
