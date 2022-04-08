import { Instance } from "mobx-state-tree"
import { AnimalBreedModelBase } from "./AnimalBreedModel.base"

/* The TypeScript type of an instance of AnimalBreedModel */
export interface AnimalBreedModelType extends Instance<typeof AnimalBreedModel.Type> {}

/* A graphql query fragment builders for AnimalBreedModel */
export { selectFromAnimalBreed, animalBreedModelPrimitives, AnimalBreedModelSelector } from "./AnimalBreedModel.base"

/**
 * AnimalBreedModel
 *
 * Animal Breed Subtype of the Animal Species
 */
export const AnimalBreedModel = AnimalBreedModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
